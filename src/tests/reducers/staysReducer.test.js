import { cleanup } from '@testing-library/react';

import { staysReducer } from '../../reducers';

afterEach(cleanup);

const stays = ['stay1', 'stay2'];

test('Should set stays initial state', () => {
  const state = staysReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('Should set stays from array', () => {
  const state = staysReducer(['stay3'], { type: 'SET_STAYS', stays });

  expect(state).toEqual(stays);
});

test('Should add stay to array', () => {
  const state = staysReducer(stays, { type: 'ADD_STAY', stay: 'stay3' });

  expect(state).toEqual([...stays, 'stay3']);
});

test('Should remove stay from array', () => {
  const stays = [{ title: 'stay1' }, { title: 'stay2' }];
  const state = staysReducer(stays, { type: 'DELETE_STAY', title: 'stay2' });

  expect(state).toEqual([{ title: 'stay1' }]);
});
