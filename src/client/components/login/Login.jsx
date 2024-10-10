import {useState} from "react";
import InputTextBox from "../default_components/InputTextBox.jsx";
import LogoutButton from "./LogoutButton.jsx";
import InputPassTextBox from "../default_components/InputPassTextBox.jsx";
import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useLoginSession} from "../../LoginContext.jsx";



function Login() {
    const loginSession = useLoginSession();

    //props.setUser() to set context
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };


    function register(e){
      e.preventDefault();
        const json = { username: username, password : pass},
              body = JSON.stringify(json)
        fetch( '/user/register', {
            headers: {"Content-Type": "application/json" },
            method:'POST',
            body: body
        }).then((res) => {
            if (res.status === 400) {
                alert("Username already in use")
            } else if (res.status === 200){
                alert("Registered. Now logged in")
                loginSession.setUser(username);
                handleClose();

            }
        })
    }
  
    function login(e){
      e.preventDefault();

        const json = { username: username, password : pass},
            body = JSON.stringify(json)
        fetch( '/user/login', {
            headers: {"Content-Type": "application/json" },
            method:'POST',
            body: body
        }).then((res) => {
            if (res.status === 200) {
                alert("Log in successful")
                loginSession.setUser(username)
                handleClose();
            } else if (res.status === 400){
                alert("Credentials do not match any in our records. Please try again")
            
            }
        })
    }

    const theme = createTheme({
    components: {
      MuiDialogContent: {
        styleOverrides: {
          background: {
            paper: '#ffffff',
          },
        },
      },
    },
  });
  
  //<Button variant="outlined" style={{ display: 'flex', justifyContent: 'flex-end' }} onClick={handleClickOpen}>Login</Button>


    return (
      <React.Fragment>
        <Button sx={{ marginLeft: "auto" }} variant="outlined" onClick={handleClickOpen}>Login</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const username = formJson.username;
            const password = formJson.password;
            handleClose();
          },
        }}
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent theme={theme}>
          <DialogContentText>
            To log in, please enter your username and password. To register for an account, enter your desired username and password. 
          </DialogContentText>
          <InputTextBox id={"username"} defaulttext={"username"} onChange={(e)=> setUsername(e.target.value)}></InputTextBox>
          <InputPassTextBox id={"password"} defaulttext={"password"} onChange={(e)=> setPass(e.target.value)}></InputPassTextBox>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={register}>Register!</Button>
          <Button onClick={login}>Login!</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
      
    );
}
export default Login;