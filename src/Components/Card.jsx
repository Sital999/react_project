import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Container} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width:'70%',
    padding:100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({item}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container className={classes.root}>

    <Card >
      <CardContent align="center">
          <img src={item.strCategoryThumb} alt={item.strCategory}></img>
        <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
          {item.strCategory}
        </Typography>
        <Typography variant="h6" align="left"  gutterBottom>
          {item.strCategoryDescription}
        </Typography>
        <Typography variant="h6" align="left"  gutterBottom>
          Price: ${Math.floor(Math.random()*100)+10}
        </Typography>
        
      </CardContent>
      <CardActions >
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
    </Container>

  );
}
