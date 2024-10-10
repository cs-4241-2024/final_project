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
import { IconButton, Card, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Header from './Header';
import { useEffect, useState } from 'react';
import { HOST } from '../config';
import { deckData, getToken, strategems } from '../utils';
import StarIcon from '@mui/icons-material/Star';
import { toast } from 'react-toastify';
import CheckModal from './CheckModal';

function Home() {
  const [cheses, setCheses] = useState([])
  const [likes, setLikes] = useState([])
  const [open, setOpen] = useState()

  useEffect(() => {
    getCheses()
  }, [])

  const getCheses = () => {
    fetch(`${HOST}/chese`)
      .then(res => res.json())
      .then(res => {
        setCheses(res)
        getMyLikes();
      })
  }

  const getMyLikes = () => {
    const token = getToken();
    if (token) {
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
  }

  const changeLike = (chese) => {
    const token = getToken();
    if (token) {
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
          getCheses()
        })
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Box p={4}>
        <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
          Team Tier List
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
                {
                  getToken() && <TableCell>Actions</TableCell>
                }
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
                  {
                    getToken() && (
                      <TableCell>
                        <IconButton color="primary" onClick={(e) => {
                          e.stopPropagation()
                          changeLike(chese)
                        }}>
                          {
                            likes.some(like => like.chese._id === chese._id) ? <StarIcon /> : <StarOutlineIcon />
                          }
                        </IconButton>
                      </TableCell>
                    )
                  }
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

export default Home
