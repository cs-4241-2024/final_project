import AppBar from "@mui/material/AppBar";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Login from "../login/Login.jsx"
import { useState,  useContext} from "react";
import "../../index.css";
import {Link} from "react-router-dom";
import {useLoginSession} from "../../LoginContext.jsx";
import LogoutButton from "../login/LogoutButton.jsx";

export default function Header(props) {
	const loginSession = useLoginSession();
  
	return (
		<AppBar class="AppBar"position="static" color="0xffffff">
			<Toolbar>

				<Link to={"/"} className="header-link p-4 " >
				  <Typography color='0x0000ff' variant="h5" component="div" sx={{ flexGrow: 1 }} > FrameRate! </Typography>
				</Link>
				{loginSession.user === '' ? <Login></Login> : <LogoutButton></LogoutButton>}
			</Toolbar>
		</AppBar>
	);
}



