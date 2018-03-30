import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="u-content-container">
    <div className="u-center-text u-margin-bottom-m">
      <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-xs">
          You are going to fall in love with nature.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quidem quas incidunt est
          officiis sed doloremque neque eligendi, rem architecto laborum deleniti molestias fugit
          tempora asperiores tempore, quae doloribus! At.
        </p>
        <h3 className="heading-tertiary u-margin-bottom-xs">
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
          {/* srcSet: Inform the browser about the image width */}
          {/* sizes: Size on a screen 170px/900px = 20%, default size 300px */}
          {/* src: Normal src tag for older browsers */}
          <img
            srcSet="/images/nat-1.jpg 300w, /images/nat-1.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="Nature 1"
            className="composition__photo composition__photo--p1"
            src="/images/nat-1.jpg"
          />
          <img
            srcSet="/images/nat-2.jpg 300w, /images/nat-2.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="Nature 2"
            className="composition__photo composition__photo--p2"
            src="/images/nat-2.jpg"
          />
          <img
            srcSet="/images/nat-3.jpg 300w, /images/nat-3.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="Nature 3"
            className="composition__photo composition__photo--p3"
            src="/images/nat-3.jpg"
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;
