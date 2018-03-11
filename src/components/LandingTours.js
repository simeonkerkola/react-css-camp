import React from 'react';
import FlipCard from './FlipCard';

const Tours = () => (
  <section className="section-tours">
    <div className="u-center-text u-margin-bottom-m">
      <h2 className="heading-secondary u-margin-bottom-m">Most popular tours</h2>
      <div className="row">
        <div className="col-1-of-3">
          <FlipCard
            title="The sea explorer"
            cardStyle="orange"
            price="297"
            list={[
              '3 Day Tour',
              'Up to 30 people',
              '2 tour guides',
              'Sleep in cozy hotels',
              'Difficulty: Very easy',
            ]}
          />
        </div>
        <div className="col-1-of-3">
          <FlipCard
            title="The forest hiker"
            cardStyle="green"
            price="497"
            list={[
              '7 Day Tour',
              'Up to 20 people',
              '4 tour guides',
              'Sleep in provided tents',
              'Difficulty: Medium',
            ]}
          />
        </div>
        <div className="col-1-of-3">
          <FlipCard
            title="The snow adventurer"
            cardStyle="blue"
            price="897"
            list={[
              '5 Day Tour',
              'Up to 15 people',
              '3 tour guides',
              'Sleep in provided tents',
              'Difficulty: Hard',
            ]}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Tours;
