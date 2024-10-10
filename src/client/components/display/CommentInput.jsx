import React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import {useLoginSession} from "../../LoginContext.jsx";
import TextField from "@mui/material/TextField";
import StarIcon from "@mui/icons-material/Star";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconEmpty': {
    color: '#ffffff',
    opacity: 0.55
  },
});
const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: "10px",
    backgroundColor: '#F3F6F9',

  },
});
const ColorButton = styled(Button)(({ theme }) => ({
  color: '#000000',
  borderRadius: "10px",
  backgroundColor: '#F3F6F9',
  '&:hover': {
    backgroundColor: '#FFFFFF',
  },
}));
function CommentInput(props){
  const [comment, setComment] = useState('')
  const loginSession = useLoginSession();
  const [rating, setRating] = useState(2);
  // Need user,
  const submit = async function(event){
    event.preventDefault()
    const body = JSON.stringify({'comment':comment, 'username': loginSession.user, 'gameid': props.gameid,'rating': rating, 'date': Date.now()});
    const response = await fetch('/comment/addcommment/'+ props.gameid, {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: body
    }) 
    props.onUpdate({'comment':comment, 'username': loginSession.user, 'gameid': props.gameid,'rating': 4, 'date': Date.now()});
  }

   return(
      <div className="Comment border-2 rounded-2xl p-2">
        <div className="Comment-Input">
          <h3 id="comment-text" className="font-sans text-xl font-bold p-2">Leave a rating:</h3>
          <form className="flex flex-col form-box gap-2">
            <Box sx={{ '& > legend': { mt: 2 } }}>
              <Typography component="legend"></Typography>
              <StyledRating size="large" name="simple-controlled" value={rating} onChange={(event, newValue) => {setRating(newValue);}} emptyIcon={<StarIcon style={{ opacity: 1.0, htmlColor: 0xffffff }} fontSize="inherit" />} />
            </Box>
             <CssTextField id="filled-basic" fullWidth  multiline onChange = {(e)=>{setComment(e.target.value)}}/>
            <ColorButton className="button" id="button" type="submit" sx={{ marginLeft: "auto"}} color="primary" variant="contained" onClick={submit}>Enter</ColorButton>
          </form>
        </div>
      </div>
  )
}

export default CommentInput;