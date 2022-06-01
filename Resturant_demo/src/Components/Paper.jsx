import * as React from "react";
import { Typography, Button, Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useState } from "react";


const useStyles = makeStyles(() => ({
  text: {
    color: "red",
  },
  paper: {
    padding: 15,
  },

  button: {
    margin: 20,
  },
  hover: {
    transform: "scale(1.2)",
  },
}));

export default function SimplePaper({ item }) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "auto",
          height: "auto",
        },
        padding: 30,
      }}
    >
      {hover ? (
        <Paper
          className={classes.hover}
          elevation={12}
          onMouseOut={() => {
            setHover(false);
          }}
        >
          <img src={item.strCategoryThumb} alt={item.strCategory}></img>
          <Typography variant="h5" align="center" className={classes.text}>
            {item.strCategory}
          </Typography>
          <Typography align="center">
            <Link to={`/food/${item.idCategory}`}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Click to view
              </Button>
            </Link>

            <Link to={`/cart/${item.strCategory}`}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Add to Cart
              </Button>
            </Link>
          </Typography>
        </Paper>
      ) : (
        <Paper
          className={classes.paper}
          elevation={12}
          onClick={() => {
            setHover(true);
          }}
        >
          <img src={item.strCategoryThumb} alt={item.strCategory}></img>
          <Typography variant="h5" align="center" className={classes.text}>
            {item.strCategory}
          </Typography>
          <Typography align="center">
            <Link to={`/food/${item.idCategory}`}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Click to view
              </Button>
            </Link>

            <Link to={`/cart/${item.strCategory}`}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                
              >
                Add to Cart
              </Button>
            </Link>
          </Typography>
        </Paper>
      )}
    </Box>
  );
}
