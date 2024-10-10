import {useState} from "react";
import "../../index.css";
import React from 'react';
import TextField from '@mui/material/TextField';
// <input id={props.id} placeholder={props.defaulttext} onChange={props.onChange}/>


function InputTextBox(props) {
  //text-align:center
    return (
      <div id="divinputbox">
        <TextField required id={props.id} placeholder={props.defaulttext} onChange={props.onChange} label="Username" variant="outlined" />
      </div>
    );
}

export default InputTextBox;
