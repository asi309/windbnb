import { uiActions } from '../../actions';

test('Should toggle guest ui state', () => {
  const action = uiActions.setGuestOpen();
  expect(action).toEqual({
    type: 'GUEST_OPEN',
  });
});

test('Should toggle location ui state', () => {
  const action = uiActions.setLocationOpen();
  expect(action).toEqual({
    type: 'LOC_OPEN',
  });
});

test('Should set guest ui state close', () => {
  const action = uiActions.setGuestClose();
  expect(action).toEqual({
    type: 'GUEST_CLOSE',
  });
});

test('Should set location ui state', () => {
  const action = uiActions.setLocationClose();
  expect(action).toEqual({
    type: 'LOC_CLOSE',
  });
});
