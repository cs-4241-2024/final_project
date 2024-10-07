import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import ViteExpress from 'vite-express';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection error: ", error));

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, sameSite: 'lax' }
}));

app.use(passport.initialize());
app.use(passport.session());

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  githubId: { type: String, unique: true }
});

const User = mongoose.model('User', userSchema);

const jobApplicationSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  dueDate: { type: Date, required: true },
  submitted: { type: Boolean, default: false },
  status: { type: String, enum: ['Denied', 'Accepted', 'Under Review', 'Interview Stage'], required: true },
  githubId: { type: String, required: true }  
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/callback", //CHANGE THIS TO GLITCH URL AFTER!!!
},
async function(accessToken, refreshToken, profile, done) {
  try {
    let user = await User.findOne({ githubId: profile.id });
    if (!user) {
      user = new User({
        githubId: profile.id,
        username: profile.username,
      });
      await user.save();
    }
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}
));


passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

const checkLogin = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized, please log in.' });
};

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => res.redirect('/')
);

app.get('/check-session', (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({ loggedIn: true, username: req.user.username });
  }
  res.status(401).json({ loggedIn: false });
});

app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ message: 'Error during logout.' });
    req.session.destroy((err) => {
      if (err) return res.status(500).json({ message: 'Error destroying session.' });
      res.status(200).json({ message: 'Logged out successfully.' });
    });
  });
});


app.get('/applications', checkLogin, async (req, res) => { //gets users id and match them w the ids in the server to find user applications
  try {
    const githubId = req.user.githubId;  
    const applications = await JobApplication.find({ githubId });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error loading applications' });
  }
});


app.post('/applications', checkLogin, async (req, res) => {
  try {
    const { companyName, jobTitle, dueDate, submitted, status } = req.body;
    const githubId = req.user.githubId;  
    const newApplication = new JobApplication({
      companyName,
      jobTitle,
      dueDate,
      submitted,
      status,
      githubId  
    });
    const savedApplication = await newApplication.save();
    res.status(201).json(savedApplication);
  } catch (error) {
    res.status(400).json({ message: 'Error saving application' });
  }
});

app.get('/applications/all', async (req, res) => {
  try {
    const applications = await JobApplication.find({}); 
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error loading applications' });
  }
});



app.put('/applications/:id', checkLogin, async (req, res) => {
  try {
    const updatedApplication = await JobApplication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedApplication) return res.status(404).json({ message: 'Application not found' });
    res.status(200).json(updatedApplication);
  } catch (error) {
    res.status(500).json({ message: 'Error updating application' });
  }
});

app.delete('/applications/:id', checkLogin, async (req, res) => {
  try {
    const deletedApplication = await JobApplication.findByIdAndDelete(req.params.id);
    if (!deletedApplication) return res.status(404).json({ message: 'Application not found' });
    res.status(200).json({ message: 'Application deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting application' });
  }
});

// Start ViteExpress Server
ViteExpress.listen(app, port, () => {
  console.log(`Server is listening on port ${port}...`);
});
