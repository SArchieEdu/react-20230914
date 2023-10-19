import { createAction } from "@reduxjs/toolkit";

export const increment = (productId) => ({
  type: "cart/increment",
  payload: productId,
});

dispatch(increment("123123"));

export const decrement = createAction("cart/decrement");

dispatch(decrement("123123"));
