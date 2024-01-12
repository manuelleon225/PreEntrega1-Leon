import React from 'react';
import LogoNv from "./Logo";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeadphones, faVolumeHigh, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center" style={navbarStyle}>
        <div className="col-3 col-md-1">
          <LogoNv tamano={120} />
        </div>
        <div className="col-9 col-md-8">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" style={navLinkStyle} href='#'>
                <FontAwesomeIcon icon={faMusic} /> Instrumentos Musicales
              </a>
            </li>
            <li className="nav-item active" >
              <a className="nav-link" style={navLinkStyle} href='#'>
                <FontAwesomeIcon icon={faHeadphones} /> Audio Y amplificación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={navLinkStyle} href='#'>
                <FontAwesomeIcon icon={faVolumeHigh} /> Producción Musical
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={navLinkStyle} href='#'>
                <FontAwesomeIcon icon={faBagShopping} /> Merch
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <CartWidget />
        </div>
      </div>
    </div>
  );
};

const navbarStyle = {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '8px',        
  };

  const navLinkStyle = {
    color: '#343a40',
  };

export default NavBar;
