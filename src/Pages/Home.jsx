import React from "react";
import SimplePaper from "../Components/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { fetchFood } from "../Features/foodSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    "justify-content": "center",
    "flex-wrap": "wrap",
  },
}));



export const Home = () => {
  const food = useSelector((state) => state.food);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFood());
  }, []);
  const classes = useStyles();
  console.log(food)
  return (
    <div className={classes.root}>
        {food.loading && <div>...loading</div>}
        {!food.loading && food.error?<div>{food.error}</div>:null}
        {!food.loading && food.food.length?
      food.map((item) => {
        return (
          <React.Fragment>
            <Container>
              <SimplePaper item={item} />
            </Container>
          </React.Fragment>
        );
      }):null}
    </div>
  );
};
