import React from 'react';

const Tours = () => (
  <section className="section-tours">
    <div className="u-center-text u-margin-bottom-m">
      <h2 className="heading-secondary">Most popular tours</h2>
      <div className="row">
        <div className="col-1-of-3">
          <div className="tour-card">
            <div className="tour-card__side tour-card__side--front">front</div>
            <div className="tour-card__side tour-card__side--back">back</div>
          </div>
        </div>
        <div className="col-1-of-3">
          {/* <div className="tour-card">
            <div className="tour-card__side tour-card__side--front">front</div>
            <div className="tour-card__side tour-card__side--back">back</div>
          </div> */}
        </div>
        <div className="col-1-of-3">
          {/* <div className="tour-card">
            <div className="tour-card__side tour-card__side--front">front</div>
            <div className="tour-card__side tour-card__side--back">back</div>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default Tours;
