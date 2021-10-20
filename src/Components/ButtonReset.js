import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonReset() {
  return (
    <Stack spacing={0} direction="col">
      <Button variant="contained">Reset</Button>
    </Stack>
  );
}