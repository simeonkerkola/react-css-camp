import React from 'react';
import { Link } from 'react-router-dom';
import Story from './Story';
import BgVideo from './BgVideo';

const LandingStories = () => (
  <div>
    <div className="bg-video">
      <BgVideo videoPath="/images/video.mp4" />
    </div>
    <div className="u-center-text u-margin-bottom-m">
      <h2 className="heading-secondary ">We make people genuinely happy</h2>
    </div>
    <div className="row">
      <Story
        author="Jane Roe"
        imgSrc="/images/nat-8.jpg"
        title="I had the best week ever with my co-workers!"
        story="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias blanditiis
        praesentium itaque accusantium! Hic itaque, consequuntur optio, quia reiciendis iure, atque
        aspernatur voluptates inventore tenetur commodi nam quod modi."
      />
    </div>

    <div className="row">
      <Story
        author="John Doe"
        imgSrc="/images/nat-9.jpg"
        title="WOW! My life is completely different now"
        story="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid atque distinctio vero, sequi culpa iure aperiam,
        obcaecati modi molestiae, provident perspiciatis, expedita cum
        nesciunt quidem. Saepe vitae vero, error incidunt!"
      />
    </div>
    <div className="u-center-text">
      <Link to="#0" className="btn-text">
        Read more stories &rarr;
      </Link>
    </div>
  </div>
);

export default LandingStories;
