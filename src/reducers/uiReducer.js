const uiReducer = (
  state = { guestOpen: false, locOpen: false, },
  action
) => {
  switch (action.type) {
    case 'GUEST_OPEN':
      return {
        ...state,
        guestOpen: true,
        locOpen: state.locOpen && !state.locOpen,
      };
    case 'LOC_OPEN':
      return {
        ...state,
        locOpen: true,
        guestOpen: state.guestOpen && !state.guestOpen,
      };
    case 'GUEST_CLOSE':
      return {
        ...state,
        guestOpen: false,
      };
    case 'LOC_CLOSE':
      return {
        ...state,
        locOpen: false,
      };
    default:
      return state;
  }
};

export default uiReducer;
