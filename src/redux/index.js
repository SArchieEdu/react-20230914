import { configureStore } from "@reduxjs/toolkit";

import headphone from "./entities/headphone";
import codec from "./entities/codec";
import { loggerMiddleware } from "./middlewares/logger";
import cart from "./ui/cart";

const store = configureStore({
  reducer: {
    headphone,
    codec,
    cart,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});

console.log(store.getState());

export default store;
