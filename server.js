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

// Define the Cocktail schema directly here
const cocktailSchema = new mongoose.Schema({
  idDrink: { type: Number, required: true },
  strDrink: { type: String, required: true },
  strDrinkAlternate: { type: String },
  strTags: { type: String },
  strVideo: { type: String },
  strCategory: { type: String },
  strIBA: { type: String },
  strAlcoholic: { type: String },
  strGlass: { type: String },
  strInstructions: { type: String },
  strIngredient1: { type: String },
  strIngredient2: { type: String },
  strIngredient3: { type: String },
  strIngredient4: { type: String },
  strIngredient5: { type: String },
  strIngredient6: { type: String },
  strIngredient7: { type: String },
  strIngredient8: { type: String },
  strIngredient9: { type: String },
  strIngredient10: { type: String },
  strIngredient11: { type: String },
  strIngredient12: { type: String },
  strIngredient13: { type: String },
  strIngredient14: { type: String },
  strIngredient15: { type: String },
  strMeasure1: { type: String },
  strMeasure2: { type: String },
  strMeasure3: { type: String },
  strMeasure4: { type: String },
  strMeasure5: { type: String },
  strMeasure6: { type: String },
  strMeasure7: { type: String },
  strMeasure8: { type: String },
  strMeasure9: { type: String },
  strMeasure10: { type: String },
  strMeasure11: { type: String },
  strMeasure12: { type: String },
  strMeasure13: { type: String },
  strMeasure14: { type: String },
  strMeasure15: { type: String },
  strImageSource: { type: String },
  strImageAttribution: { type: String },
  strCreativeCommonsConfirmed: { type: String },
  dateModified: { type: String },
});

// Create the Cocktail model
const Cocktail = mongoose.model("Cocktail", cocktailSchema);

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

app.get("/allCocktails", (req, res) => {
  Cocktail.find({})
    .then((cocktails) => {
      console.log("Cocktails retrieved:", cocktails); // Log all retrieved cocktails
      res.json(cocktails); // Send cocktails data to frontend
    })
    .catch((err) => {
      console.error("Error retrieving cocktails:", err); // Log errors if any
      res.status(500).json({ error: "Error retrieving cocktails" });
    });
});

app.post("/searchCocktails", (req, res) => {
  const { ingredients } = req.body;

  // Log the ingredients to verify what is being received
  console.log("Received ingredients:", ingredients);

  Cocktail.find({
    $or: [
      { strIngredient1: { $in: ingredients } },
      { strIngredient2: { $in: ingredients } },
      { strIngredient3: { $in: ingredients } },
      { strIngredient4: { $in: ingredients } },
      { strIngredient5: { $in: ingredients } },
      { strIngredient6: { $in: ingredients } },
      { strIngredient7: { $in: ingredients } },
      { strIngredient8: { $in: ingredients } },
      { strIngredient9: { $in: ingredients } },
      { strIngredient10: { $in: ingredients } },
      { strIngredient11: { $in: ingredients } },
      { strIngredient12: { $in: ingredients } },
      { strIngredient13: { $in: ingredients } },
      { strIngredient14: { $in: ingredients } },
      { strIngredient15: { $in: ingredients } },
    ],
  })
    .then((cocktails) => {
      res.json(cocktails); // Send cocktails to frontend
    })
    .catch((err) => {
      res.status(500).json({ error: "Error fetching cocktails" });
    });
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
