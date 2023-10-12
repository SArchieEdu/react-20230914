import { createSlice } from "@reduxjs/toolkit";
import { normalizedHeadphones } from "../../../constants/mock-normalized";

const initialState = {
  entities: normalizedHeadphones.reduce((acc, headphone) => {
    acc[headphone.id] = headphone;

    return acc;
  }, {}),
  ids: normalizedHeadphones.map(({ id }) => id),
};

const { reducer } = createSlice({
  name: "headphone",
  initialState,
});

export default reducer;
