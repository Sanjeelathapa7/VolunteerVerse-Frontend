import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleEventApi } from '../../apis/Apis'; // Adjust import as per your API structure

const OppDetails = () => {
  const [event, setEvent] = useState(null); // Initialize with null
  const { id } = useParams(); // Get the organization ID from URL params

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await getSingleEventApi(id); // Adjust API function to accept ID parameter
        setEvent(res.data.event); // Assuming API returns a single event object within an 'event' key
      } catch (err) {
        console.error("Error fetching event:", err);
        setEvent(null); // Set event to null on error
      }
    };

    fetchEvents();
  }, [id]); // Fetch data whenever `id` changes

  if (!event) {
    return <p>Event not found</p>; // Display a message if event is null or undefined
  }

  return (
    <div className="event-details-page">
      <style jsx>{`
        .event-details-page {
          display: flex;
        }

        nav {
          width: 290px;
          height: 100vh; /* Ensure the sidebar covers the full height */
          background-color: #ffffff; /* White sidebar */
          padding: 35px;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(0, 0, 0.1, 0.2); /* Outline for the sidebar */
        }

        nav img.logo {
          width: 95%;
          margin-bottom: 0px;
        }

        nav ul {
          list-style: none;
          padding: 0;
          width: 100%;
        }

        nav ul li {
          margin: 10px 0;
        }

        nav ul li a {
          text-decoration: none;
          color: #333;
          display: block;
          padding: 10px 20px;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        nav ul li a:hover,
        nav ul li.active a {
          background-color: rgba(26, 76, 110, 0.21); /* Color with 21% opacity */
          color: #333; /* Use a dark color for the text on hover/active */
        }

        .event-details {
          flex: 1;
          padding: 35px;
          overflow-y: auto;
        }

        .event-header {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .event-image {
          width: 100%;
          max-width: 600px;
          height: auto;
          border-radius: 8px;
        }

        .event-title {
          font-size: 2em;
          margin: 20px 0;
        }

        .event-info {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 20px;
        }

        .event-info div {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #f9f9f9;
        }

        .event-details-text {
          line-height: 1.6;
        }
      `}</style>

      <nav>
        <img src="/assets/images/logo.png" alt="VolunteerVerse Logo" className="logo" />
        <ul>
          <li className="active">
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="/event">Events</a>
          </li>
          <li>
            <a href="#">Notification</a>
          </li>
          <li>
            <a href="#">Chat</a>
          </li>
          <li>
            <a href="#">Performance</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
      </nav>

      <div className="event-details">
        <div className="event-header">
          <img src={event.eventImageUrl} alt="Event" className="event-image" />
          <h1 className="event-title">{event.eventName}</h1>
        </div>
        <div className="event-info">
          <div><strong>Organizer:</strong> {event.organizer}</div>
          <div><strong>Volunteers:</strong> {event.volunteers}</div>
          <div><strong>Location:</strong> {event.location}</div>
          <div><strong>Time:</strong> {event.time}</div>
        </div>
        <p className="event-details-text">{event.eventDetails}</p>
      </div>
    </div>
  );
};

export default OppDetails;
