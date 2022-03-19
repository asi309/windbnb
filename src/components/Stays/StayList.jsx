import { useSelector } from 'react-redux';

import { getFilteredStays } from '../../selectors';
import Stay from './Stay';
import './StayList.scss';

const StayList = () => {
  const stays = useSelector((store) => store.stays);
  const filters = useSelector((store) => store.filters);

  const filteredStays = getFilteredStays(stays, filters);

  return (
    <div className="app__stays-list">
      {filteredStays.map((stay, idx) => (
        <Stay key={`stay-${idx}`} stay={stay} />
      ))}
    </div>
  );
};

export default StayList;
