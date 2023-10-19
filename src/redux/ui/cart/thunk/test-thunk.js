import { cartActions } from "..";

export const testThunk = (productId) => (dispatch, getState) => {
  dispatch(cartActions.decrement(productId));
};
