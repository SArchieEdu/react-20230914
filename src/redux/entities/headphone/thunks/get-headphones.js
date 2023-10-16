import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphoneIds } from "../selectors";

export const getHeadphones = createAsyncThunk(
  "headphones/getHeadphones",
  async () => {
    const response = fetch("http://localhost:3001/api/products/");

    return (await response).json();
  },
  {
    condition: (_, { getState }) => !selectHeadphoneIds(getState())?.length,
  }
);
