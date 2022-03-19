import { images } from '../../constants/images';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="app__flex">
      <div className="app__footer-copyright app__flex">
        <p>created by <b>asi309</b> - </p>
        <div className="app__footer-logo">
          <img src={images.devChallenges} />
        </div>
        <p>devChallenges.io</p>
      </div>
    </footer>
  );
};

export default Footer;
