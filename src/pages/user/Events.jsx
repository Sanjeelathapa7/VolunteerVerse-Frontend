import moment from "moment";

import React, { useState, useEffect } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import EventModal from "./EventModal";

const localizer = momentLocalizer(moment);

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate("PREV");
  };

  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };

  const goToToday = () => {
    toolbar.onNavigate("TODAY");
  };

  const setView = (view) => {
    toolbar.onView(view);
  };

  return (
    <div className="rbc-toolbar">
      <div className="rbc-btn-group">
        <button onClick={goToBack}>Back</button>

        <button onClick={goToToday}>Today</button>

        <button onClick={goToNext}>Next</button>
      </div>

      <span className="rbc-toolbar-label">{toolbar.label}</span>

      <div className="rbc-btn-group">
        <button onClick={() => setView("month")}>Month</button>

        <button onClick={() => setView("week")}>Week</button>

        <button onClick={() => setView("day")}>Day</button>
      </div>
    </div>
  );
};

const CustomHeader = ({ label }) => {
  return <div className="custom-header">{label}</div>;
};

const Event = () => {
  const [events, setEvents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [view, setView] = useState("month");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null);

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

        const formattedEvents = eventsData.events.map((event) => ({
          start: new Date(event.eventTime),

          end: new Date(event.eventTime),

          title: event.eventName,

          ...event,
        }));

        setEvents(formattedEvents);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);

    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);

    setSelectedEvent(null);
  };

  const handleSelectEvent = (event) => {
    openModal(event);
  };

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>Error fetching events: {error.message}</p>;
  }

  return (
    <div className="dashboard">
      <style jsx>{`
        body {
          font-family: "Inder", sans-serif;

          background-color: #f0f2f5;
        }

        .dashboard {
          display: flex;

          height: 100vh;

          overflow: hidden;
        }

        nav {
          width: 220px;

          background-color: #fff;

          padding: 20px;

          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

          display: flex;

          flex-direction: column;

          align-items: center;
        }

        nav img.logo {
          width: 80%;

          margin-bottom: 20px;
        }

        nav ul {
          list-style: none;

          padding: 0;

          width: 100%;
        }

        nav ul li {
          margin: 15px 0;
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
          background-color: rgba(26, 76, 110, 0.21);

          color: #000;
        }

        main {
          flex-grow: 1;

          padding: 20px;

          overflow: hidden;
        }

        .calendar-container {
          padding: 20px;

          background-color: #fff;

          border-radius: 10px;

          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

          height: calc(100vh - 40px); /* Full height minus padding */

          display: flex;

          flex-direction: column;
        }

        .rbc-calendar {
          flex-grow: 1;

          display: flex;

          flex-direction: column;
        }

        .rbc-toolbar {
          display: flex;

          flex-wrap: wrap;

          gap: 10px;

          justify-content: space-between;

          margin-bottom: 20px;
        }

        .rbc-toolbar button {
          background-color: #617CB5;

          border: none;

          color: white;

          padding: 10px 15px;

          border-radius: 5px;

          cursor: pointer;

          transition: background-color 0.3s, transform 0.3s;
        }

        .rbc-toolbar button:hover {
          background-color: #759DF0;

          transform: scale(1.05);
        }

        .rbc-toolbar .rbc-toolbar-label {
          font-weight: bold;
        }

        .rbc-toolbar .rbc-btn-group {
          display: flex;

          gap: 10px;
        }

        .rbc-event {
          background-color: #1A4C6E;

          border: none;

          border-radius: 3px;

          padding: 2px 5px;

          color: #fff;

          font-size: 12px;
        }

        .rbc-month-view,
        .rbc-time-view,
        .rbc-agenda-view {
          flex-grow: 1;
        }

        .custom-header {
          font-weight: bold;

          font-size: 14px;

          color: #617CB5;

          text-align: center;

          margin: 5px 0;
        }
      `}</style>

      <nav>
        <img
          src="/assets/images/logo.png"
          alt="VolunteerVerse Logo"
          className="logo"
        />

        <ul>
          <li style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'15px' }}>
            <a href="user/dashboard">Dashboard</a>
          </li>

          <li className="active" style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'15px' }}>
            <a href="#">Calendar</a>
          </li>

          <li style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'15px' }}>
            <a href="/eventDetails">Events</a>
          </li>

          <li style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'15px' }}>
            <a href="/chat">Chat</a>
          </li>

          <li style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'15px' }}>
            <a href="/perfomance">Performance</a>
          </li>

          <li style={{ fontFamily: "Inknut Antiqua, serif", fontSize:'15px' }}>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </nav>

      <main>
        <div className="calendar-container">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView={view}
            views={["month", "week", "day"]}
            onView={(newView) => setView(newView)}
            onSelectEvent={handleSelectEvent}
            components={{
              toolbar: CustomToolbar,

              day: { header: CustomHeader },

              week: { header: CustomHeader },

              month: { header: CustomHeader },
            }}
            style={{ height: "100%" }}
          />
        </div>

        {selectedEvent && (
          <EventModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            event={selectedEvent}
          />
        )}
      </main>
    </div>
  );
};

export default Event;
