import { configureStore } from "@reduxjs/toolkit";

import headphone from "./entities/headphone";
import codec from "./entities/codec";
import { loggerMiddleware } from "./middlewares/logger";
import cart from "./ui/cart";
import { api } from "./services/api";

const store = configureStore({
  reducer: {
    headphone,
    codec,
    cart,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
    loggerMiddleware,
  ],
});

console.log(store.getState());

export default store;
