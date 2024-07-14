import React from "react";
import EventCard from "./EventCard";

const EventListt = ({ events }) => {
  return (
    <div className="event-section">
      <h2 style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "15px" }}>
        Event
      </h2>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default DonationList;
