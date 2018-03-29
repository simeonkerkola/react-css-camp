import React, { Component } from 'react';
import Booking from './Booking';
import LandingAbout from './LandingAbout';
import LandingHeader from './LandingHeader';
import LandingFeatures from './LandingFeatures';
import LandingTours from './LandingTours';
import LandingStories from './LandingStories';
import Footer from './Footer';
import Navigation from './Navigation';
import BookingModal from './BookingModal';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <LandingHeader />
        <main>
          <section className="section-about" id="section-about">
            <LandingAbout />
          </section>
          <section className="section-features" id="section-features">
            <LandingFeatures />
          </section>
          <section className="section-tours" id="section-tours">
            <LandingTours />
          </section>
          <section className="section-stories" id="section-stories">
            <LandingStories />
          </section>
          <div className="section-booking" id="section-booking">
            <div className="row">
              <Booking />
            </div>
          </div>
        </main>
        <Footer />
        <BookingModal />

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
