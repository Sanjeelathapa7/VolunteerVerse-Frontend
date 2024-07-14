// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import DonationCard from "../../components/DonationCard";
// import OrganizationCard from "../../components/OrganizationCard";
// import { getAllDonationsApi, getAllOrganizationsApi } from "../../apis/Apis";

// const Dashboard = () => {
//   const [donations, setDonations] = useState([]);
//   const [organizations, setOrganizations] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   const user = JSON.parse(localStorage.getItem("user"));
//   console.log(user);

//   useEffect(() => {
//     getAllDonationsApi()
//       .then((res) => {
//         setDonations(res.data.donations);
//       })
//       .catch((err) => {
//         console.error("Error fetching donations:", err);
//       });
//     const filteredOrganizations = organizations.filter((organization) =>
//       organization.organizationName
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase())
//     );
//     getAllOrganizationsApi()
//       .then((res) => {
//         setOrganizations(res.data.organizations);
//       })
//       .catch((err) => {
//         console.error("Error fetching organizations:", err);
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
//           height: 100vh;
//         }

//         nav {
//           width: 340px;
//           height: 100vh;
//           background-color: #ffffff;
//           padding: 23px;
//           box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           border: 1px solid rgba(0, 0, 0.1, 0.2);
//         }

//         nav img.logo {
//           width: 95%;
//           margin-bottom: 0px;
//         }

//         nav ul {
//           list-style: none;
//           padding: 0;
//           width: 100%;
//         }

//         nav ul li {
//           margin: 10px 0;
//         }

//         nav ul li a {
//           text-decoration: none;
//           color: #333;
//           display: block;
//           padding: 10px 20px;
//           border-radius: 5px;
//           transition: background-color 0.3s;
//         }

//         nav ul li a:hover,
//         nav ul li.active a {
//           background-color: rgba(26, 76, 110, 0.21);
//           color: #333;
//         }

//         main {
//           flex-grow: 1;
//           padding: 50px;
//           overflow-y: auto;
//         }

//         main h1 {
//           font-size: 24px;
//           margin-bottom: 10px;
//         }

//         main p {
//           margin-bottom: 20px;
//         }

//         .search-bar {
//           width: 60%;
//           padding: 10px;
//           margin: 0 auto 30px calc(40% - 30%);
//           border: 1px solid #ccc;
//           border-radius: 5px;
//           display: block;
//         }

//         .category {
//           display: flex;
//           gap: 10px;
//           margin-bottom: 30px;
//         }

//         .category button {
//           padding: 10px 20px;
//           border: none;
//           background-color: #1a4c6e;
//           color: #fff;
//           border-radius: 5px;
//           cursor: pointer;
//           transition: background-color 0.3s;
//         }

//         .category button:hover {
//           background-color: #0056b3;
//         }

//         .donation-section {
//           margin-bottom: 20px;
//         }

//         .donation-section h2 {
//           font-size: 20px;
//           margin-bottom: 10px;
//         }

//         .donation-list,
//         .organization-list {
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
//           margin-bottom: 20px;
//         }

//         .donation-card img {
//           width: 100%;
//           height: 150px;
//           object-fit: cover;
//         }

//         .donation-card-content {
//           padding: 15px;
//           font-family: "Inknut Antiqua";
//           font-size: 12px;
//         }

