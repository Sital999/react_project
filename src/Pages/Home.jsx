import React from "react";
import SimplePaper from "../Components/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { fetchFood } from "../Features/foodSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    "justify-content": "center",
    "flex-wrap": "wrap",
  },
//   div:{
//     background:'linear-gradient(to top right, #f00244, #6c0e2e)'
//   }
}));

export const Home = () => {
  const food = useSelector((state) => state.food);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFood());
  }, []);
  const classes = useStyles();
  let foods = [];

  return (
    <div className={classes.root}>
      {food.loading && <div>...loading</div>}
      {!food.loading && food.error ? <div>{food.error}</div> : null}
      {!food.loading && food.food
        ? (foods = food.food.categories)
          ? foods.map((item) => {
              return (
                <div key={item.idCategory} >
                  <SimplePaper item={item} />
                </div>
              );
            })
          : null
        : null}
    </div>
  );
};
