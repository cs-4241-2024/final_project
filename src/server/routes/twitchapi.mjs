import express from "express";
import * as bodyParser from "express";
import axios from "axios";
import Game from "../models/Game.model.js"
const twitchapirouter = express.Router();
let bearer = '';

const connect = async () => {
  const info = {
    client_id : process.env.twitch_client_id,
    client_secret : process.env.twitch_client_secret,
    grant_type : "client_credentials"
  };
  
  const endpoint = `https://id.twitch.tv/oauth2/token?client_id=${info.client_id}&client_secret=${info.client_secret}&grant_type=${info.grant_type}`;
  const options = {
    'method': 'POST',
    'url': endpoint,
    headers : {}
  }
  console.log(endpoint)
   axios(options).then(res => {
     console.log(res)
     bearer = res.data.access_token;
       console.log("token: "  + bearer)
   });
  
}
twitchapirouter.get("/grabgames", async (req, res)=>{
  console.log("grb game token: "  + bearer);
  let offset = 0;
  const info = {
   'Client-ID': process.env.twitch_client_id, 
    'Authorization': "Bearer " + bearer,
    'Content-Type': 'text/plain', 
   };
  while (offset <= 2500){
   const endpoint = "https://api.igdb.com/v4/games";
   let data = 'fields name, first_release_date, involved_companies.*, cover.*; where cover != null; limit 500; offset ' + offset + ';';
   const options = {
     method: 'POST',
     url: endpoint,
     headers : info,
     data: data 
   }
  axios(options).then((res)=>{
    console.log(res.data);
    const games = res.data;
    games.map(game => {
      let g = new Game({
        id : game.id,
        name: game.name,
        date: game.first_release_date,
        coverid: game.cover.id,
        coverurl: game.cover.url,
        coverheight: game.cover.height,
        coverwidth: game.cover.width,
        developer: game.involved_companies,
        comments : [],
     });
      g.save();
    });
   });
    await new Promise(r => setTimeout(r, 1000));
   offset+=500;
  }
  res.sendStatus(200);

})

connect().then();
export default twitchapirouter;