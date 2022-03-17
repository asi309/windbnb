import { staysActions } from '../../actions';

test('Should set stays from list', () => {
  const stays = ['stay1', 'stay2', 'stay3'];
  const action = staysActions.setStays(stays);

  expect(action).toEqual({
    type: 'SET_STAYS',
    stays,
  });
});
