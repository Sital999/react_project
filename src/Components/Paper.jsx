import * as React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import {Typography,Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(()=>({
    text:{
        color:'red'
    },
    paper:{
        padding:15
    },
    button:{
        margin:20
    }
}))

export default function SimplePaper({item}) {
    const classes= useStyles()
    
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width:'auto',
          height: 'auto',
        },
        padding:30,
       
      }}
    >
     
      <Paper className={classes.paper} elevation={12}>
          <img src={item.strCategoryThumb}></img> 
          <Typography variant="h5" align="center" className={classes.text}>
          {item.strCategory}
          </Typography>
            <Typography align="center" >
            <Link to={`/food/${item.idCategory}`}><Button className={classes.button} variant="contained" color="primary" >Click to view</Button></Link>
         
            <Link to={`/cart/${item.strCategory}`}><Button  variant="contained" color="primary" className={classes.button}>Add to Cart</Button></Link>
            </Typography>
         
           
      </Paper>
    </Box>
  );
}
