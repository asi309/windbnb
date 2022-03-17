/* Default filter value */
/* filter = {
  location: 'string',
  guests: 'number',
}; */

/* Reducer */
const filtersReducer = (
  state = { location: 'Finland', guests: 0, adults: 0, children: 0 },
  action
) => {
  switch (action.type) {
    case 'SET_GUESTS':
      return {
        ...state,
        guests: action.guests,
      };
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.location,
      };
    case 'SET_ADULTS':
      return {
        ...state,
        adults: action.adults,
      };
    case 'SET_CHILDREN':
      return {
        ...state,
        children: action.children,
      };
    default:
      return state;
  }
};

export default filtersReducer;
