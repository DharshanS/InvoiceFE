import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Appbar() {
  const textStyle={margin:'auto'}
  return (
  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" style={textStyle}>
          <Typography variant="h6" color="inherit" align="center">
           NTTD Invoicing System
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
