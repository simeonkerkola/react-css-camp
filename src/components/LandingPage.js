import React, { Component } from 'react';
import About from './About';
import Header from './Header';
import Features from './Features';
import Tours from './Tours';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="u-content-container">
            <About />
          </div>
          <Features />
          <div className="u-content-container">
            <Tours />
          </div>
        </main>

        {/* <section className="grid-test">
          <div className="row">
            <div className="col-1-of-2">col 1-of-2</div>
            <div className="col-1-of-2">col 1-of-2</div>
          </div>

          <div className="row">
            <div className="col-1-of-3">col 1-of-3</div>
            <div className="col-1-of-3">col 1-of-3</div>
            <div className="col-1-of-3">col 1-of-3</div>
          </div>

          <div className="row">
            <div className="col-1-of-3">col 1-of-3</div>
            <div className="col-2-of-3">col 2-of-3</div>
          </div>

          <div className="row">
            <div className="col-1-of-4">col 1-of-4</div>
            <div className="col-1-of-4">col 1-of-4</div>
            <div className="col-1-of-4">col 1-of-4</div>
            <div className="col-1-of-4">col 1-of-4</div>
          </div>

          <div className="row">
            <div className="col-1-of-4">col 1-of-4</div>
            <div className="col-1-of-4">col 1-of-4</div>
            <div className="col-2-of-4">col 2-of-4</div>
          </div>

          <div className="row">
            <div className="col-1-of-4">col 1-of-4</div>
            <div className="col-3-of-4">col 3-of-4</div>
          </div>
        </section> */}
      </div>
    );
  }
}

export default LandingPage;
