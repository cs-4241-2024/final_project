const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bcrypt = require("bcrypt");
const path = require("path");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();
const port = 3000;

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://azzhang3:eGPDbrMNzogUpygL@cluster0.iuxm8.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  googleId: { type: String, unique: true },
  password: {
    type: String,
    required: function () {
      return !this.googleId;
    },
  },
  email: { type: String },
  profilePhoto: { type: String },
});

const User = mongoose.model("User", userSchema);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Session middleware setup
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Passport Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: "your-client-id",
      clientSecret: "your-client-secret",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      const email =
        profile.emails && profile.emails.length > 0
          ? profile.emails[0].value
          : null;

      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          return done(null, existingUser);
        } else {
          new User({
            username: profile.displayName,
            googleId: profile.id,
            profilePhoto: profile.photos[0].value,
            email: email,
          })
            .save()
            .then((newUser) => {
              return done(null, newUser);
            });
        }
      });
    }
  )
);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

app.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect("/home");
  }
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/home", isLoggedIn, (req, res) => {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    req.session.username = req.user.username;
    res.redirect("/home");
  }
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
});

app.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    req.login(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect("/home");
    });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
});

// Define a schema for the cocktail data
const cocktailSchema = new mongoose.Schema({
  idDrink: Number,
  strDrink: String,
  strCategory: String,
  strAlcoholic: String,
  strGlass: String,
  strInstructions: String,
  strDrinkThumb: String,
  strIngredient1: String,
  strIngredient2: String,
  strIngredient3: String,
  strIngredient4: String,
  strIngredient5: String,
  strIngredient6: String,
  strIngredient7: String,
  strIngredient8: String,
  strIngredient9: String,
  strIngredient10: String,
  strIngredient11: String,
  strIngredient12: String,
  strIngredient13: String,
  strIngredient14: String,
  strIngredient15: String,
  strMeasure1: String,
  strMeasure2: String,
  strMeasure3: String,
  strMeasure4: String,
  strMeasure5: String,
  strMeasure6: String,
  strMeasure7: String,
  strMeasure8: String,
  strMeasure9: String,
  strMeasure10: String,
  strMeasure11: String,
  strMeasure12: String,
  strMeasure13: String,
  strMeasure14: String,
  strMeasure15: String,
});

// Create the Cocktail model
const Cocktail = mongoose.model("Cocktail", cocktailSchema);

// Export the model if you put this in a separate file
module.exports = Cocktail;

// app.get("/api/cocktails", async (req, res) => {
//   const { ingredients } = req.query;

//   const ingredientsArray = ingredients
//     .split(",")
//     .map((ingredient) => ingredient.trim()); // Trim whitespaces

//   console.log("Ingredients Array:", ingredientsArray); // Log the split array

//   try {
//     // Construct query using native JavaScript regex literals
//     const query = {
//       $and: ingredientsArray.map((ingredient) => ({
//         $or: [
//           { strIngredient1: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient2: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient3: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient4: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient5: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient6: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient7: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient8: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient9: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient10: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient11: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient12: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient13: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient14: { $regex: new RegExp(ingredient, "i") } },
//           { strIngredient15: { $regex: new RegExp(ingredient, "i") } },
//         ],
//       })),
//     };

//     console.log("MongoDB Query:", JSON.stringify(query, null, 2)); // Log the query

//     const cocktails = await Cocktail.find(query);
//     console.log("Cocktails found:", cocktails);
//     res.json(cocktails);
//   } catch (error) {
//     console.error("Error fetching cocktails:", error);
//     res
//       .status(500)
//       .json({ message: "Error fetching cocktails", error: error.message });
//   }
// });

app.get("/api/cocktails", async (req, res) => {
  console.log("API route hit successfully");
  res.json({ message: "Route is working" });
  try {
    const cocktails = await Cocktail.find({
      strIngredient1: { $regex: /Light rum/i },
    });
    console.log("Cocktails found:", cocktails);
    res.json(cocktails);
  } catch (error) {
    console.error("Error fetching cocktails:", error);
    res
      .status(500)
      .json({ message: "Error fetching cocktails", error: error.message });
  }
});

app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
