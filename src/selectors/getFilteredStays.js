const getFilteredStays = (stays, { location = '', guests = 0 }) => {
  return stays.filter((stay) => {
    const locationString = `${stay.city}, ${stay.country}`;
    const locationMatch =
      location === '' ||
      locationString.toLowerCase().includes(location.toLowerCase());

    const guestMatch = stay.maxGuests >= guests;

    return locationMatch && guestMatch;
  });
};

export default getFilteredStays;
