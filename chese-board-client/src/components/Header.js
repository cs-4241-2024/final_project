import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../utils';

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" gap={2} sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ marginRight: 10 }}>
            TFT
          </Typography>
          <Button variant="text" color="text" onClick={() => navigate('/home')}>Team</Button>
          {
            getToken() && (
              <>
                <Button variant="text" color="text" onClick={() => navigate('/my-builds')}>My Builds</Button>
                <Button variant="text" color="text" onClick={() => navigate('/liked')}>Liked</Button>
              </>
            )
          }
        </Box>
        {
          getToken() ? (
            <Button color="inherit" onClick={() => {
              localStorage.removeItem("user")
              navigate('/login')
            }}>Logout</Button>
          ) : (
            <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
          )
        }
      </Toolbar>
    </AppBar>
  )
}

export default Header
