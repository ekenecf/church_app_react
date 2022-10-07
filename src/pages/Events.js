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
    console.log('Fired');
    dispatch(DeleteEvent(userid, eventid));
  };

  return (
    <div className="Event_details">
      <h2>
        All Events
      </h2>
      {
        events.length
          ? events.map((event) => (
            <div className="event_info" key={event.id}>
              <div>
                <p>
                  Name of event:
                  {' '}
                  {event.name}
                </p>

                <p>
                  Date of Event:
                  {' '}
                  {event.date}
                </p>

                <p>
                  Description:
                  {' '}
                  {event.description}
                </p>
              </div>
              <div className="event_image">
                <img src={event.image} alt="eventImage" />
                {' '}
                <img src={event.image2} alt="eventImage" />
                {' '}
                <img src={event.image3} alt="eventImage" />
                {' '}
                <img src={event.image4} alt="eventImage" />
                <img src={event.image5} alt="eventImage" />
                {' '}
              </div>
              {
              getResponse
                ? (
                  <>
                    <button
                      type="button"
                      onClick={() => handleDelEvent(user.id, event.id)}
                    >
                      Delete Event
                    </button>
                    <button type="button">
                      <NavLink to="/AdminDashboard"> Back to AdminDashboard </NavLink>
                    </button>
                  </>
                )
                : null
            }
              <button type="button">
                <NavLink to="/"> Back to Home Page</NavLink>
              </button>

            </div>
          ))
          : null
    }
      <div>{pageDetail}</div>
    </div>
  );
}
