import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';

import { filterActions, uiActions } from '../../actions';
import Input from './Input';
import './Filter.scss';

const Filter = () => {
  const [locationState, setLocationState] = useState('');
  const [guestsState, setGuestsState] = useState(null);

  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filters);
  const uiState = useSelector((state) => state.ui);

  const navOpen = uiState.guestOpen || uiState.locOpen;

  useEffect(() => {
    if (
      (filterState.location === '' || filterState.location) &&
      (filterState.guests === 0 || filterState.guests)
    ) {
      setLocationState(filterState.location);
      setGuestsState(filterState.guests);
    }
  }, [filterState.location, filterState.guests]);

  useEffect(() => {
    if (uiState.guestOpen) {
      dispatch(filterActions.setLocation(locationState));
    }
  }, [uiState.guestOpen]);

  const searchHandler = () => {
    if (locationState !== '' && guestsState !== null) {
      dispatch(filterActions.setLocation(locationState));
      dispatch(uiActions.setGuestClose());
      dispatch(uiActions.setLocationClose());
    }
  };

  const GuestJsx = () => (
    <>
      {guestsState === 0 || guestsState === null ? (
        <p className="app__navbar-blank">Add guests</p>
      ) : (
        <p className="app__navbar-filled">
          {`${guestsState} ${guestsState === 1 ? 'guest' : 'guests'}`}
        </p>
      )}
    </>
  );

  return (
    <div
      className={`app__navbar-search${navOpen ? '-expanded' : ''}`}
      data-testid="filters"
    >
      <div
        className={`app__navbar-search-location${navOpen ? '-expanded' : ''}`}
        onClick={(e) => {
          dispatch(uiActions.setLocationOpen());
        }}
      >
        {!navOpen ? (
          locationState === '' ? (
            <p className="app__navbar-blank">Add location</p>
          ) : (
            <p className="app__navbar-filled">
              {locationState.length > 18
                ? `${locationState.slice(0, 15)}...`
                : locationState}
            </p>
          )
        ) : (
          <Input
            filterType="location"
            inputValue={locationState}
            setValue={setLocationState}
            focus={uiState.locOpen}
          />
        )}
      </div>
      <div
        className={`app__navbar-search-guests${navOpen ? '-expanded' : ''}`}
        onClick={(e) => {
          dispatch(uiActions.setGuestOpen());
        }}
      >
        {!navOpen ? (
          <GuestJsx />
        ) : (
          <div
            className="input-container"
            style={
              uiState.guestOpen
                ? { border: '1px solid #333' }
                : { border: '1px solid transparent' }
            }
          >
            <label htmlFor="nav-input-guests">GUESTS</label>
            <div className="nav-input" id="nav-input-guests">
              <GuestJsx />
            </div>
          </div>
        )}
      </div>
      <div
        className={`app__navbar-search-btn-container${
          navOpen ? '-expanded' : ''
        }`}
      >
        <button
          type="button"
          onClick={searchHandler}
          className={`app__navbar-search-btn`}
        >
          <BsSearch color={navOpen ? '#fff' : '#eb5757'} fontSize={18} />
          {navOpen && <p>Search</p>}
        </button>
      </div>
    </div>
  );
};

export default Filter;
