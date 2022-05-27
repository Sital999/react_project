import * as React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

export default function SimplePaper({value}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 250,
        },
        padding:30,
       
      }}
    >
     
      <Paper elevation={12}>
          asdsas,{value}
      </Paper>
    </Box>
  );
}
