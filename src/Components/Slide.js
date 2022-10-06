import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';

import Swiper from 'swiper/bundle';
import { GetAllEvents } from '../Redux/EventApi';

// import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slide() {
  const { events, loading, error } = useSelector((state) => state.EventDataReducer);
  const dispatch = useDispatch();

  console.log(events);

  const slicedEvents = events.slice(0, 6);
  console.log('sliced events', slicedEvents);

  useEffect(() => {
    dispatch(GetAllEvents());
  }, [dispatch]);

  let pageDetail;
  if (loading) {
    pageDetail = <ClipLoader color="#000" size={150} />;
  }

  if (error) {
    pageDetail = 'Kindly refresh the page or contact the site manager';
  }

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidePerView: 2,
    autoplay: true,
    speed: 900,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  console.log(swiper);

  return (
    <div className="Slider">
      <h1>Event Name</h1>

      <div className="swiper">

        <div className="swiper-wrapper">
          {
            slicedEvents.length ? slicedEvents.map((event) => (
              <div key={event.id} className="swiper-slide">
                <div>
                  {' '}
                  <p>
                    Event NAme
                    {event.name}
                  </p>
                </div>
                <div><p>{event.date}</p></div>
                <div className="image-container">
                  {' '}
                  <img src={event.image} alt="eventImage" />
                  {' '}
                </div>
              </div>
            )) : null
          }

        </div>

        <div className="swiper-pagination" />

        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />

        <div className="swiper-scrollbar" />
      </div>
      <div>{pageDetail}</div>
    </div>
  );
}
