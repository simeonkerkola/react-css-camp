import React from 'react';

const Tours = () => (
  <section className="section-tours">
    <div className="u-center-text u-margin-bottom-m">
      <h2 className="heading-secondary">Most popular tours</h2>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">
                <br />
              </div>
              <h4 className="card__heading">
                <span className="card__heading-background--1">The sea explorer</span>
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
            <div className="card__side card__side--back">back</div>
          </div>
        </div>
        <div className="col-1-of-3">
          {/* <div className="card">
            <div className="card__side card__side--front">front</div>
            <div className="card__side card__side--back">back</div>
          </div> */}
        </div>
        <div className="col-1-of-3">
          {/* <div className="card">
            <div className="card__side card__side--front">front</div>
            <div className="card__side card__side--back">back</div>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default Tours;
