import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        {/* <NavLink to="/" activeClassName="is-active" exact>Home</NavLink> */}
        <div className="header__logo-box">
          <img src="/images/logo-white.png" alt="Logo" className="header__logo" />
        </div>
        <div className="content-container--center">
          <h1 className="heading-primary">
            <span className="heading-primary__main">Outdoors</span>
            <span className="heading-primary__sub"> is where life happens</span>
          </h1>
          <Link className="header__title" to="/">
            <button>button</button>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
