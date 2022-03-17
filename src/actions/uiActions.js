const setGuestOpen = () => ({
  type: 'GUEST_OPEN',
});

const setLocationOpen = () => ({
  type: 'LOC_OPEN',
});

const setLocationClose = () => ({
  type: 'LOC_CLOSE',
});

const setGuestClose = () => ({
  type: 'GUEST_CLOSE',
});

const actions = {
  setGuestOpen,
  setLocationOpen,
  setGuestClose,
  setLocationClose,
};

export default actions;