//         .donation-card-title {
//           font-size: 10px;
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
//         <img
//           src="/assets/images/logo.png"
//           alt="VolunteerVerse Logo"
//           className="logo"
//         />
//         <ul>
//           <li className="active">
//             <a
//               href="#"
//               style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "15px" }}
//             >
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a
//               href="/event"
//               style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "15px" }}
//             >
//               Calendar
//             </a>
//           </li>
//           <li>
//             <a
//               href="/eventDetails"
//               style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "15px" }}
//             >
//               Events
//             </a>
//           </li>
//           <li>
//             <a
//               href="/chat"
//               style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "15px" }}
//             >
//               Chat
//             </a>
//           </li>
//           <li>
//             <a
//               href="/performance"
//               style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "15px" }}
//             >
//               Performance
//             </a>
//           </li>
//           <li>
//             <a
//               href="/profile"
//               style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "15px" }}
//             >
//               Profile
//             </a>
//           </li>
//         </ul>
//       </nav>
//       <main>
//         <h1 style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "18px" }}>
//           Welcome, {user && user.firstName ? user.firstName.split(" ")[0] : ""}!
//         </h1>
//         <p
//           style={{
//             fontFamily: "Inder, serif",
//             fontSize: "15px",
//             marginLeft: "25px",
//           }}
//         >
//           {" "}
//           Your move makes someone's life better!
//         </p>
//         <input
//           type="text"
//           style={{
//             fontFamily: "Inknut Antiqua, serif",
//             fontSize: "13px",
//           }}
//           placeholder="Search organizations"
//           className="search-bar"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <div className="donation-section">
//           <h2 style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "16px" }}>
//             Donations
//           </h2>
//           <div className="donation-list">
//             {donations.map((donation) => (
//               <DonationCard key={donation._id} donation={donation} />
//             ))}
//           </div>
//         </div>
//         <div className="organization-section">
//           <h1 style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "16px" }}>
//             Featured Organizations
//           </h1>
//           <div className="organization-list">
//             {organizations.map((organization) => (
//               <OrganizationCard
//                 key={organization._id}
//                 organization={organization}
//               />
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import DonationCard from "../../components/DonationCard";
import OrganizationCard from "../../components/OrganizationCard";
import { getAllDonationsApi, getAllOrganizationsApi } from "../../apis/Apis";

const Dashboard = () => {
  const [donations, setDonations] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  useEffect(() => {
    getAllDonationsApi()
      .then((res) => {
        setDonations(res.data.donations);
      })
      .catch((err) => {
        console.error("Error fetching donations:", err);
      });

    getAllOrganizationsApi()
      .then((res) => {
        setOrganizations(res.data.organizations);
      })
      .catch((err) => {
        console.error("Error fetching organizations:", err);
      });
  }, []);

  const filteredDonations = donations.filter((donation) =>
    donation.donationName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredOrganizations = organizations.filter((organization) =>
    organization.organizationName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          width: 250px;
          height: 100vh;
          background-color: #ffffff;
          padding: 23px;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(0, 0, 0.1, 0.2);
          flex-shrink: 0; /* Ensure the sidebar does not shrink */
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
          margin: 0 auto 30px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
          display: block;
        }

        .category {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
        }

        .category button {
          padding: 10px 20px;
          border: none;
          background-color: #1a4c6e;
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

        .donation-list,
        .organization-list {
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
          font-family: "Inknut Antiqua";
          font-size: 12px;
        }

        .donation-card-title {
          font-size: 10px;
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
        <img
          src="/assets/images/logo.png"
          alt="VolunteerVerse Logo"
          className="logo"
        />
        <ul>
          <li className="active">
            <a
              href="#"
              style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "15px" }}
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/event"
              style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "15px" }}
            >
              Calendar
            </a>
          </li>
          <li>
            <a
              href="/eventDetails"
              style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "15px" }}
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="/chat"
              style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "15px" }}
            >
              Chat
            </a>
          </li>
          <li>
            <a
              href="/performance"
              style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "15px" }}
            >
              Performance
            </a>
          </li>
          <li>
            <a
              href="/profile"
              style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "15px" }}
            >
              Profile
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <h1 style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "18px" }}>
          Welcome, {user && user.firstName ? user.firstName.split(" ")[0] : ""}!
        </h1>
        <p
          style={{
            fontFamily: "Inder, serif",
            fontSize: "15px",
            marginLeft: "25px",
          }}
        >
          Your move makes someone's life better!
        </p>
        <input
          type="text"
          style={{
            fontFamily: "Inknut Antiqua, serif",
            fontSize: "13px",
          }}
          placeholder="Search organizations and donations"
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="donation-section">
          <h2 style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "16px" }}>
            Donations
          </h2>
          <div className="donation-list">
            {filteredDonations.map((donation) => (
              <DonationCard key={donation._id} donation={donation} />
            ))}
          </div>
        </div>
        <div className="organization-section">
          <h1 style={{ fontFamily: "Inknut Antiqua, serif", fontSize: "16px" }}>
            Featured Organizations
          </h1>
          <div className="organization-list">
            {filteredOrganizations.map((organization) => (
              <OrganizationCard
                key={organization._id}
                organization={organization}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

