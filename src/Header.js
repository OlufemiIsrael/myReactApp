import react from 'react';
import Logo from './Logo.svg';
import NavAndroidButton from './NavAndroidButton.svg';
import NavIosButton from './NavIosButton.svg';

const Header = () => {
  return(
    <header>
    <img src={Logo} alt="logo" />
    <div>
      <li>Home</li>
      <li>About</li>
      <li>How it Works</li>
      <li>FAQ</li>
    </div>
    <span>
      <img src={NavAndroidButton} alt="playstore" />
      <img src={NavIosButton} alt="appleStore" />
    </span>
  </header>
  )
};

export default Header;
