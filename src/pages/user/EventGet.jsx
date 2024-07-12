// import React, { useState, useEffect } from "react";

// function EventList() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchEvents() {
//       try {
//         const response = await fetch(
//           "http://localhost:5000/api/event/get_events"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const eventsData = await response.json();
//         setEvents(eventsData.events);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchEvents();
//   }, []);

//   if (loading) {
//     return <p>Loading events...</p>;
//   }

//   if (error) {
//     return <p>Error fetching events: {error.message}</p>;
//   }

//   return (
//     <div style={styles.container}>
//       <nav style={styles.nav}>
//         <img
//           src="/assets/images/logo.png"
//           alt="VolunteerVerse Logo"
//           className="logo"
//           style={styles.logo}
//         />
//         <ul style={styles.ul}>
//           <li className="active">
//             <a href="#">Dashboard</a>
//           </li>
//           <li>
//             <a href="/event">Events</a>
//           </li>
//           <li>
//             <a href="#">Notification</a>
//           </li>
//           <li>
//             <a href="#">Chat</a>
//           </li>
//           <li>
//             <a href="#">Performance</a>
//           </li>
//           <li>
//             <a href="#">Profile</a>
//           </li>
//         </ul>
//       </nav>
//       <div className="container mt-5">
//         <h1 className="mb-4">Event List</h1>
//         <div className="list-group">
//           {events.map((event) => (
//             <div key={event._id} className="list-group-item mb-3">
//               <h5 className="mb-1">{event.eventName}</h5>
//               <p className="mb-1">
//                 <strong>Organizer:</strong> {event.organizer}
//               </p>
//               <p className="mb-1">
//                 <strong>Volunteers Needed:</strong> {event.volunteer}
//               </p>
//               <p className="mb-1">
//                 <strong>Location:</strong> {event.location}
//               </p>
//               <p className="mb-1">
//                 <strong>Date:</strong>{" "}
//                 {new Date(event.eventTime).toLocaleDateString()}
//               </p>
//               <p className="mb-1">{event.eventDetails}</p>
//               <img
//                 src={event.eventImageUrl}
//                 alt={event.eventName}
//                 className="img-fluid rounded"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//   },
//   nav: {
//     width: "340px",
//     height: "100vh",
//     backgroundColor: "#ffffff",
//     padding: "23px",
//     boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     border: "1px solid rgba(0, 0, 0.1, 0.2)",
//   },
//   logo: {
//     width: "95%",
//     marginBottom: "0px",
//   },
//   ul: {
//     listStyle: "none",
//     padding: "0",
//     width: "100%",
//   },
// };

// export default EventList;

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
    <div style={styles.container}>
      <style jsx>{`
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
          background-color: rgba(
            26,
            76,
            110,
            0.21
          ); /* Color with 21% opacity */
          color: #333; /* Use a dark color for the text on hover/active */
        }
      `}</style>
      <nav>
        <ul style={styles.ul}>
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
      <div className="container mt-5" style={styles.eventContainer}>
        <h1 className="mb-4">Event List</h1>
        <div className="list-group">
          {events.map((event) => (
            <div
              key={event._id}
              className="list-group-item mb-3"
              style={styles.eventCard}
            >
              <img
                src={event.eventImageUrl}
                alt={event.eventName}
                className="img-fluid rounded"
                style={styles.eventImage}
              />
              <div style={styles.eventDetails}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
  },

  eventContainer: {
    marginLeft: "20px",
    flexGrow: 1,
  },
  eventCard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  eventImage: {
    width: "100%",
    borderRadius: "8px",
  },
  eventDetails: {
    marginTop: "16px",
  },
};

export default EventList;
