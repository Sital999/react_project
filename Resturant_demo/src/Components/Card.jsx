import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

// to dispatch an action present in store's reducer and to obtain state from store
import { useDispatch, useSelector } from "react-redux";
import { addComment,deleteComment } from "../Features/commentSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 100,
    background:'linear-gradient(to top right, #eb0257, #630636)'

  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    margin: 50,
  },
  typography: {
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default function SimpleCard({ item }) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [price, setPrice] = useState(Math.floor(Math.random() * 100) + 10);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comment);

  const handleClick = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addComment(text));
      setText("");
    }
  };

  useEffect(() => {
    setPrice(Math.floor(Math.random() * 100) + 10);
  }, []);
  return (
    <Container className={classes.root} maxWidth="lg" >
      <Card className={classes.card}>
        <CardContent align="center">
          <img src={item.strCategoryThumb} alt={item.strCategory}></img>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            {item.strCategory}
          </Typography>
          <Typography variant="h6" align="left" gutterBottom>
            {item.strCategoryDescription}
          </Typography>
          <Typography variant="h6" align="left" gutterBottom>
            Price: ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/cart/${item.strCategory}`}>
            <Button size="small">Add to Cart</Button>
          </Link>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" align="center">
            Reviews
          </Typography>
          <Grid container spacing={2}>
            {comments.map((comment, index) => {
              return (
                <React.Fragment key={index}>
                  <Grid item xs={10}>
                    <Paper className={classes.paper}>
                      {index + 1}. {comment}
                    </Paper>
                  </Grid>
                  <Grid item xs={2}>
                  <Button size="small" onClick={()=>{dispatch(deleteComment(index))}}> <DeleteIcon /></Button>
                   
                  </Grid>
                </React.Fragment>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" align="center">
            Add Review
          </Typography>
          <TextField
            label="Enter review"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Typography
            variant="h5"
            align="center"
            className={classes.typography}
          >
            <Button variant="contained" color="primary" onClick={handleClick}>
              Add
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
