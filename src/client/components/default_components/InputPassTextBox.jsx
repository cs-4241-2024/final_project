import {useState} from "react";
import "../../index.css";
import React from 'react';
import TextField from '@mui/material/TextField';
// input type="password" id={props.id} placeholder={props.defaulttext} onChange={props.onChange}/>

function InputTextBox(props) {
    return (
      <div id="divinputbox">
        <TextField required id={props.id} label="Password" type="password" placeholder={props.defaulttext} onChange={props.onChange}/>
      </div>
    );
}

export default InputTextBox;