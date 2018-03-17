import React from 'react';

const Booking = () => (
  <div>
    <div className="book">
      <div className="book__form">
        <form action="#0" className="form">
          <h2 className="heading-secondary u-margin-bottom-s">Start booking now</h2>

          <div className="form__group">
            <input type="text" className="form__input" placeholder="Full Name" id="name" required />
            <label className="form__label" htmlFor="name">
              Full Name
            </label>
          </div>

          <div className="form__group">
            <input type="email" className="form__input" placeholder="Email" id="email" required />
            <label className="form__label" htmlFor="email">
              Email
            </label>
          </div>

          <div className="form__group u-margin-bottom-m">
            <div className="form__radio-group">
              <input type="radio" id="small" className="form__radio-input" name="size" />
              <label htmlFor="small" className="form__radio-label">
                <span className="form__radio-button" />
                Small tour group
              </label>
            </div>
            <div className="form__radio-group">
              <input type="radio" id="large" className="form__radio-input" name="size" />
              <label htmlFor="large" className="form__radio-label">
                <span className="form__radio-button" />
                Large tour group
              </label>
            </div>
          </div>

          <div className="form__group">
            <button className="btn btn--green">Next step &rarr;</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Booking;
