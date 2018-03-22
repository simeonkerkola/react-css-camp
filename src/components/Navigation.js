import React from 'react';

const Navigation = () => (
  <div className="navigation">
    <input type="checkbox" id="navi-toggle" className="navigation__checkbox" />
    <label htmlFor="navi-toggle" className="navigation__button">
      Menu
    </label>
    <div className="navigation__background">&nbsp;</div>
    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#0" className="navigation__link">
            <span>01</span>About Css Camp
          </a>
        </li>
        <li className="navigation__item">
          <a href="#0" className="navigation__link">
            <span>02</span> Your Benefits
          </a>
        </li>
        <li className="navigation__item">
          <a href="#0" className="navigation__link">
            <span>03</span> Popular Tours
          </a>
        </li>
        <li className="navigation__item">
          <a href="#0" className="navigation__link">
            <span>04</span> Stories
          </a>
        </li>
        <li className="navigation__item">
          <a href="#0" className="navigation__link">
            <span>05</span> Book Now
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
