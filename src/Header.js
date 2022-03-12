import react from 'react';
import logo from './logo.svg';
import playstore from './navAndroidButton.svg';
import apple from './navIosButton.svg';

const Header = () => {
  <header>
    <img src={logo} alt="logo" />
    <div>
      <li>Home</li>
      <li>About</li>
      <li>How it Works</li>
      <li>FAQ</li>
    </div>
    <span>
      <img src={playstore} alt="playstore" />
      <img src={apple} alt="appleStore" />
    </span>
  </header>;
};

export default Header;
