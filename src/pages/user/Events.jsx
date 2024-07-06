

import moment from "moment";
import React, { useState } from "react";
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
  const [events] = useState([
    {
      start: new Date("2024-07-10"),
      end: new Date("2024-07-10"),
      title: "Event 1",
    },
    {
      start: new Date("2024-07-15"),
      end: new Date("2024-07-15"),
      title: "Event 2",
    },
    {
      start: new Date("2024-07-20"),
      end: new Date("2024-07-20"),
      title: "Event 3",
    },
  ]);

  const [view, setView] = useState("month");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSelectEvent = () => {
    openModal();
  };

  return (
    <div className="dashboard">
      <style jsx>{`
        body {
          font-family: "Roboto", sans-serif;
          background-color: #f0f2f5;
        }

        .dashboard {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }

        nav {
          width: 250px;
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
          background-color: #007bff;
          color: #fff;
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
          background-color: #007bff;
          border: none;
          color: white;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
        }

        .rbc-toolbar button:hover {
          background-color: #0056b3;
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
          background-color: #ff7f50;
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
          color: #007bff;
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
          <li>
            <a href="user/dashboard">Dashboard</a>
          </li>
          <li className="active">
            <a href="#">Events</a>
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
        <EventModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      </main>
    </div>
  );
};

export default Event;

