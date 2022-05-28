import React from "react";
import { Container, Card, Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../Features/cartSlice";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    paddingLeft: "20%",
    paddingRight: "20%",
    margin: "10%",
  },
  button: {},
}));

const Cart = () => {
  const classes = useStyles();
  //   name for params should be same as passed from Route.
  const { name } = useParams();
  const dispatch = useDispatch();
  const numOfItems =useSelector((state) => state.cart.numOfItems) ;

  
  return (
    <Container className={classes.container}>
      <Card>
      <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
               <Typography variant="h4">{name}</Typography> 
          </Grid>
          <Grid item xs={5}>
            {numOfItems > 0 ? (
              <React.Fragment>
                <Typography variant="h5">
                  Number of items: {numOfItems}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    <Button
                      variant="contained"
                      onClick={() => {
                        
                          dispatch(increase());
                       
                      }}
                    >
                      <AddIcon />
                    </Button>
                  </Grid>
                  <Grid item xs={5}>
                    <Button
                      variant="contained"s
                      onClick={() => {
                        dispatch(decrease());
                      }}
                    >
                      <RemoveIcon className={classes.button} />
                    </Button>
                  </Grid>
                </Grid>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography variant="h5">Number of items: 0</Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(increase());
                  }}
                >
                  <AddIcon />
                </Button>
              </React.Fragment>
            )}
          </Grid>
        </Grid>
             
      </Card>
    </Container>
  );
};
export default Cart;
