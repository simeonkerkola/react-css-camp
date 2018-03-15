import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="u-content-container">
    <div className="u-center-text u-margin-bottom-m">
      <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-s">
          You are going to fall in love with nature.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quidem quas incidunt est
          officiis sed doloremque neque eligendi, rem architecto laborum deleniti molestias fugit
          tempora asperiores tempore, quae doloribus! At.
        </p>
        <h3 className="heading-tertiary u-margin-bottom-s">
          Live adventures like you never had before.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, earum dolorum voluptatibus
          adipisci eum atque totam iusto explicabo consequuntur tempora debitis sunt, maxime
          accusamus quo pariatur omnis ea tenetur. Deserunt.
        </p>
        <Link to="#0" className="btn-text">
          Learn More &rarr;
        </Link>
      </div>
      <div className="col-1-of-2">
        <div className="composition">
          <img
            src="/images/nat-1.jpg"
            alt="Nature 1"
            className="composition__photo composition__photo--p1"
          />
          <img
            src="/images/nat-2.jpg"
            alt="Nature 2"
            className="composition__photo composition__photo--p2"
          />
          <img
            src="/images/nat-3.jpg"
            alt="Nature 3"
            className="composition__photo composition__photo--p3"
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;
