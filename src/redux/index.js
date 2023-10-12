import { configureStore } from "@reduxjs/toolkit";

import headphone from "./entities/headphone";
import codec from "./entities/codec";

const store = configureStore({
  reducer: {
    headphone,
    codec,
  },
});

console.log(store.getState());

export default store;
