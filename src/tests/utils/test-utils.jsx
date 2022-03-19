import { Provider } from 'react-redux';

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

const Wrapper = ({ children, store }) => (
  <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
);

const testUtils = {
  ReduxProvider,
  Wrapper,
};

export default testUtils;
