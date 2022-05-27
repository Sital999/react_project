import React from "react";
import { useParams } from "react-router-dom";
import { fetchFood } from "../Features/foodSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BasicCard from "../Components/Card";

export const Food = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // useSelector takes callback function which returns the state value
  // here user denotes the user:userReducer from store . hence we obtain state value of userSlice using user.
  const items = useSelector((state) => state.food);

  let food = {};
  useEffect(() => {
    dispatch(fetchFood());
  }, []);
  return (
    <div>
      {items.loading && <div>...loading</div>}
      {!items.loading && items.error ? <div>{items.error}</div> : null}
      {!items.loading && items.food ? (
        items.food.categories ? (
          <BasicCard
            item={items.food.categories.find((f) => f.idCategory === id)}
          />
        ) : null
      ) : null}
      {food.idCategory}
    </div>
  );
};
