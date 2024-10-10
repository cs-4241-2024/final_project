import express from "express";
import ViteExpress from "vite-express";
import cookieSession from "cookie-session";
import mongodb from "mongodb";
// import { mongoURI } from "./private.js";

import {
  MongoCollection,
  InventoryData,
  UserLoginData,
  Database,
  MongoCreateCollection,
  MongoCreateDocument,
  MongoUpdateDocuments,
  MongoUpdateDocumentsFilter,
  MongoDeleteDocuments,
  MongoFindDocuments,
  MongoClose,
} from "./database.js";

const cookie = cookieSession,
  { MongoClient, ObjectId } = mongodb;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookie({
    name: "session",
    keys: ["key1", "key2", "key3"],
  })
);

/*app.use( function( req,res,next) {
  if( req.session.login === true ){
    console.log("uh")
    next()}
  else
    return res.json({ success: false });
  })*/

async function run() {
  app.post("/login", async (req, res) => {
    let count = await MongoFindDocuments(
      { username: req.body.username, password: req.body.password },
      "user-logins"
    );
    if (count.length > 0) {
      // define a variable that we can check in other middleware
      // the session object is added to our requests by the cookie-session middleware
      req.session.login = true;
      req.session.username = req.body.username;
      req.session.access = count[0].access;
      console.log(req.session);

      // since login was successful, send the user to the main content
      // use redirect to avoid authentication problems when refreshing
      // the page or using the back button, for details see:
      // https://stackoverflow.com/questions/10827242/understanding-the-post-redirect-get-pattern
      return res.json({ success: true, access: req.session.access });
    } else {
      // password incorrect, redirect back to login page
      return res.json({ success: false });
    }
  });

  app.get("/loginStatus", async (req, res) => {
    return req.session.login === true;
  });
}

run().catch(console.dir);

app.post("/inv/getallitems", async (request, response) => {
  const items = await MongoFindDocuments({}, "inventory");
  response.send(items);
});

app.post("/inv/updateitem", async (request, response) => {
  const date = new Date();

  const itemData = request.body;
  const updatedItem = new InventoryData(
    itemData.name,
    itemData.quantity,
    itemData.unit,
    itemData.location,
    itemData.price,
    String(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`),
    itemData.notes
  );

  await MongoUpdateDocuments(updatedItem, "inventory");
  response.end();
});

/**
 * Delete existing item from the inventory.
 */
app.post("/inv/deleteitem", async (request, response) =>
  {
    const itemName = request.body.name;
    
    // Prevent deletion of important items (optional, depending on your needs)
    if (itemName !== "protected-item") // example for reserved item
    {
      await MongoDeleteDocuments({name: itemName}, "inventory");
    }
  
    response.end();
  });
  
/**
 * Get a list of all usernames from the database.
 */
app.post("/act/getusernames", async (request, response) => {
  const users = await MongoFindDocuments({}, "user-logins");
  const usernames = [];

  for (let i = 0; i < users.length; i++) {
    usernames.push(users[i].username);
  }

  response.send(usernames);
});

/**
 * Get a user's access level given their username.
 */
app.post("/act/getuserdata", async (request, response) => {
  try {
    const userdata = await MongoFindDocuments(
      { username: request.body.username },
      "user-logins"
    );
    const userOut = {
      username: userdata[0].username,
      access: userdata[0].access,
    };
    response.send(userOut);
  } catch (e) {
    response.send({ username: "No Users Found", access: "guest" });
  }
});

/**
 * Update access level and/or password for existing user.
 */
app.post("/act/updateexistinguser", async (request, response) => {
  const user = new UserLoginData(
    request.body.username,
    request.body.password,
    request.body.access
  );

  if (user.password !== "") {
    await MongoUpdateDocumentsFilter(
      { username: user.username },
      { access: user.access, password: user.password },
      "user-logins"
    );
  } else {
    await MongoUpdateDocumentsFilter(
      { username: user.username },
      { access: user.access },
      "user-logins"
    );
  }

  response.end();
});

/**
 * Delete existing user from database.
 */
app.post("/act/deleteexistinguser", async (request, response) => {
  /* Default admin and guest accounts cannot be deleted */
  if (request.body.username !== "admin" && request.body.username !== "guest") {
    await MongoDeleteDocuments(
      { username: request.body.username },
      "user-logins"
    );
  }

  response.end();
});

/**
 * Create a new user and add it to the database.
 */
app.post("/act/createnewuser", async (request, response) => {
  const user = new UserLoginData(
    request.body.username,
    request.body.password,
    request.body.access
  );

  await MongoCreateDocument(user, "user-logins");
  response.end();
});

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

/* ----- DEBUG ----- */

// const newcollection = new MongoCollection
// (
//   "dev-inventory",
//   InventoryData
// );

// const testlogindata = new UserLoginData
// (
//   "testuser",
//   "testpass",
//   "null"
// )

// const testinvdata = new InventoryData
// (
//   "Earplugs",
//   3,
//   "boxes",
//   1,
//   "$-.--",
//   "5/24/2024",
//   "backup stock shelf 1"
// )

// const testinvdata2 = new InventoryData
// (
//   "Earplugs",
//   30,
//   "boxes",
//   1,
//   "$-.--",
//   "5/24/2024",
//   "backup stock shelf 1"
// )

// MongoCreateDocument(testinvdata, "dev-inventory");
// MongoUpdateDocuments(testinvdata2, "dev-inventory");
// MongoUpdateDocumentsFilter({name: testinvdata.name}, {unit: "bags"}, "dev-inventory");
// console.log(await MongoFindDocuments({name: testinvdata.name}, "dev-inventory"));
// MongoDeleteDocuments({name: testinvdata.name}, "dev-inventory");
