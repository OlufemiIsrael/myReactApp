import react from 'react';
import Logo from './Logo.svg';
import NavAndroidButton from './NavAndroidButton.svg';
import NavIosButton from './NavIosButton.svg';
import Hamburger from './iconHamburger.svg';

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" className='logo' />
      <div className='navbar'>
        <li className='home'>Home</li>
        <li>About</li>
        <li>How it Works</li>
        <li>FAQ</li>
      </div>
      <span>
        <img src={NavAndroidButton} alt="playstore" />
        <img src={NavIosButton} alt="appleStore" />
      </span>
      <img src={Hamburger} alt="navOptions" className='navButton' />
    </header>
  );
};

export default Header;
