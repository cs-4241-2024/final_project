import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import { redirect } from "react-router-dom";
import "../../index.css";
import {useLibraryContext} from "../../LibraryContext.jsx";


function MainPage() {
  const libraryContext = useLibraryContext();

  
  //games={gameTile}
  //setGames={setGameData}

  // const itemData = [];
  //sx={{  width: 1920, height: 1080 }} cols={11} rowHeight={300}
  //id="imagelistitem" cols={10} rowHeight={300}

  return (
      <div  >
      <ImageList id="imagelistdiv" cols={6} rowHeight={150} gap={10}>
          {libraryContext.games.map((game) => (
              <div id="imagelist">
                <ImageListItem key={game.coverurl} className={"grid-rows-1"}>
                    <Link to={`/${game.id}`} className={"flex flex-row image-link"}>
                      <img class='image' width='100px' height='200px' srcSet={`${game.coverurl}?w=${game.coverwidth}&h=${game.coverheight}&fit=crop&auto=format&dpr=2 2x`} src={`${game.coverurl}?w=${game.coverwidth}&h=${game.coverheight}&fit=crop&auto=format`} alt={game.name} loading="lazy"/>
                      <div className={"text-xl text-wrap p-2"}>{game.name}</div>
                    </Link>

                </ImageListItem>

              </div>
          ))}
        </ImageList>
      </div>
  );
}

export default MainPage;







