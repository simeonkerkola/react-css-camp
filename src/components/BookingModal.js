import React from 'react';

const BookingModal = () => {
  const closeBooking = () => {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('modal--show');
  };
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__left">
          <img src="/images/nat-8.jpg" alt="Tour" className="modal__img" />
          <img src="/images/nat-9.jpg" alt="Tour" className="modal__img" />
        </div>
        <div className="modal__right">
          <button className="btn-close" onClick={closeBooking}>
            &times;
          </button>
          <h2 className="heading-secondary u-margin-bottom-s">Start booking now</h2>
          <h3 className="heading-tertiary u-margin-bottom-s">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="modal__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sapiente aut, non
            reprehenderit necessitatibus quam itaque et minima, repudiandae error, quas unde a
            voluptatem veritatis, quisquam nobis nisi ratione dolor. Impedit exercitationem ullam
            nam deserunt itaque, at sint id magni atque quod numquam totam, repudiandae ad? Fugit
            alias quod nihil, inventore sunt!
          </p>
          <button onClick={closeBooking} className="btn btn--green">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookingModal;
