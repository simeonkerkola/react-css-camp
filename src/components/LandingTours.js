import React from 'react';
import FlipCard from './FlipCard';

const Tours = () => (
  <section className="section-tours">
    <div className="u-center-text u-margin-bottom-m">
      <h2 className="heading-secondary u-margin-bottom-m">Most popular tours</h2>
      <div className="row">
        <div className="col-1-of-3">
          <FlipCard cardStyle="orange" />
        </div>
        <div className="col-1-of-3">
          <FlipCard cardStyle="orange" />
        </div>
        <div className="col-1-of-3">
          <FlipCard cardStyle="orange" />
        </div>
      </div>
    </div>
  </section>
);

export default Tours;
