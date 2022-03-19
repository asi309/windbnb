import { render, cleanup, getAllByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureStore } from '@reduxjs/toolkit';

import testUtils from '../utils/test-utils';
import { filtersReducer, uiReducer } from '../../reducers';
import { Navbar } from '../../components';

const { Wrapper } = testUtils;

afterEach(cleanup);

test('Location text should change when search button is clicked', () => {
  const store = configureStore({
    reducer: { filters: filtersReducer, ui: uiReducer },
  });

  const { getByText, getByPlaceholderText, getByTestId } = render(
    <Wrapper store={store}>
      <Navbar />
    </Wrapper>
  );

  const locationEl = getByTestId('filters');
  expect(locationEl).toBeInTheDocument();

  // Clicking on location
  userEvent.click(locationEl.firstElementChild);
  expect(getByPlaceholderText(/Add location/i)).toBeInTheDocument();

  // Typing Helsinki in location input
  userEvent.type(getByPlaceholderText(/Add location/i), 'Helsinki');
  expect(getByPlaceholderText(/Add location/i)).toHaveValue('Helsinki');

  // Location change should remain on clicking search button
  userEvent.click(getByText(/Search/i));
  expect(getByText(/Helsinki/i)).toBeInTheDocument();
});

test('Guest change counters should appear on guest click', () => {
  const store = configureStore({
    reducer: { filters: filtersReducer, ui: uiReducer },
  });

  const { getByText, getByPlaceholderText, getByTestId } = render(
    <Wrapper store={store}>
      <Navbar />
    </Wrapper>
  );

  const locationEl = getByTestId('filters');
  expect(locationEl).toBeInTheDocument();

  // Clicking on Guest
  userEvent.click(locationEl.children[1]);
  expect(getByText(/Adults/i)).toBeInTheDocument();
});

test('Guest changes should occur on clicking adults', () => {
  const store = configureStore({
    reducer: { filters: filtersReducer, ui: uiReducer },
  });

  const { getByText, getByTestId } = render(
    <Wrapper store={store}>
      <Navbar />
    </Wrapper>
  );

  const locationEl = getByTestId('filters');
  expect(locationEl).toBeInTheDocument();

  // Clicking on Guest
  userEvent.click(locationEl.children[1]);
  expect(getByText(/Adults/i)).toBeInTheDocument();

  // Get all counters
  const counters = document.querySelectorAll('.guest-counter');
  // Get all + buttons
  const incEl = getAllByText(counters[0], /\+/);
  // Clicking adults + button
  userEvent.click(incEl[0]);
  expect(getByTestId('count-adults').textContent).toBe('1');
});

test('Guest changes should occur on clicking children', () => {
  const store = configureStore({
    reducer: { filters: filtersReducer, ui: uiReducer },
  });

  const { getByText, getByTestId } = render(
    <Wrapper store={store}>
      <Navbar />
    </Wrapper>
  );

  const locationEl = getByTestId('filters');
  expect(locationEl).toBeInTheDocument();

  // Clicking on Guest
  userEvent.click(locationEl.children[1]);
  expect(getByText(/Children/i)).toBeInTheDocument();

  // Get all counters
  const counters = document.querySelectorAll('.guest-counter');
  // Get all + buttons
  const incEl = getAllByText(counters[1], /\+/);
  // Clicking children + button
  userEvent.click(incEl[0]);
  expect(getByTestId('count-children').textContent).toBe('1');
});

test('Guest changes should never be negative adults', () => {
  const store = configureStore({
    reducer: { filters: filtersReducer, ui: uiReducer },
  });

  const { getByText, getByTestId } = render(
    <Wrapper store={store}>
      <Navbar />
    </Wrapper>
  );

  const locationEl = getByTestId('filters');
  expect(locationEl).toBeInTheDocument();

  // Clicking on Guest
  userEvent.click(locationEl.children[1]);
  expect(getByText(/Adults/i)).toBeInTheDocument();

  // Get all counters
  const counters = document.querySelectorAll('.guest-counter');
  // Get all - buttons
  const incEl = getAllByText(counters[0], /\-/);
  // Clicking adults - button
  userEvent.click(incEl[0]);
  expect(getByTestId('count-adults').textContent).toBe('0');
});

test('Guest changes should never be negative children', () => {
  const store = configureStore({
    reducer: { filters: filtersReducer, ui: uiReducer },
  });

  const { getByText, getByTestId } = render(
    <Wrapper store={store}>
      <Navbar />
    </Wrapper>
  );

  const locationEl = getByTestId('filters');
  expect(locationEl).toBeInTheDocument();

  // Clicking on Guest
  userEvent.click(locationEl.children[1]);
  expect(getByText(/Children/i)).toBeInTheDocument();

  // Get all counters
  const counters = document.querySelectorAll('.guest-counter');
  // Get all - buttons
  const incEl = getAllByText(counters[0], /\-/);
  // Clicking children - button
  userEvent.click(incEl[0]);
  expect(getByTestId('count-children').textContent).toBe('0');
});
