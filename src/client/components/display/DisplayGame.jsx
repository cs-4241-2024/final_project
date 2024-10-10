import {userContext, useEffect, useState} from "react";
import Comment from "./Comment.jsx";
import CommentInput from "./CommentInput.jsx";
import { useRevalidator } from 'react-router-dom';
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import "../../index.css";
import StarIcon from "@mui/icons-material/Star";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconEmpty': {
        color: '#ffffff',
        opacity: 0.55
    },
});


function DisplayGame() {
    const { game } = useLoaderData();
    const revalidator = useRevalidator();

    const [gameState, setGameState] = useState(game[0]);
    function calcRating  (){
        let rating = 0;
        for (let i = 0; i < gameState.comments.length ; i++){
            rating += gameState.comments[i].rating;
        }
        rating = rating/gameState.comments.length;
        return rating;

    }
    function getDate () {
            const date = new Date(gameState.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const formattedDate = `${month}/${day}/${year}`;
            return formattedDate;
    }
  
    const  update = ()=> {
      const getGame = async() => {
          const res = await fetch('/game/get/' + gameState.id, {
              method:'GET'
          })
          const game = await res.json();
          console.log(game)
          setGameState(game[0])
      }
      getGame().then(); // we did this weird wraper thing to make calling update easyer
    };

     return (
        <div className="flex flex-container">
            <div className="flex flex-col gap-5 basis-3/5 p-5">
                <div className="flex flex-grid gap-5 p-5 grid-cols-3 grid-rows-3">
                    <div className="flex col-span-2 flex-col grow">
                        <h1 id="white-text" className="text-4xl/loose font-bold flex ">{gameState.name}</h1>
                        <StyledRating name="game-rating" size="large" className="p-2" precision={0.5} value={calcRating()} readOnly />
                        <h2 id="white-text" className="text-2xl p-2 ">{getDate()}</h2>
                        <h2 id="white-text" className="text-2xl p-2 ">{"Reviews: " + gameState.comments.length}</h2>
                    </div>
                    <div>
                        <img className='imageZoomed' width='400px' height='500px'
                             srcSet={`${gameState.coverurl}?w=${gameState.coverwidth}&h=${gameState.coverheight}&fit=crop&auto=format&dpr=2 2x`}
                             src={`${gameState.coverurl}?w=${gameState.coverwidth}&h=${gameState.coverheight}&fit=crop&auto=format`}
                             alt={gameState.name} loading="lazy"/>
                    </div>

                </div>
                <div id="enterRating " className={""}>
                    <CommentInput gameid={gameState.id} onUpdate={update}></CommentInput>
                </div>
            </div>
            <div id="commentBox" className={"flex flex-col gap-5 basis-3/5 p-2 justify-items-center content-center"}>
                {gameState.comments.map((comm) => <Comment comment={comm} onUpdate={update}/>)}
            </div>
        </div>
    );
}

export default DisplayGame;