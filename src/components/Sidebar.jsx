// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/sidebar.css'

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <div className="logo">Your Logo</div>
//       <ul>
//         <li><Link to="/">Dashboard</Link></li>
//         <li><Link to="/events">Events</Link></li>
//         <li><Link to="/notification">Notification</Link></li>
//         <li><Link to="/chat">Chat</Link></li>
//         <li><Link to="/performance">Performance</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const styles = {
    sidebar: {
      width: "200px",
      height: "100vh",
      backgroundColor: "#f5f5f5",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "20px",
    },
    logo: {
      textAlign: "center",
      marginBottom: "30px",
    },
    logoImage: {
      width: "100px", // Adjust the size as needed
      height: "auto",
    },
    logoText: {
      fontSize: "16px",
      fontWeight: "bold",
      margin: "5px 0",
    },
    logoSmall: {
      fontSize: "12px",
      color: "#666",
    },
    ul: {
      listStyleType: "none",
      padding: "0",
      width: "100%",
      textAlign: "center",
    },
    li: {
      margin: "15px 0",
    },
    link: {
      textDecoration: "none",
      fontSize: "18px",
      color: "#000",
      padding: "10px 20px",
      display: "block",
      transition: "background-color 0.3s ease",
    },
    linkHover: {
      backgroundColor: "#e0e0e0",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>
        <img
          src="/path/to/your/logo.png"
          alt="VolunteerVerse Logo"
          style={styles.logoImage}
        />
        <p style={styles.logoText}>VolunteerVerse</p>
        <small style={styles.logoSmall}>Serve. Connect. Impact</small>
      </div>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link} activeStyle={styles.linkHover}>
            Dashboard
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/events" style={styles.link} activeStyle={styles.linkHover}>
            Events
          </Link>
        </li>
        <li style={styles.li}>
          <Link
            to="/notification"
            style={styles.link}
            activeStyle={styles.linkHover}
          >
            Notification
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/chat" style={styles.link} activeStyle={styles.linkHover}>
            Chat
          </Link>
        </li>
        <li style={styles.li}>
          <Link
            to="/performance"
            style={styles.link}
            activeStyle={styles.linkHover}
          >
            Performance
          </Link>
        </li>
        <li style={styles.li}>
          <Link
            to="/profile"
            style={styles.link}
            activeStyle={styles.linkHover}
          >
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
