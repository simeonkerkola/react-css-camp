import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => (
  <header className="header">
    {/* <NavLink to="/" activeClassName="is-active" exact>Home</NavLink> */}
    <div className="header__logo-box">
      <img src="/images/logo-white.png" alt="Logo" className="header__logo" />
    </div>
    <div className="header__text-box--center">
      <h1 className="heading-primary">
        <span className="heading-primary--main">Outdoors</span>
        <span className="heading-primary--sub">is where life happens</span>
      </h1>
      <Link to="/" className="btn btn--white btn--animated">
        Discover our tours
      </Link>
    </div>
  </header>
);

export default Header;
