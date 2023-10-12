const selectHeadphoneModule = (state) => state.headphone;

export const selectHeadphoneById = (state, id) =>
  selectHeadphoneModule(state).entities[id];

export const selectHeadphoneIds = (state) => selectHeadphoneModule(state).ids;
