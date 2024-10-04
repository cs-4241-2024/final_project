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
mongoose.connect(
  "mongodb+srv://azzhang3:eGPDbrMNzogUpygL@cluster0.iuxm8.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true }, // Username is required
  googleId: { type: String, unique: true }, // Google ID will be used if logging in with Google
  password: {
    type: String,
    required: function () {
      // Only require password if Google ID is not provided
      return !this.googleId;
    },
  },
  email: { type: String },
  profilePhoto: { type: String },
});

// Cocktail schema
const cocktailSchema = new mongoose.Schema({
  cocktail: String,
  rating: Number,
  review: String,
  username: String, // Associated with the user
});

// Models
const User = mongoose.model("User", userSchema);
const Cocktail = mongoose.model("Cocktail", cocktailSchema);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Session middleware setup
app.use(
  session({
    secret: "your_secret_key", // Replace this with a secure secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set secure: true if using HTTPS
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport serialize and deserialize user
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
      clientID:
        "414493278145-een95ctp3iqpm8uvv90l70emb827f3bn.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Extract user's email, handle case when emails array is missing or undefined
      const email =
        profile.emails && profile.emails.length > 0
          ? profile.emails[0].value
          : null;

      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          return done(null, existingUser);
        } else {
          // If the user doesn't exist, create a new user
          new User({
            username: profile.displayName, // Use Google profile name as the username
            googleId: profile.id, // Google ID for future logins
            profilePhoto: profile.photos[0].value, // Save profile picture (if available)
            email: email, // Save email (if available)
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

// Middleware to ensure user is authenticated
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/"); // If not authenticated, redirect to login page
}

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Serve index.html for unauthenticated users (login screen)
app.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect("/home"); // Redirect to home if already logged in
  }
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Serve home.html for authenticated users
app.get("/home", isLoggedIn, (req, res) => {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

// Google Auth Routes for Login/Registration
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account", // Force account selection
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Ensure session.username is set for Google login users
    req.session.username = req.user.username; // Set username for session
    // Successful authentication, redirect to home
    res.redirect("/home");
  }
);

// Serve user reviews only if authenticated
app.get("/cocktails", isLoggedIn, (req, res) => {
  Cocktail.find({ username: req.user.username })
    .then((cocktails) => res.json(cocktails))
    .catch((err) => res.status(500).json({ error: "An error occurred", err }));
});

// Google Auth Routes for Login/Registration
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect to main application
    res.redirect("/home.html");
  }
);

// Registration route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    // Hash the password before saving
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

    // Log the user in and redirect
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

// Logout route
app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err); // Pass error to the next middleware
    }
    res.redirect("/"); // Redirect to login page
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
