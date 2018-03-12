import React from 'react';

const Story = ({ author, imgSrc, title, story }) => (
  <div className="story">
    <figure className="story__shape">
      <img src={imgSrc} alt={author} className="story__img" />
      <figcaption className="story__caption">{author}</figcaption>
    </figure>
    <div className="story__text">
      <h3 className="heading-tertiary u-margin-bottom-s">{title}</h3>
      <p>{story}</p>
    </div>
  </div>
);

export default Story;
