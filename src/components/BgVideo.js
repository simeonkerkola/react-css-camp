import React from 'react';

const BgVideo = props => (
  <video className="bg-video__content" autoPlay muted loop>
    <track kind="captions" />
    <source src={props.videoPath} type="video/mp4" />
    <source src={props.videoPath} type="video/webm" />
    Your browser is not supported!
  </video>
);
export default BgVideo;
