import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,IconButton} from '@mui/material';
import {Link} from 'react-router-dom'

import QuizIcon from '@mui/icons-material/Quiz';

export default function Header({title}) {
  return (
    
    <Box sx={{ flexGrow: 1, width:'100%' }}>
      <AppBar position="static">
        <Toolbar component="div" sx={{height:"13vh",
        background: "linear-gradient(-45deg, rgba(2,0,36,1) 0%, rgba(18,102,128,0.6982143199076505) 31%, rgba(0,212,255,1) 100%)"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,ml:"35%" }}
          >
          <Link to="/">
           
            <QuizIcon  />
            </Link>
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 ,
        color:"cyan"}}>
            {title}
          </Typography>
       
        </Toolbar>
      </AppBar>
    </Box>
  );
}
