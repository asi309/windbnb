const setStays = (stays = []) => ({
  type: 'SET_STAYS',
  stays,
});

const actions = {
  setStays,
};

export default actions;
