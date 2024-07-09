


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import DonationCard from "../../components/DonationCard";
// import { getAllDonationsApi } from "../../apis/Apis";

// const Dashboard = () => {
//   const [donations, setDonations] = useState([]);

//   useEffect(() => {
//     getAllDonationsApi()
//       .then((res) => {
//         setDonations(res.data.donations);
//       })
//       .catch((err) => {
//         console.error("Error fetching donations:", err);
//       });
//   }, []);

//   return (
//     <div className="dashboard">
//       <style jsx>{`
//         body {
//           font-family: Arial, sans-serif;
//         }

//         .dashboard {
//           display: flex;
//         }

//         nav {
//           width: 250px;
//           background-color: #f0f0f0;
//           padding: 60px;
//           box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
//         }

//         nav img.logo {
//           width: 100%;
//           margin-bottom: 20px;
//         }

//         nav ul {
//           list-style: none;
//           padding: 0;
//         }

//         nav ul li {
//           margin: 15px 0;
//         }

//         nav ul li a {
//           text-decoration: none;
//           color: #333;
//         }

//         nav ul li.active a {
//           font-weight: bold;
//           color: #007bff;
//         }

//         main {
//           flex-grow: 4;
//           padding: 60px;
//         }

//         main h1 {
//           font-size: 24px;
//         }

//         main p {
//           margin-bottom: 20px;
//         }

//         .search-bar {
//           width: 100%;
//           padding: 10px;
//           margin-bottom: 20px;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//         }

//         .category {
//           display: flex;
//           gap: 10px;
//           margin-bottom: 20px;
//         }

//         .category button {
//           padding: 10px 20px;
//           border: none;
//           background-color: #007bff;
//           color: #fff;
//           border-radius: 5px;
//           cursor: pointer;
//         }

//         .category button:hover {
//           background-color: #0056b3;
//         }

//         .donation-list {
//           display: flex;
//           gap: 20px;
//           flex-wrap: wrap;
//         }

//         .donation-card {
//           width: calc(33.333% - 20px);
//           background-color: #fff;
//           border: 1px solid #ccc;
//           border-radius: 10px;
//           overflow: hidden;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//         }

//         .donation-card img {
//           width: 100%;
//           height: 150px;
//           object-fit: cover;
//         }

//         .donation-card-content {
//           padding: 15px;
//         }

//         .donation-card-title {
//           font-size: 18px;
//           margin-bottom: 10px;
//         }

//         .donation-card-author {
//           color: #777;
//           margin-bottom: 10px;
//         }

//         .donation-card-progress {
//           height: 10px;
//           background-color: #f0f0f0;
//           border-radius: 5px;
//           overflow: hidden;
//           margin-bottom: 10px;
//         }

//         .donation-card-progress-bar {
//           height: 100%;
//           background-color: #28a745;
//         }
//       `}</style>
//       <nav>
//         <img src="/assets/images/logo.png" alt="VolunteerVerse Logo" className="logo" />
//         <ul>
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
//       <main>
//         <h1>Hi, User</h1>
//         <p>Your move makes someone's life better!</p>
//         <input type="text" placeholder="Search organizations" className="search-bar" />
//         <div className="category">
//           <button>Clothes</button>
//           <button>Education</button>
//           <button>Shelter</button>
//           <button>Humanity</button>
//               </div>
//               <h1>Donation</h1>
//         <div className="donation-list">
//           {donations.map((donation) => (
//             <DonationCard key={donation._id} donation={donation} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import axios from "axios";
import DonationCard from "../../components/DonationCard";
import { getAllDonationsApi } from "../../apis/Apis";

const Dashboard = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    getAllDonationsApi()
      .then((res) => {
        setDonations(res.data.donations);
      })
      .catch((err) => {
        console.error("Error fetching donations:", err);
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
      height:100vh;
    }

    nav {
      width: 290px;
      height: 100vh; /* Ensure the sidebar covers the full height */
      background-color: #ffffff; /* White sidebar */
      padding: 23px;
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

    main {
      flex-grow: 1;
      padding: 50px;
      overflow-y: auto;
    }

    main h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    main p {
      margin-bottom: 20px;
    }

    .search-bar {
      width: 60%;
      padding: 10px;
      margin: 0 auto 30px calc(40% - 30%); /* Center horizontally and move slightly to the left */
      border: 1px solid #ccc;
      border-radius: 5px;
      display: block; /* Ensure it behaves as a block element */
    }

    .category {
      display: flex;
      gap: 10px;
      margin-bottom: 30px;
    }

    .category button {
      padding: 10px 20px;
      border: none;
      background-color: #1A4C6E;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .category button:hover {
      background-color: #0056b3;
    }

    .donation-section {
      margin-bottom: 20px;
    }

    .donation-section h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .donation-list {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .donation-card {
      width: calc(33.333% - 20px);
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }

    .donation-card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }

    .donation-card-content {
      padding: 15px;
    }

    .donation-card-title {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .donation-card-author {
      color: #777;
      margin-bottom: 10px;
    }

    .donation-card-progress {
      height: 10px;
      background-color: #f0f0f0;
      border-radius: 5px;
      overflow: hidden;
      margin-bottom: 10px;
    }

    .donation-card-progress-bar {
      height: 100%;
      background-color: #28a745;
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
            <a href="/chat">Chat</a>
          </li>
          <li>
            <a href="#">Performance</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Hi, User</h1>
        <p>Your move makes someone's life better!</p>
        <input type="text" placeholder="Search organizations" className="search-bar" />
        {/* <h1>Category</h1>
        <div className="category">
          <button>Clothes</button>
          <button>Education</button>
          <button>Shelter</button>
          <button>Humanity</button>
        </div> */}
        <div className="donation-section">
          <h2>Donation</h2>
          <div className="donation-list">
            {donations.map((donation) => (
              <DonationCard key={donation._id} donation={donation} />
            ))}
          </div>
          <h1>Events</h1>
          

        </div>
        
      </main>
    </div>
  );
};

export default Dashboard;
