/* Default structure of stays in data */
/* stay = {
  city: 'string',
  country: 'string',
  superHost: 'boolean',
  title: 'string',
  rating: 'double',
  maxGuests: 'int',
  type: 'string',
  beds: 'int',
  photo: 'string url',
};
 */

/* Reducer */
const staysReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STAY':
      return [...state, action.stay];
    case 'DELETE_STAY':
      return state.filter(
        (stay) => stay.title.toLowerCase() !== action.title.toLowerCase()
      );
    case 'SET_STAYS':
      return [...state, ...action.stays];
    default:
      return state;
  }
};

export default staysReducer;
