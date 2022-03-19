import { filterActions } from '../../actions';

test('Should set location', () => {
  const action = filterActions.setLocation('location_test');
  expect(action).toEqual({
    type: 'SET_LOCATION',
    location: 'location_test',
  });
});

test('Should set guests', () => {
  const action = filterActions.setGuests(20);
  expect(action).toEqual({
    type: 'SET_GUESTS',
    guests: 20,
  });
});

test('Should set adults', () => {
  const action = filterActions.setAdults(20);
  expect(action).toEqual({
    type: 'SET_ADULTS',
    adults: 20,
  });
});

test('Should set children', () => {
  const action = filterActions.setChildren(20);
  expect(action).toEqual({
    type: 'SET_CHILDREN',
    children: 20,
  });
});
