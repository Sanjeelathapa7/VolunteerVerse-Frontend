import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleEventApi } from "../../apis/Apis"; // Adjust import as per your API structure

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
          width: 260px;
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
          background-color: rgba(
            26,
            76,
            110,
            0.21
          ); /* Color with 21% opacity */
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
        }

        .event-image {
          width: 70%;
          max-width: 450px;
          height: auto;
          border-radius: 8px;
        }

        .event-title {
          font-size: 1.5em;
          margin: 10px 0;
        }

        .event-info {
  display: flex; /* Ensures the children divs are displayed in a row */
  flex-wrap: wrap; /* Allows items to wrap onto multiple lines */
  gap: 10px; /* Sets the gap between the child divs */
  justify-content: center; /* Centers the child divs horizontally */
  margin-bottom: 20px; /* Adds bottom margin for spacing */
  border: none; /* Removes any border */
  outline: none; /* Removes any outline */
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
        <img
          src="/assets/images/logo.png"
          alt="VolunteerVerse Logo"
          className="logo"
        />
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="/event">Calendar</a>
          </li>
          <li className="active">
            <a href="#">Events</a>
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
          <div>
            <strong>Organized by:</strong> {event.organizer}
          </div>
          <div>
            <strong>Volunteers:</strong> {event.volunteer}
          </div>
          <div>
            <strong>Location:</strong> {event.location}
          </div>
          <div>
            <strong>Time:</strong> {event.eventTime}
          </div>
        </div>
        <p className="event-details-text">{event.eventDetails}</p>
        <iframe
 src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7899.604785453132!2d85.31691638562364!3d27.690137259969394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1720806174882!5m2!1sen!2snp"        width="1000"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
};

export default OppDetails;
