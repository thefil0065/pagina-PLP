import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function ButtonReset() {

  return (
    <Box
    sx={{
      alignItems: 'center',
      my: 2,
    }}
    >
    <Stack spacing={0} direction="col">
      <Button variant="contained">Reset</Button>
    </Stack>
    </Box>

  );
}