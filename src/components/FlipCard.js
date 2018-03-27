import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { cardStyle, list, price, title } = this.props;
    const renderList = list.map(item => <li key={item}>{item}</li>);
    const startBooking = () => {
      const modal = document.querySelector('.modal');
      modal.classList.toggle('modal--show');
    };
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
          <div className="card__back-box">
            <div className="card__price-box">
              <div className="card__price-only">Only</div>
              <div className="card__price-amount">€{price}</div>
              <button className="btn btn--white" onClick={startBooking}>
                Book now!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
