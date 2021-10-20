import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function MyButtonGroup(props) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button key="one" onClick={() => props.toggle("in")}>In Stock</Button>,
          <Button key="two" onClick={() => props.toggle("out")}>Out Stock</Button>,
          <Button key="three" onClick={() => props.toggle("all")}>All</Button>
        </ButtonGroup>
      </Box>
    );
  }