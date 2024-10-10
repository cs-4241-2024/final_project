import { Box, Card, TextField, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HOST } from '../config';
import { toast } from 'react-toastify';

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = () => {
    if (email && password) {
      fetch(`${HOST}/sign-up`, {
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
            toast.success("Sign up successful!")
            navigate('/login')
          }
        })
    }
  }

  return (
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
          SignUp
        </Typography>
        <TextField id="email" label="Email" variant="outlined" fullWidth sx={{margin: "10px 0"}} value={email} onChange={e => setEmail(e.target.value)} />
        <TextField id="password" type="password" label="Password" variant="outlined" fullWidth sx={{margin: "10px 0 20px"}} value={password} onChange={e => setPassword(e.target.value)} />
        <Button variant="contained" fullWidth onClick={() => signup()}>SignUp</Button>
        <Typography marginTop={2}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Card>
    </Box>
  )
}

export default SignUp
