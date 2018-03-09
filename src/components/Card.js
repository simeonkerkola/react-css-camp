import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ color }) => (
  <div className="card">
    <div className="card__side card__side--front">
      <div className={`card__picture card__picture--${color}`}>
        <br />
      </div>
      <h4 className="card__heading">
        <span className={`card__heading-background--${color}`}>The sea explorer</span>
      </h4>
      <div className="card__details">
        <ul>
          <li>3 Day Tour</li>
          <li>Up to 30 people</li>
          <li>2 tour guides</li>
          <li>Sleep in cozy hotels</li>
          <li>Difficulty: Easy tour</li>
        </ul>
      </div>
    </div>
    <div className="card__side card__side--back">
      <div className="text-box--center">
        <div className="card__price-box">
          <div className="card__price-only">Only</div>
          <div className="card__price-amount">€297</div>
          <Link to="#0" className="btn btn--white">
            Book now!
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
