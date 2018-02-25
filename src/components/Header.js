import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        {/* <NavLink to="/" activeClassName="is-active" exact>Home</NavLink> */}
        <Link className="header__title" to="/dashboard">
          <h1>Boilerplate</h1>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
