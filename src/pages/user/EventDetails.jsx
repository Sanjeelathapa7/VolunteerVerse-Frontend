

import React, { useEffect, useState } from "react";
import axios from "axios";

import { getAllEventsApi } from "../../apis/Apis";
import EventCard from "../../components/EventCard";

const EventDetails = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEventsApi()
      .then((res) => {
        setEvents(res.data.events);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });

    
  }, []);

  return (
    <div className="dashboard">
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
        }

        .dashboard {
          display: flex;
          height: 100vh;
        }

        nav {
          width: 240px;
          height: 100vh;
          background-color: #ffffff;
          padding: 23px;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(0, 0, 0.1, 0.2);
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
          background-color: rgba(26, 76, 110, 0.21);
          color: #333;
        }

        main {
          flex-grow: 1;
          padding: 40px;
          overflow-y: auto;
        }

     


       
        .event-section {
          margin-bottom: 20px;
        }

        .event-section h2 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .event-list,
       {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .event-card {
          width: calc(33.333% - 20px);
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }

        .event-card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .event-card-content {
          padding: 15px;
        }

        .event-card-title {
          font-size: 18px;
          margin-bottom: 10px;
        }

     

        .
      `}</style>
      <nav>
        <img src="/assets/images/logo.png" alt="VolunteerVerse Logo" className="logo" />
        <ul>
          <li >
            <a href="/user/dashboard">Dashboard</a>
          </li>
          <li >
            <a href="/event">Calendar</a>
          </li>
          <li className="active">
            <a href="/oppDetails">Events</a>
          </li>
          <li>
            <a href="/chat">Chat</a>
          </li>
          <li>
            <a href="/performance">Performance</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </nav>
      <main>
        <div className="event-section">
          <h2>Event</h2>
          <div className="event-list">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default EventDetails;
