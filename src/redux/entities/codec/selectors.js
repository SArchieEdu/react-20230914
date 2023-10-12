const selectCodecModule = (state) => state.codec;

export const selectCodecById = (state, id) =>
  selectCodecModule(state).entities[id];

export const selectCodecIds = (state) => selectCodecModule(state).ids;
