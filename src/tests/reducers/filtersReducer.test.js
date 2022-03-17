import { cleanup } from '@testing-library/react';

import { filtersReducer } from '../../reducers';

afterEach(cleanup);

test('Should set default filter state', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    location: 'Finland',
    guests: 0,
  });
});

test('Should set location', () => {
  const actionObj = { type: 'SET_LOCATION', location: 'test_location' };
  const state = filtersReducer(undefined, {
    type: 'SET_LOCATION',
    location: 'test_location',
  });

  expect(state.location).toEqual(actionObj.location);
});

test('Should set guests', () => {
  const actionObj = { type: 'SET_GUESTS', guests: 12 };
  const state = filtersReducer(undefined, actionObj);

  expect(state.guests).toEqual(actionObj.guests);
});
