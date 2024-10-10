import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import * as db from "./database.ts";
import session from "express-session";
import bodyParser from "body-parser";
import { Food } from "./types.ts";

const app = express();
const port = process.env.PORT || 3000;
const template = "main";

app.engine(
  "handlebars",
  engine({
    defaultLayout: template,
    extname: ".handlebars",
    helpers: {
      lessThan: (a: number, b: number) => a < b
    }
  }),
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

declare module "express-session" {
  export interface SessionData {
    userID?: number;
  }
}


//Setting up server session
app.use(
  session({
    secret: "FIXMEFIXMEFIXMEFIXME", //FIXME
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === "production" },
  }),
);

// Pages
function pageHandleAuth(req, res) {
  const userID = req.session.userID;
  if (!userID) {
    res.redirect("/login");
  }
  return userID;
}

app.get("/", async (req, res, next) => {
  const userID = pageHandleAuth(req, res);
  if (!userID) return;

  const username = await db.getUsername(userID);
  const locations = await db.getLocations(userID);

  res.render("home", { username, locations });
});

app.get("/toorder", async (req, res, next) => {
  const userID = pageHandleAuth(req, res);
  if (!userID) return;

  const username = await db.getUsername(userID);
  const foods = await db.getFoodsToOrder(userID);

  res.render("toorder", { username, foods });
});



//Redner location
async function renderLocation(
  res,
  userID: number,
  locID: number,
  useTemplate: boolean,
) {
  const username = await db.getUsername(userID);
  const location = await db.getLocation(userID, locID);
  const foods = await db.getFoods(userID, locID);

  res.render("location", {
    username,
    foods,
    location,
    template: useTemplate ? template : false,
  });
}

function validateParam(param: string): boolean {
  return !param || param.length < 1 || isNaN(Number(param));
}



app.get("/location/:id", async (req, res, next) => {
  const userID = pageHandleAuth(req, res);
  if (!userID) return;

  if (validateParam(req.params.id)) {
    res.redirect("/");
    return;
  }
  const locationID = Number(req.params.id);

  await renderLocation(res, userID, locationID, true);
});


//Handling editing food and their parameters
app.get(
  "/location/:locationID/edit-food-dialog/:foodID",
  async (req, res, next) => {
    const userID = pageHandleAuth(req, res);
    if (!userID) return;

    if (
      validateParam(req.params.locationID) ||
      validateParam(req.params.foodID)
    ) {
      res.send("Error making edit food dialog.");
      return;
    }
    const locationID = Number(req.params.locationID);
    const foodID = Number(req.params.foodID);

    const location = await db.getLocation(userID, locationID);
    const food = await db.getFood(userID, locationID, foodID);

    res.render("partials/food/edit", { food, location, template: false });
  },
);

// API
function apiHandleAuth(req, res) {
  const userID = req.session.userID;
  if (!userID) {
    res.status(401).json({ error: "Unauthorized" });
  }
  return userID;
}



app.post("/api/location/make", async (req, res) => {
  const userID = apiHandleAuth(req, res);
  if (!userID) return;
  const { name } = req.body;
  const locationID = await db.makeLocation(userID, name);
  if (locationID) {
    res.status(201).redirect(`../../location/${locationID}`);
  } else {
    res.status(500).json({ error: `Make location failed` });
  }
});



app.post("/api/location/edit", async (req, res) => {
  const userID = apiHandleAuth(req, res);
  if (!userID) return;
  const { locationID, name } = req.body;
  const success = await db.editLocation(userID, locationID, name);
  if (locationID) {
    await renderLocation(res, userID, locationID, false);
  } else {
    res.status(500).send("Edit location failed");
  }
});

app.post("/api/location/delete", async (req, res) => {
  const userID = apiHandleAuth(req, res);
  if (!userID) return;
  const { locationID } = req.body;
  const success = await db.deleteLocation(userID, locationID);
  if (success) {
    res.status(201).redirect(`../../`);
  } else {
    res.status(500).json({ error: `Delete location failed` });
  }
});


//handle creating a new food
app.post("/api/food/make", async (req, res) => {
  const userID = apiHandleAuth(req, res);
  if (!userID) return;
  const food = req.body as Food;
  const success = await db.makeFood(userID, food);
  if (success) {
    await renderLocation(res, userID, food.locationID, false);
  } else {
    res.status(500).send("Make food failed");
  }
});


//Handle Food item Editing
app.post("/api/food/edit", async (req, res) => {
  const userID = apiHandleAuth(req, res);
  if (!userID) return;
  const { button, ...foodData } = req.body as Food & { button: string };
  const food: Food = foodData;

  if (button == "delete") {
    const success = await db.deleteFood(userID, food.id);
    if (success) {
      await renderLocation(res, userID, food.locationID, false);
    } else {
      res.status(500).send("Delete food failed");
    }
  } else if (button == "save") {
    const success = await db.editFood(userID, food);
    if (success) {
      await renderLocation(res, userID, food.locationID, false);
    } else {
      res.status(500).send("Edit food failed");
    }
  }
});

// Auth Pages
app.get("/login", (req, res, next) => {
  res.render("login");
});

app.get("/signup", (req, res, next) => {
  res.render("signup");
});

// Auth API
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userID = await db.tryLogin(username, password);

  if (userID) {
    req.session.userID = userID;
    res.redirect("/");
  } else {
    res.render("login", { error: "Invalid credentials" });
  }
});


//Handle ne wUsers through sign in feature
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const userID = await db.makeUser(username, password);

  if (userID) {
    req.session.userID = userID;
    res.redirect("/");
  } else {
    res.render("signup", { error: "Signup failed" });
  }
});


//Handle Logouts
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    res.redirect("/login");
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  console.log("Shutting down gracefully...");
  db.close();
  process.exit(0);
});
