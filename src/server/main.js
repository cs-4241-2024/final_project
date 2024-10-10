import express from "express"
import ViteExpress from "vite-express";
import userrouter from "./routes/userapi.mjs";
import gamerouter from "./routes/gameapi.mjs";
import commentrouter from "./routes/commentapi.mjs";
import twitchapirouter from "./routes/twitchapi.mjs";
import { config } from "dotenv";
import conn from "./database/mongodb.mjs";
import axios from "axios";

config();

const port = 3000,
      app = express();

app.use( express.static( 'dist' ) )
app.use(express.json());
app.use("/user", userrouter);
app.use("/game", gamerouter);
app.use("/comment", commentrouter);
app.use("/twitchapi", twitchapirouter);
app.get('/', (req, res) => {
  res.redirect('index.html');
})
app.listen(port)
