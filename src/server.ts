import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import * as db from "./database.ts";
import session from "express-session";
import bodyParser from "body-parser";
import { Food, FoodWithID } from "./types.ts";

const app = express();
const port = process.env.PORT || 3000;

app.engine(
  "handlebars",
  engine({ defaultLayout: "main", extname: ".handlebars" }),
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

app.get("/location/:id", async (req, res, next) => {
  const userID = pageHandleAuth(req, res);
  if (!userID) return;

  const locationID = Number(req.params.id);
  if (!req.params.id || req.params.id.length < 1 || isNaN(locationID)) {
    res.redirect("/");
    return;
  }

  const username = await db.getUsername(userID);
  const foods = await db.getFoods(userID, locationID);

  res.render("location", { username, foods, locationID });
});

// API
function apiHandleAuth(req, res) {
  const userID = req.session.userID;
  if (!userID) {
    res.status(401).json({ error: "Unauthorized" });
  }
  return userID;
}
function apiHandleSuccess(res, success: boolean, object: string, action: string) {
  if (success) {
    res.status(201).json({ message: `${object} ${action} successful` });
  } else {
    res.status(500).json({ error: `${object} ${action} failed` });
  }
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
  apiHandleSuccess(res, success, "location", "edit");
});
app.post("/api/location/delete", async (req, res) => {
  const userID = apiHandleAuth(req, res);
  if (!userID) return;
  const { locationID } = req.body;
  const success = await db.deleteLocation(userID, locationID);
  apiHandleSuccess(res, success, "location", "delete");
});

app.post("/api/food/make", async (req, res) => {
  const userID = apiHandleAuth(req, res);
  if (!userID) return;
  const food = req.body as Food;
  const success = await db.makeFood(userID, food);
  apiHandleSuccess(res, success, "food", "make");
});
app.post("/api/food/edit", async (req, res) => {
  const userID = apiHandleAuth(req, res);
  if (!userID) return;
  const food = req.body as FoodWithID;
  const success = await db.editFood(userID, food);
  apiHandleSuccess(res, success, "food", "edit");
});
app.post("/api/food/delete", async (req, res) => {
  const userID = apiHandleAuth(req, res);
  if (!userID) return;
  const { foodID } = req.body;
  const success = await db.deleteFood(userID, foodID);
  apiHandleSuccess(res, success, "food", "delete");
});

// Auth Pages
app.get("/login", (req, res, next) => {
  res.render("login");
});

app.get("/signup", (req, res, next) => {
  res.render("signup");
});

// Auth API
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const userID = await db.tryLogin(username, password);

  if (userID) {
    req.session.userID = userID;
    res.redirect("/");
  } else {
    res.render("login", { layout: false, error: "Invalid Credentials" });
  }
});

app.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;
  const userID = await db.makeUser(username, password);

  if (userID) {
    req.session.userID = userID;
    res.redirect("/");
  } else {
    res.render("signup", { layout: false, error: "Signup failed" });
  }
});

app.post("/api/logout", (req, res) => {
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
