import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/oppDetails/${event._id}`);
  };

  return (
    <div className="event-card" onClick={handleClick}>
      <style jsx>{`
        .event-card {
          width: calc(33.333% - 20px);
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          cursor: pointer;
        }
          .event-list {
  display: flex;
  flex-wrap: wrap;
  gap: 17px;
}

        .event-card img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          display: block; /* Ensure the image is treated as a block element */
        }

        .event-card-content {
          padding: 10px;
        }

        .event-card-title {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .event-details {
          color: #777;
          margin-bottom: 20px;
        }

        .event-organizer,
        .event-location {
          color: #555;
          margin-bottom: 5px;
        }

        
      `}</style>

      <img src={event.eventImageUrl} alt={event.eventName} />
      <div className="event-card-content">
        <h2 className="event-card-title">{event.eventName}</h2>
        <p className="event-organizer">Organized by: {event.organizer}</p>
        <p className="event-location">Location: {event.location}</p>
      </div>
    </div>
  );
};

export default EventCard;
