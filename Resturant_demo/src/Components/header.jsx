import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    paddingLeft: 100,
  },
  app: {
    padding: 10,
    background: "linear-gradient(to top right, #f00244, #6c0e2e)",
  },
  a: {
    color: "white",
    "text-decoration": "none",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.app} position="static">
        <Toolbar variant="regular">
          <Grid container spacing={2}>
            <Grid item xs={2}>
            <Typography align="left" variant="h5" color="inherit">
            <a href="/" className={classes.a}>
              Fancy Restaurant
            </a>
          </Typography>
            </Grid>
            <Grid item xs={2}>
            <Typography align="center" variant="h5" color="inherit">
            <a href="/contact" className={classes.a}>
           Contact
            </a>
          </Typography>
            </Grid>
            <Grid item xs={4}/>
            <Grid item xs={4}>
            <Typography align="right" variant="h5">
            <a href="/cart" className={classes.a}>
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            </a>
          </Typography>
            </Grid>
      

         

         
          </Grid>
        
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
