import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Card, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { cheseboardGrids, deckData, strategems } from '../utils';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function CheckModal(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={!!open}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            maxWidth: "1200px",  // Set your width here
          },
        },
      }}
    >
      {
        open && (
          <Box display="flex" gap={2}>
            <Card sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, padding: 1, marginBottom: 2, flex: 1}}>
              <Typography sx={{width: 300, margin: "10px auto"}}>{open.name}</Typography>
              <Box display="flex" flexDirection="column" justifyContent="center">
                {
                  cheseboardGrids.map((row, index) => (
                    <Box display="flex" justifyContent="center" key={index} sx={{marginLeft: index % 2 === 0 ? -2 : 2}}>
                      {
                        row.map((col, index1) => (
                          <div
                            key={index1}
                            style={{
                              border: "3px solid #ccc",
                              width: "100px",
                              height: "100px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              position: "relative"
                            }}
                          >
                            {
                              open.decks.map(deck => {
                                const deckArr = deck.split('-')
                                return +deckArr[0] === index && +deckArr[1] === index1 && (
                                  <img
                                    src={deckData[+deckArr[2] - 1].decks[+deckArr[3] - 1]}
                                    alt="Dropped"
                                    style={{
                                      maxWidth: "100%",
                                      maxHeight: "100%",
                                      objectFit: "contain",
                                    }}
                                  />
                                )
                              })
                            }
                          </div>
                        ))
                      }
                    </Box>
                  ))
                }
              </Box>
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
                        border: `2px solid ${open.stratagems.includes('' + strategem.id) ? '#1976d2' : 'transparent'}`
                      }}
                    />
                  ))
                }
              </Box>
            </Card>
          </Box>
        )
      }
    </Dialog>
  )
}

export default CheckModal
