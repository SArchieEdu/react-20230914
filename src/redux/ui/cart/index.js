import { createSlice } from "@reduxjs/toolkit";
import { decrement } from "./actions";

const { reducer, actions } = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    increment: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    decrement: (state, { payload }) => {
      state[payload] = (state[payload] || 0) > 0 ? state[payload] - 1 : 0;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(decrement.type, () => {})
  //       .addCase("cart/increment", () => {});
  //   },
});

export default reducer;
export { actions as cartActions };
