import React from 'react';
import logo from '../images/logo.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" id="Header">
      <div id="Header-logo">
        <img src={logo} alt="PEA-logo" style={{ height: 120 }} />
      </div>
      <div id="Header-content">
        <p className="company-name">Parasrampuria</p>
        <p className="company-name-desc">ESTATE AGENCY</p>
      </div>
    </div>
  );
}

export default Header;
