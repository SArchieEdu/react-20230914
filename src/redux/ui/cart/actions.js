import { createAction } from "@reduxjs/toolkit";

export const increment = (productId) => ({
  type: "cart/increment",
  payload: productId,
});

export const decrement = createAction("cart/decrement");
