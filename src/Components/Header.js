// logo
import '../css/App.css';
import logo from '../images/logo150x80.png';

// grid
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// button
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import MyButtonGroup from './Button.js'
import ButtonReset from './ButtonReset';

//search
import BasicTextFields from './Search.js';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid(props) {
  return (
    <Box sx={{
       flexGrow: 1,
       borderBottom: 1,
       }}>
      <Grid container spacing={0} >
        <Grid item xs={2} >
            <img src={logo} alt="" class="logo" />
        </Grid>
        <Grid item xs={4}>
            <MyButtonGroup toggle={(value) => props.toggle(value)} />
        </Grid>
        <Grid item xs={4}>
            <BasicTextFields Cerca={(text) => {props.Cerca(text)}}/>
        </Grid>
        <Grid item xs={2}>
          <ButtonReset />
        </Grid>

      </Grid>
    </Box>
  );
}
