import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { GetAllEvents, DeleteEvent } from '../Redux/EventApi';
import '../css/style.css';

export default function Events() {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state) => state.EventDataReducer);
  const { users } = useSelector((state) => state.UserDataReducer);

  const getResponse = sessionStorage.getItem('serverResponse');
  const user = { ...users[0] };

  let pageDetail;
  if (loading) {
    pageDetail = <ClipLoader color="#000" size={150} />;
  }

  if (error) {
    pageDetail = 'Kindly refresh the page or contact the site manager';
  }

  console.log(events);
  useEffect(() => {
    dispatch(GetAllEvents());
  }, [dispatch]);

  const handleDelEvent = (userid, eventid) => {
    dispatch(DeleteEvent(userid, eventid));
  };

  return (
    <div className="Event_details">
      <h2>
        All Events
      </h2>

      <div className="EventeBody">
        {
        events.length
          ? events.map((event) => (
            <div key={event.id} className="EventCard">
              <div className="EventImageBig"><img src={event.image} alt="eventImage" /></div>
              <div className="EventTwoImageCard">
                <div className="EventSmallImg"><img src={event.image1} alt="eventImage" /></div>
                <div className="EventSmallImg">
                  {' '}
                  <img src={event.image2} alt="eventImage" />
                </div>
              </div>
              <article className="EventInfomations">
                <h2>{event.name}</h2>
                <span className="EventDescription">
                  {event.description}
                </span>

                <div className="EventDate">
                  Event Date:
                  {' '}
                  {event.date}
                </div>
                <>
                  {
              getResponse
                ? (
                  <div className="EventButton">
                    <button
                      type="button"
                      className="deleteButton"
                      onClick={() => handleDelEvent(user.id, event.id)}
                    >
                      Delete Event
                    </button>
                    <button type="button">
                      <NavLink to="/AdminDashboard"> Back to AdminDashboard </NavLink>
                    </button>
                  </div>
                )
                : null
            }
                </>
              </article>
            </div>
          )) : null
}
        <div>{pageDetail}</div>
      </div>
    </div>
  );
}
