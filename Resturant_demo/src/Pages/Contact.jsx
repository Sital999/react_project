import React,{useState,useEffect} from 'react'
import {Container,Paper,Typography,TextField,Button} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'

const useStyles =makeStyles(()=>({
  container:{
    margin:"2rem",
    paddingLeft:"25rem",
    paddingTop:"1rem",
    paddingBottom:"1rem",
   width: "100vw",
   height: "80vh",
    background:'linear-gradient(to top right, #eb0257, #630636)'
    
    
  }
  ,paper:{
    width:"50%",
    height:"70%",
    marginBottom:"30%",

  },
  div:{
    margin:50,
    padding:10
  }
}))

 const Contact = () => {
   const classes=useStyles()
  return (
   <React.Fragment>
     <div>

     <Container maxWidth="lg"  className={classes.container}>
       <Paper elevation={12} className={classes.paper}>
         <div className={classes.div}>
           
      
            <Typography variant="h3" align="center" >
              Contact Us
            </Typography>
        <form>
            <Typography variant="h5" gutterBottom>
              <TextField label="First Name" name="firstName" fullWidth></TextField>
            </Typography>
            <Typography variant="h5" gutterBottom >
              <TextField label="Last Name" name="lastName" fullWidth></TextField>
            </Typography>
            <Typography variant="h5" gutterBottom >
              <TextField label="Email" name="email" fullWidth></TextField>
            </Typography>
            <Typography variant="h5" gutterBottom >
              <TextField label="Phone" name="phone" fullWidth></TextField>
            </Typography>
            <Button variant="contained" color="success" fullWidth>Submit</Button>
        </form>
        </div>
       </Paper>
     </Container>
     </div>

     </React.Fragment>
  )
}
export default Contact
