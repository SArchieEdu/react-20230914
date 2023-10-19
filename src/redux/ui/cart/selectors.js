const selectCartModule = (state) => state.cart;

export const selectProductAmountById = (state, productId) =>
  selectCartModule(state)[productId] || 0;
