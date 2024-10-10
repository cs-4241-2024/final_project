import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import Header from './Header';
import { useEffect, useState } from 'react';
import { HOST } from '../config';
import { deckData, getToken, strategems } from '../utils';
import { toast } from 'react-toastify';
import CheckModal from './CheckModal';

function Liked() {
  const [likes, setLikes] = useState([])
  const [open, setOpen] = useState()

  useEffect(() => {
    getMyLikes()
  }, [])

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
        getMyLikes()
      })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Box p={4}>
        <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
          Liked List
        </Typography>
        <Card sx={{display: 'flex', gap: 1, padding: 1, marginBottom: 2}}>
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
        </Card>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Comp Name</TableCell>
                <TableCell>Decks</TableCell>
                <TableCell>Stratagems</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {likes.map((like) => (
                <TableRow
                  key={like._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  onClick={() => {
                    setOpen(like.chese)
                  }}
                >
                  <TableCell>
                    {like.chese.name}
                  </TableCell>
                  <TableCell>
                    {
                      like.chese.decks.map(deck => {
                        const deskArr = deck.split('-');
                        return <img key={deck} src={deckData[+deskArr[2] - 1].decks[+deskArr[3] - 1]} style={{width: 50}} />
                      })
                    }
                  </TableCell>
                  <TableCell>
                    {
                      like.chese.stratagems.map(stratagem => {
                        return <img key={stratagem} src={strategems[+stratagem].url} style={{width: 50}} />
                      })
                    }
                  </TableCell>
                  <TableCell>
                    <Button onClick={(e) => {
                      e.stopPropagation()
                      changeLike(like.chese)
                    }}>Remove</Button>
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

export default Liked
