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
