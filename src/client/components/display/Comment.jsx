import React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import "../../index.css";
import Login from "../login/Login.jsx"
import {useLoginSession} from "../../LoginContext.jsx";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
const StyledRating = styled(Rating)({
    '& .MuiRating-iconEmpty': {
        color: '#ffffff',
        opacity:0.5,
    },
});
// Add delete functionality
function Comment(props){
    const loginSession = useLoginSession();

    const comment = props.comment;

    const date = new Date(comment.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${month}/${day}/${year}`;
    console.log(formattedDate);

    const handleDelete = async function(event){
        console.log("delete")
        const body = JSON.stringify(props.comment)
        console.log(body)
        const res = await fetch('/comment/delete/', {
                method: 'POST',
                headers: {"Content-Type": "application/json" },
                body: body
            }
        )
        props.onUpdate()
    }
    return(
        <div id="commentDiv" className="flex flex-row border-2 rounded-2xl p-2 self-center" >
            <div className="Comment-Output flex flex-col grow">
                <div className="flex flex-row">
                    <p id="comment-text" className="p-2 font-bold text-l">{comment.username === '' ? "anonymous" : comment.username}</p>
                    <p id="comment-text" className="p-2"> -   {formattedDate}   - </p>
                    <StyledRating name="game-rating" size="small" className="p-2" precision={0.5} value={comment.rating} readOnly />

                </div>
                <p id="comment-text" className="p-2"> {comment.comment}</p>

            </div>
            {(loginSession.user === comment.username) && loginSession.user !==''  ?
                <div className=" place-self-end">
                    <IconButton aria-label="delete" size="large" onClick={handleDelete} color="primary">
                        <DeleteIcon />
                    </IconButton>
                </div>
                : <></>
            }
        </div>
    )
}

export default Comment;