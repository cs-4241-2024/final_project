import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Card, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import Header from './Header';
import { useEffect, useState } from 'react';
import { HOST } from '../config';
import { deckData, getToken, strategems } from '../utils';
import { toast } from 'react-toastify';
import CheckModal from './CheckModal';

function MyBuilds() {
  const [cheses, setCheses] = useState([])
  const [likes, setLikes] = useState([])
  const [open, setOpen] = useState()

  const navigate = useNavigate();

  useEffect(() => {
    getMyCheses()
  }, [])

  const getMyCheses = () => {
    const token = getToken();
    fetch(`${HOST}/chese/my`, {
      headers: {
        'authorization': `JWT ${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        setCheses(res)
        getMyLikes()
      })
  }

  const getMyLikes = () => {
    const token = getToken();
    fetch(`${HOST}/chese/my-like`, {
      headers: {
        'authorization': `JWT ${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        setLikes(res)
      })
  }

  const changePrivate = (chese) => {
    const token = getToken();
    fetch(`${HOST}/chese/${chese._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `JWT ${token}`
      },
      body: JSON.stringify({
        isPrivate: !chese.isPrivate
      })
    })
      .then(res => res.json())
      .then(res => {
        toast.success("Update successful!")
        getMyCheses()
      })
  }

  const changeLike = (chese) => {
    const token = getToken();
    fetch(`${HOST}/chese/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `JWT ${token}`
      },
      body: JSON.stringify({
        cheseId: chese._id
      })
    })
      .then(res => res.json())
      .then(res => {
        toast.success("Update successful!")
        getMyCheses()
      })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Box p={4}>
        <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
          My Tier List
        </Typography>
        <Card sx={{display: 'flex', justifyContent: "space-between", alignItems: "center", padding: 1, marginBottom: 2}}>
          <Box sx={{display: 'flex', gap: 1}}>
            <FormControl size="small" sx={{width: 120}}>
              <InputLabel id="demo-simple-select-label">Time</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{width: 120}}>
              <InputLabel id="demo-simple-select-label">Liked</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 1}}>
            <Button variant="contained" onClick={() => navigate('/builder')}>Build Comp</Button>
          </Box>
        </Card>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Comp Name</TableCell>
                <TableCell>Decks</TableCell>
                <TableCell>Stratagems</TableCell>
                <TableCell>Private</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cheses.map((chese) => (
                <TableRow
                  key={chese._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  onClick={() => {
                    setOpen(chese)
                  }}
                >
                  <TableCell>
                    {chese.name}
                  </TableCell>
                  <TableCell>
                    {
                      chese.decks.map(deck => {
                        const deskArr = deck.split('-');
                        return <img key={deck} src={deckData[+deskArr[2] - 1].decks[+deskArr[3] - 1]} style={{width: 50}} />
                      })
                    }
                  </TableCell>
                  <TableCell>
                    {
                      chese.stratagems.map(stratagem => {
                        return <img key={stratagem} src={strategems[+stratagem].url} style={{width: 50}} />
                      })
                    }
                  </TableCell>
                  <TableCell>
                    {chese.isPrivate ? 'True' : 'False'}
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={(e) => {
                      e.stopPropagation()
                      changeLike(chese)
                    }}>
                      {
                        likes.some(like => like.chese._id === chese._id) ? <StarIcon /> : <StarOutlineIcon />
                      }
                    </IconButton>
                    <Button onClick={(e) => {
                      e.stopPropagation()
                      changePrivate(chese)
                    }}>Set { chese.isPrivate ? 'Public' : 'Private' }</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CheckModal open={open} onClose={() => setOpen()} />
      </Box>
    </Box>
  )
}

export default MyBuilds
