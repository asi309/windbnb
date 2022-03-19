import { useSelector } from 'react-redux';

import { getFilteredStays } from '../../selectors';
import './Header.scss';

const Header = () => {
  const filters = useSelector((state) => state.filters);
  const stays = useSelector((state) => state.stays);

  const filteredStays = getFilteredStays(stays, filters);

  return (
    <div className="app__header app__flex">
      <div className="app__header-location">Stays in {filters.location}</div>
      <div className="app__header-count">
        {filteredStays.length <= 12 ? filteredStays.length : '12+'} stays
      </div>
    </div>
  );
};

export default Header;
