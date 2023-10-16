import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getHeadphones } from "./thunks/get-headphones";
import { REQUEST_STATUS } from "../../../constants/statuses";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "headphone",
  initialState: entityAdapter.getInitialState({
    status: REQUEST_STATUS.idle,
  }),
  extraReducers: (builder) =>
    builder
      .addCase(getHeadphones.pending, (state) => {
        state.status = REQUEST_STATUS.pending;
      })
      .addCase(getHeadphones.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.status = REQUEST_STATUS.fulfilled;
      })
      .addCase(getHeadphones.rejected, (state) => {
        state.status = REQUEST_STATUS.rejected;
      }),
});

export default reducer;
