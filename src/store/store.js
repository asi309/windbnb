import { configureStore } from '@reduxjs/toolkit';

import { staysReducer, filtersReducer, uiReducer } from '../reducers';

const store = configureStore({
  reducer: {
    stays: staysReducer,
    filters: filtersReducer,
    ui: uiReducer,
  },
});

export default store;
