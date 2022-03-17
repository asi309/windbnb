import { getFilteredStays } from '../../selectors';

const stays = [
  {
    city: 'Helsinki',
    country: 'Finland',
    superHost: false,
    title: 'Stylist apartment in center of the city',
    rating: 4.4,
    maxGuests: 3,
    type: 'Entire apartment',
    beds: 2,
    photo:
      'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80',
  },
  {
    city: 'Turku',
    country: 'Finland',
    superHost: false,
    title: 'Nice apartment in center of Helsinki',
    rating: 4.2,
    maxGuests: 5,
    type: 'Entire apartment',
    beds: 3,
    photo:
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  },
];

test('Should filter by location', () => {
  const filters = {
    location: 'h',
    guests: 1,
  };

  const result = getFilteredStays(stays, filters);

  expect(result[0]).toEqual(stays[0]);
});

test('Should filter by guests', () => {
  const filters = {
    guests: 2,
  };

  const result = getFilteredStays(stays, filters);

  expect(result).toEqual(stays);
});

test('Should filter by guests', () => {
  const filters = {
    guests: 6,
  };

  const result = getFilteredStays(stays, filters);

  expect(result).toEqual([]);
});

test('Should filter by guests', () => {
  const filters = {
    guests: 5,
  };

  const result = getFilteredStays(stays, filters);

  expect(result[0]).toEqual(stays[1]);
});
