import React, {useState,useEffect } from 'react';
import {Slide} from 'react-reveal'; 
import '../App.css'
import {Typography} from '@mui/material'


const  Slider = () => {
    const [boolean,setBoolean]=useState(true)
    useEffect(() =>{
        setTimeout(() =>{
            setBoolean(!boolean)
        },6000)
    },[boolean])

  
    return (
        <Slide right opposite when={boolean}  duration={7000}   forever>
        <div className="quiz">
          <Typography variant="h1"  sx={{mt:5,color:'skyblue'}}>
          Welcome to Quiz Site
          </Typography>
        
        </div>
        
        </Slide>
      
  )
}
export default Slider


