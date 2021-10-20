import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Data from '../data.json';

export default function BasicTextFields(props) {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e)=>{ props.Cerca(e.target.value) }} />
    </Box>
  );
}