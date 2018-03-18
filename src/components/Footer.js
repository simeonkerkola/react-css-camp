import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo-box">
      <img src="/images/logo-green-2x.png" className="footer__logo" alt="logo" />
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
