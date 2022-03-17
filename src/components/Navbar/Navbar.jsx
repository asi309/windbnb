import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filterActions, uiActions } from '../../actions';
import Counter from './Counter';
import { images } from '../../constants/images';

import './Navbar.scss';
import Filter from './Filter';

const Navbar = () => {
  const [adultsState, setAdultsState] = useState(0);
  const [childrenState, setChildrenState] = useState(0);
  const dispatch = useDispatch();
  const uiState = useSelector((state) => state.ui);
  const filterState = useSelector((state) => state.filters);

  useEffect(() => {
    setAdultsState(filterState.adults);
    setChildrenState(filterState.children);
  }, []);

  useEffect(() => {
    dispatch(filterActions.setGuests(adultsState + childrenState));
  }, [adultsState, childrenState]);

  const navOpen = uiState.guestOpen || uiState.locOpen;

  const guestTypes = [
    {
      title: 'Adults',
      subtitle: 'Ages 13 or above',
      state: adultsState,
      modifier: setAdultsState,
    },
    {
      title: 'Children',
      subtitle: 'Ages 2-12',
      state: childrenState,
      modifier: setChildrenState,
    },
  ];

  const handleOverlayClick = () => {
    dispatch(uiActions.setGuestClose());
    dispatch(uiActions.setLocationClose());
  };

  return (
    <>
      {navOpen && <div className="app__overlay" onClick={handleOverlayClick} />}
      <nav className="app__navbar app__flex">
        {!navOpen && (
          <div className="app__navbar-logo">
            <img src={images.logo} alt="logo" />
          </div>
        )}
        <Filter />
      </nav>
      {navOpen && (
        <div className="app__navbar-expanded">
          {uiState.guestOpen && (
            <div className="app__navbar-counters">
              {guestTypes.map((guest, idx) => (
                <Counter
                  key={`counter-${idx}`}
                  title={guest.title}
                  subtitle={guest.subtitle}
                  count={guest.state}
                  setCount={guest.modifier}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
