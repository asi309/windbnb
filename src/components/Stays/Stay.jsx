import { BsFillStarFill } from 'react-icons/bs';

import './Stay.scss';

const Stay = ({
  stay: {
    superHost,
    title,
    rating,
    type,
    beds,
    photo,
  },
}) => {
  return (
    <div className="app__stay app__flex">
      <div className="app__stay-photo">
        <img src={photo} alt="stay" />
      </div>
      <div className="app__stay-details app__flex">
        <div className="app__stay-details-info app__flex">
          <div className='app__stay-details-room app__flex'>
            {superHost && (
              <div className="app__stay-details-superhost">SUPER HOST</div>
            )}
            <div className="app__stay-details-type">
              {type}
              {beds && ` . ${beds} beds`}
            </div>
          </div>
          <div className="app__stay-details-rating app__flex">
            <BsFillStarFill color='#EB5757' fontSize={16} />
            {rating.toFixed(2)}
          </div>
        </div>
        <div className="app__stay-details-title">
          {title.length >= 40 ? `${title.slice(0, 37)}...` : title}
        </div>
      </div>
    </div>
  );
};

export default Stay;
