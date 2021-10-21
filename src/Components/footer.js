import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid2() {
  return (
    <Box sx={{ 
      flexGrow: 1,
      backgroundColor: 'text.disabled',

    }}>
      <Grid container spacing={0}>

        <Grid item xs={8}>
        </Grid>

        <Grid item xs={4}>

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
            <ButtonGroup variant="text" aria-label="text button group">
                <Button>TWITTER</Button>
                <Button>FACEBOOK</Button>
            </ButtonGroup>
            </Box>

        </Grid>

      </Grid>
    </Box>
  );
}
