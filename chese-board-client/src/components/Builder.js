import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, Button, TextField, FormControlLabel, Checkbox } from '@mui/material';
import Header from './Header';
import { useState } from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { HOST } from '../config';
import { toast } from 'react-toastify';
import { getToken, deckData, cheseboardGrids, strategems } from '../utils';
import { useNavigate } from 'react-router-dom';

function Builder() {
  const [name, setName] = useState("Cheseboard")
  const [selectedStrategems, setSelectedStrategems] = useState([])
  const [decks, setDecks] = useState({})
  const [isPrivate, setIsPrivate] = useState(true)

  const navigate = useNavigate();

  const selectStrategem = (strategemId) => {
    let newSelectedStrategems = [...selectedStrategems];
    if (selectedStrategems.includes(strategemId)) {
      newSelectedStrategems = selectedStrategems.filter(item => item !== strategemId)
    } else {
      if (selectedStrategems.length < 4) {
        newSelectedStrategems = [...selectedStrategems, strategemId]
      }
    }
    setSelectedStrategems(newSelectedStrategems);
  }

  const onDragStart = (ev) => {
    ev.dataTransfer.setData("url", ev.target.src);
    ev.dataTransfer.setData("id", ev.target.id);
  }

  const onDrop = (id, row, col) => {
    const combineStr = `${row}-${col}`
    decks[combineStr] = id;
    setDecks({...decks})
  }

  const save = () => {
    const token = getToken();
    fetch(`${HOST}/chese`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `JWT ${token}`
      },
      body: JSON.stringify({
        name,
        decks: Object.keys(decks).map(key => `${key}-${decks[key]}`),
        stratagems: selectedStrategems,
        isPrivate: isPrivate
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          toast.error(res.error)
        } else {
          toast.success("Save successful!")
          navigate('/my-builds')
        }
      })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Box display="flex" flexDirection="column" p={4}>
        <Box display="flex" gap={2}>
          <Card sx={{display: 'flex', flexDirection: 'column', gap: 1, padding: 1, marginBottom: 2, width: 250, maxHeight: 'calc(100vh - 200px)', overflowY: 'auto'}}>
            {
              deckData.map((item, index) => (
                <Box key={index}>
                  <Typography sx={{marginBottom: 1}}>{item.title}</Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {
                      item.decks.map((url, index1) => <img id={`${index+1}-${index1+1}`} key={index1} src={url} style={{width: 50}} draggable="true" onDragStart={onDragStart} />)
                    }
                  </Box>
                </Box>
              ))
            }
          </Card>
          <Card sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, padding: 1, marginBottom: 2, flex: 1}}>
            <TextField sx={{width: 300, margin: "10px auto"}} id="outlined-basic" label="Cheseboard Name" variant="outlined" value={name} onChange={e => setName(e.target.value)} />
            <Box display="flex" flexDirection="column" justifyContent="center">
              {
                cheseboardGrids.map((row, index) => (
                  <Box display="flex" justifyContent="center" key={index} sx={{marginLeft: index % 2 === 0 ? -2 : 2}}>
                    {
                      row.map((col, index1) => (
                        <ImageDrop key={index1} onDrop={(id) => onDrop(id, index, index1)} />
                      ))
                    }
                  </Box>
                ))
              }
            </Box>

            <FormControlLabel control={<Checkbox checked={isPrivate} onChange={e => setIsPrivate(e.target.checked)} />} label="Private" />
          </Card>
          <Card sx={{display: 'flex', flexDirection: 'column', gap: 1, padding: 1, marginBottom: 2, width: 250}}>
            <Typography sx={{marginBottom: 1}}>Strategem 1~10</Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {
                strategems.map(strategem => (
                  <img
                    key={strategem.id}
                    src={strategem.url}
                    style={{
                      width: 116,
                      border: `2px solid ${selectedStrategems.includes(strategem.id) ? '#1976d2' : 'transparent'}`
                    }}
                    onClick={() => selectStrategem(strategem.id)}
                  />
                ))
              }
            </Box>
          </Card>
        </Box>

        <Box display="flex" gap={2} justifyContent="flex-end">
          <Button variant="contained" onClick={() => save()}>Save</Button>
          <Button variant="contained">
            <StarOutlineIcon />
          </Button>
        </Box>
      </Box>

    </Box>
  )
}

const ImageDrop = ({ onDrop }) => {
  const [image, setImage] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const url = e.dataTransfer.getData("url")
    const id = e.dataTransfer.getData("id")
    setImage(url);
    onDrop(id);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: dragging ? "3px dashed #aaa" : "3px solid #ccc",
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {image ? (
        <img
          src={image}
          alt="Dropped"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default Builder
