import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  text:{
     
      paddingLeft:"45%",
  },
  app:{
  
    padding:10,
    background:'linear-gradient(to top right, #f00244, #6c0e2e)'
  }
 
}));

const Header=() =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.app} position="static">
        <Toolbar variant="regular">
         
          <Typography className={classes.text} variant="h5" color="inherit"  >
           Fancy Restaurant
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header