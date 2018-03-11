import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ cardStyle, list, price, title }) => {
  const renderList = list.map(item => <li key={item}>{item}</li>);
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture--${cardStyle}`}>
          <br />
        </div>
        <h4 className="card__heading">
          <span className={`card__heading-background--${cardStyle}`}>{title}</span>
        </h4>
        <div className="card__details">
          <ul>{renderList}</ul>
        </div>
      </div>
      <div className={`card__side card__side--back card__side--back-${cardStyle}`}>
        <div className="text-box--center">
          <div className="card__price-box">
            <div className="card__price-only">Only</div>
            <div className="card__price-amount">€{price}</div>
            <Link to="#0" className="btn btn--white">
              Book now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
