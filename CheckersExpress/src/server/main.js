import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.use(express.static('src/client/assets'))

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
