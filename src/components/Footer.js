import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo-box">
      <picture className="footer__logo">
        {/* In source element, we can write a Media query for phone */}
        <source
          srcSet="/images/logo-green-small-1x.png 1x, /images/logo-green-small-2x.png 2x"
          media="(max-width: 37.5em)"
        />
        {/* Let the browser to decide which image to use according to screen resolution */}
        <img
          srcSet="/images/logo-green-1x.png 1x, /images/logo-green-2x.png 2x"
          className="footer__logo"
          alt="logo"
        />
      </picture>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#0" className="footer__link">
                Company
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#0" className="footer__link">
                Contact Us
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#0" className="footer__link">
                Careers
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#0" className="footer__link">
                Privacy
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#0" className="footer__link">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        <p className="footer__copyright">
          Build as a part of this &nbsp;
          <a href="#0" className="footer__link">
            Advanced Css and Sass Course
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
