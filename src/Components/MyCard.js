import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UnstyledButtonsSimple from './CustomButton.js';
import UnstyledButtonsSimple2 from './Button2.js';



import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function MediaCard2(props) {

    return (

          <Grid item xs={3} md={3}>
            <Item>

            <Card sx={{ maxWidth: 350, }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/card350.png"
                    alt="card"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {props.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {props.prezzo}
                    </Typography>
                </CardContent>
                <CardActions>
                {props.stock > 0 ? <UnstyledButtonsSimple/> : <UnstyledButtonsSimple2/> }
                </CardActions>
            </Card>


            </Item>
          </Grid>


  

  );
}