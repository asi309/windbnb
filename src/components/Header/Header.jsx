import { useSelector } from 'react-redux';

import './Header.scss';

const Header = () => {
  const location = useSelector((state) => state.filters.location);
  const stays = useSelector(state => state.stays)

  const numStays = stays.length;

  return (
    <div className="app__header app__flex">
      <div className="app__header-location">Stays in {location}</div>
      <div className="app__header-count">{numStays.length <= 12 ? numStays : '12+'} stays</div>
    </div>    
  )
}

export default Header