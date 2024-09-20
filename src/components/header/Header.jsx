import React, { Suspense } from 'react';
import logo from "../../assets/images/logo.png";
import { navData } from '../../assets/js/data';
import NavLink from './navLinks';
import './header.css';

// Lazy load MenuIcon for better performance
const MenuIcon = React.lazy(() => import('@mui/icons-material/Menu'));

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Your Brand Logo" height={25} width={120} />
      </div>

      <nav className="navigation">
        <ul className="nav-links">
          {navData.map((link, index) => (
            <NavLink key={index} title={link.title} dropdownItems={link.dropdownItems} />
          ))}
        </ul>
      </nav>

      <div className="savedList">
        <ul className="account-links">
          <li><span>Saved Homes</span></li>
          <li><span>Saved Searches</span></li>
        </ul>
        <button className="login-button">Sign Up or Log In</button>
        <Suspense fallback={<div className="menu-icon-placeholder" />}>
          <MenuIcon className="menu-icon" />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
