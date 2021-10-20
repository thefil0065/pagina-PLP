import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UnstyledButtonsSimple from './CustomButton.js';

// grid
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function MediaCard() {
  return (

    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={3}>
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
                Iphone 15
                </Typography>
                <Typography variant="body2" color="text.secondary">
                1000$
                </Typography>
            </CardContent>
            <CardActions>
                <UnstyledButtonsSimple />
            </CardActions>
        </Card>
        </Item>
      </Grid>

      <Grid item xs={3}>
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
                Iphone 15
                </Typography>
                <Typography variant="body2" color="text.secondary">
                1000$
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">In Stock</Button>
            </CardActions>
        </Card>
        </Item>
      </Grid>

      <Grid item xs={3}>
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
                Iphone 15
                </Typography>
                <Typography variant="body2" color="text.secondary">
                1000$
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">In Stock</Button>
            </CardActions>
        </Card>
        </Item>
      </Grid>

      <Grid item xs={3}>
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
                Iphone 15
                </Typography>
                <Typography variant="body2" color="text.secondary">
                1000$
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">In Stock</Button>
            </CardActions>
        </Card>
        </Item>
      </Grid>

      <Grid item xs={3}>
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
                Iphone 15
                </Typography>
                <Typography variant="body2" color="text.secondary">
                1000$
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">In Stock</Button>
            </CardActions>
        </Card>
        </Item>
      </Grid>

      <Grid item xs={3}>
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
                Iphone 15
                </Typography>
                <Typography variant="body2" color="text.secondary">
                1000$
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">In Stock</Button>
            </CardActions>
        </Card>
        </Item>
      </Grid>

      <Grid item xs={3}>
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
                Iphone 15
                </Typography>
                <Typography variant="body2" color="text.secondary">
                1000$
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">In Stock</Button>
            </CardActions>
        </Card>
        </Item>
      </Grid>

      <Grid item xs={3}>
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
                Iphone 15
                </Typography>
                <Typography variant="body2" color="text.secondary">
                1000$
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">In Stock</Button>
            </CardActions>
        </Card>
        </Item>
      </Grid>


    </Grid>
    </Box>


  );
}
