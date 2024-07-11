// EventList.js
import React, { useState, useEffect } from "react";

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(
          "http://localhost:5000/api/event/get_events"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const eventsData = await response.json();
        setEvents(eventsData.events);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>Error fetching events: {error.message}</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Event List</h1>
      <div className="list-group">
        {events.map((event) => (
          <div key={event._id} className="list-group-item mb-3">
            <h5 className="mb-1">{event.eventName}</h5>
            <p className="mb-1">
              <strong>Organizer:</strong> {event.organizer}
            </p>
            <p className="mb-1">
              <strong>Volunteers Needed:</strong> {event.volunteer}
            </p>
            <p className="mb-1">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="mb-1">
              <strong>Date:</strong>{" "}
              {new Date(event.eventTime).toLocaleDateString()}
            </p>
            <p className="mb-1">{event.eventDetails}</p>
            <img
              src={event.eventImageUrl}
              alt={event.eventName}
              className="img-fluid rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
