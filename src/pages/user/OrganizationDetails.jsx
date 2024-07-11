
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// import { getSingleOrganizationApi } from '../../apis/Apis'; // Adjust import as per your API structure

// const OrganizationDetails = () => {
//   const [organization, setOrganization] = useState(null); // Initialize with null
//   const { id } = useParams(); // Get the donation ID from URL params


//   useEffect(() => {
//     const fetchOrganizations = async () => {
//       try {
//         const res = await getSingleOrganizationApi(id); // Adjust API function to accept ID parameter
//         setOrganization(res.data.organization); // Assuming API returns a single donation object within a 'donation' key
//       } catch (err) {
//         console.error("Error fetching organization:", err);
//         setOrganization(null); // Set donation to null on error
//       }
//     };

//     fetchOrganizations();
//   }, [id]); // Fetch data whenever `id` changes

//   if (!organization) {
//     return <p>Organization not found</p>; // Display a message if donation is null or undefined
//   }

//   return (
//     <div className="donation-details-page">
//           <style jsx>{`
//        nav {
//       width: 290px;
//       height: 100vh; /* Ensure the sidebar covers the full height */
//       background-color: #ffffff; /* White sidebar */
//       padding: 23px;
//       box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       border: 1px solid rgba(0, 0, 0.1, 0.2); /* Outline for the sidebar */
//     }

//     nav img.logo {
//       width: 95%;
//       margin-bottom: 0px;
//     }

//     nav ul {
//       list-style: none;
//       padding: 0;
//       width: 100%;
//     }

//     nav ul li {
//       margin: 10px 0;
//     }

//     nav ul li a {
//       text-decoration: none;
//       color: #333;
//       display: block;
//       padding: 10px 20px;
//       border-radius: 5px;
//       transition: background-color 0.3s;
//     }

//     nav ul li a:hover,
//     nav ul li.active a {
//       background-color: rgba(26, 76, 110, 0.21); /* Color with 21% opacity */
//       color: #333; /* Use a dark color for the text on hover/active */
//     }

    
//       `}</style>
//           <nav>
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
     
//     </div>
//   );
// };

// export default OrganizationDetails;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getSingleOrganizationApi } from '../../apis/Apis'; // Adjust import as per your API structure

const OrganizationDetails = () => {
  const [organization, setOrganization] = useState(null); // Initialize with null
  const { id } = useParams(); // Get the organization ID from URL params

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const res = await getSingleOrganizationApi(id); // Adjust API function to accept ID parameter
        setOrganization(res.data.organization); // Assuming API returns a single organization object within an 'organization' key
      } catch (err) {
        console.error("Error fetching organization:", err);
        setOrganization(null); // Set organization to null on error
      }
    };

    fetchOrganization();
  }, [id]); // Fetch data whenever `id` changes

  if (!organization) {
    return <p>Organization not found</p>; // Display a message if organization is null or undefined
  }

  return (
    <div className="organization-details-page">
      <style jsx>{`
        .organization-details-page {
          display: flex;
        }

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
          background-color: rgba(26, 76, 110, 0.21); /* Color with 21% opacity */
          color: #333; /* Use a dark color for the text on hover/active */
        }

        .organization-content {
          flex-grow: 1;
          padding: 90px;
        }

        .organization-image {
          width: 100%;
          height: auto;
          max-width: 300px;
          margin-bottom: 20px;
        }

        .organization-name {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .organization-description {
          font-size: 16px;
          color: #555;
          text-align: justify;
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

          <div className="organization-content">
          {/* <h1 className="organization-name">{organization.organizationName}</h1> */}

        <img
          src={organization.organizationImageUrl}
          alt={organization.organizationName}
          className="organization-image"
        />
        <p className="organization-description">{organization.organizationDetails}</p>
      </div>
    </div>
  );
};

export default OrganizationDetails;
