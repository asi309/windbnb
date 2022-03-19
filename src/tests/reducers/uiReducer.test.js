import { cleanup } from '@testing-library/react';

import { uiReducer } from '../../reducers';

afterEach(cleanup);

test('Should set default ui state', () => {
  const state = uiReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    guestOpen: false,
    locOpen: false,
  });
});

test('Should set guest open', () => {
  const state = uiReducer(
    { guestOpen: false, locOpen: true },
    { type: 'GUEST_OPEN' }
  );

  expect(state).toEqual({
    guestOpen: true,
    locOpen: false,
  });
});

test('Should set location open', () => {
  const state = uiReducer(
    { guestOpen: true, locOpen: false },
    { type: 'LOC_OPEN' }
  );

  expect(state).toEqual({
    guestOpen: false,
    locOpen: true,
  });
});

test('Should set guest close', () => {
  const state = uiReducer(
    { guestOpen: true, locOpen: true },
    { type: 'GUEST_CLOSE' }
  );

  expect(state).toEqual({
    guestOpen: false,
    locOpen: true,
  });
});

test('Should set location close', () => {
  const state = uiReducer(
    { guestOpen: true, locOpen: true },
    { type: 'LOC_CLOSE' }
  );

  expect(state).toEqual({
    guestOpen: true,
    locOpen: false,
  });
});
