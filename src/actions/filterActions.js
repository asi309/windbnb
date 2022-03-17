const setLocation = (location = '') => ({
  type: 'SET_LOCATION',
  location,
});

const setGuests = (guests = 0) => ({
  type: 'SET_GUESTS',
  guests,
});

const setAdults = (adults = 0) => ({
  type: 'SET_ADULTS',
  adults,
});

const setChildren = (children = 0) => ({
  type: 'SET_CHILDREN',
  children,
});

const actions = {
  setLocation,
  setGuests,
  setAdults,
  setChildren,
};

export default actions;
