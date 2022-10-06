import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GetAllEvents, DeleteEvent } from '../Redux/EventApi';
import '../css/style.css';

export default function Events() {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state) => state.EventDataReducer);
  const { users } = useSelector((state) => state.UserDataReducer);

  const getResponse = sessionStorage.getItem('serverResponse');
  const user = { ...users[0] };

  if (loading) {
    <div className="AdminDashboard">Please Wait a moment...</div>;
  }

  if (error) {
    <div className="AdminDashboard">Kindly refresh the page or contact the site manager...</div>;
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
    <div className="AdminDashboard">
      <h2>
        All Events
      </h2>
      {
        events.length
          ? events.map((event) => (
            <div key={event.id}>
              <div>
                <p>
                  Name of event:
                  {' '}
                  {event.name}
                </p>
              </div>
              <div>
                <p>
                  Date of Event:
                  {' '}
                  {event.date}
                </p>
              </div>
              <div>
                <p>
                  Description:
                  {' '}
                  {event.description}
                </p>
              </div>
              <div>{event.image}</div>
              <div>{event.image2}</div>
              <div>{event.image3}</div>
              <div>{event.image4}</div>
              <div>{event.image5}</div>

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
          : <div>No added Event yet </div>
    }
    </div>
  );
}
