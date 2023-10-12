import { createSlice } from "@reduxjs/toolkit";
import { normalizedCodecs } from "../../../constants/mock-normalized";

const initialState = {
  entities: normalizedCodecs.reduce((acc, codec) => {
    acc[codec.id] = codec;

    return acc;
  }, {}),
  ids: normalizedCodecs.map(({ id }) => id),
};

const { reducer } = createSlice({
  name: "codec",
  initialState,
});

export default reducer;
