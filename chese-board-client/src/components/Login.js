import { Box, Card, TextField, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HOST } from '../config';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    fetch(`${HOST}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          toast.error(res.error)
        } else {
          toast.success("Login successful!")
          localStorage.setItem("user", JSON.stringify(res))
          navigate('/home')
        }
      })
  }

  return (
  <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'flex',
        backgroundImage: `url(${background})`, // Set background image
        backgroundSize: 'cover',  // Ensure the image covers the entire area
        backgroundPosition: 'center',  // Center the background image
        backgroundRepeat: 'no-repeat',  // Avoid repeating the image
      }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card sx={{ width: 400, padding: 2 }}>
        <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 24, fontWeight: 500, textAlign: 'center' }}>
          Login
        </Typography>
        <TextField id="email" label="Email" variant="outlined" fullWidth sx={{margin: "10px 0"}} value={email} onChange={e => setEmail(e.target.value)} />
        <TextField id="password" type="password" label="Password" variant="outlined" fullWidth sx={{margin: "10px 0 20px"}} value={password} onChange={e => setPassword(e.target.value)} />
        <Button variant="contained" fullWidth onClick={() => login()}>Login</Button>
        <Typography marginTop={2}>
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </Typography>
      </Card>
    </Box>
  </Box>
  )
}

export default Login
