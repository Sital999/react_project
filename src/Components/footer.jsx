import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    footer:{
        // position: 'relative',
        marginTop:'40%',
        display: 'flex',
        justifyContent: 'center'
    }
}))

export default function Footer() {
//   const [value, setValue] = React.useState(0);
    const classes=useStyles()
  return (
    <div>
    <footer className={classes.footer}>
       @copyright fancyResturant. Thank you for visiting
   </footer>
    </div>
  );
}
