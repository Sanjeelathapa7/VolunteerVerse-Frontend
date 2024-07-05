

// import React, { useState } from "react";

// const DonationCard = ({ donation }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const handleToggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="donation-card" onClick={handleToggleDetails}>
//       <style jsx>{`
//         .donation-card {
//           width: calc(33.333% - 20px);
//           background-color: #fff;
//           border: 1px solid #ccc;
//           border-radius: 0px;
//           overflow: hidden;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           margin-bottom: 20px; /* Adjust margin as needed */
//           cursor: pointer;
//         }

//         .donation-card img {
//           width: 100%;
//           height: 150px;
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
//           background-color: #D0CFCF;
//           border-radius: 5px;
//           overflow: hidden;
//           margin-bottom: 10px;
//         }
//           .donation-info {
//   display: flex; /* Use flexbox for layout */
//   justify-content: space-between; /* Distribute items evenly with space in between */
//   margin-bottom: 10px; /* Add margin at the bottom for spacing */
// }


//         .donation-card-progress-bar {
//           height: 100%;
//           background-color: #28a745;
        
//         }
//       `}</style>
//       <img src={donation.donationImageUrl} alt={donation.donationName} />
//       <div className="donation-card-content">
//         <h2 className="donation-card-title">{donation.donationName}</h2>
//         <p className="donation-card-author">By {donation.donor}</p>
//         {showDetails && <p>{donation.donationDetails}</p>}
//         <div className="donation-card-progress">
//           <div
//             className="donation-card-progress-bar"
//             style={{ width: `${donation.percentage}%` }}
//           ></div>
//         </div>
//         <div class="donation-info">
//   <p>Target: Rs {donation.target}</p>
//   <p>{donation.percentage}%</p>
// </div>

//       </div>
//     </div>
//   );
// };

// export default DonationCard;




// src/components/DonationCard.js
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const DonationCard = ({ donation }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/donation/${donation._id}`);
//   };

//   return (
//     <div className="donation-card" onClick={handleClick}>
//       <style jsx>{`
//         .donation-card {
//           width: calc(33.333% - 20px);
//           background-color: #fff;
//           border: 1px solid #ccc;
//           border-radius: 0px;
//           overflow: hidden;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           margin-bottom: 20px;
//           cursor: pointer;
//         }

//         .donation-card img {
//           width: 100%;
//           height: 150px;
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
//           background-color: #d0cfcf;
//           border-radius: 5px;
//           overflow: hidden;
//           margin-bottom: 10px;
//         }

//         .donation-info {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 10px;
//         }

//         .donation-card-progress-bar {
//           height: 100%;
//           background-color: #28a745;
//         }
//       `}</style>
//       <img src={donation.donationImageUrl} alt={donation.donationName} />
//       <div className="donation-card-content">
//         <h2 className="donation-card-title">{donation.donationName}</h2>
//         <p className="donation-card-author">By {donation.donor}</p>
//         <div className="donation-card-progress">
//           <div
//             className="donation-card-progress-bar"
//             style={{ width: `${donation.percentage}%` }}
//           ></div>
//         </div>
//         <div className="donation-info">
//           <p>Target: Rs {donation.target}</p>
//           <p>{donation.percentage}%</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonationCard;


import React from "react";
import { useNavigate } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/donation/${donation._id}`);
  };

  return (
    <div className="donation-card" onClick={handleClick}>
      <style jsx>{`
        .donation-card {
          width: calc(33.333% - 20px);
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 0px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          cursor: pointer;
        }

        .donation-card img {
          width: 100%;
          height: 150px;
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
          background-color: #d0cfcf;
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .donation-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .donation-card-progress-bar {
          height: 100%;
          background-color: #28a745;
        }
      `}</style>
      <img src={donation.donationImageUrl} alt={donation.donationName} />
      <div className="donation-card-content">
        <h2 className="donation-card-title">{donation.donationName}</h2>
        <p className="donation-card-author">By {donation.donor}</p>
        <div className="donation-card-progress">
          <div
            className="donation-card-progress-bar"
            style={{ width: `${donation.percentage}%` }}
          ></div>
        </div>
        <div className="donation-info">
          <p>Target: Rs {donation.target}</p>
          <p>{donation.percentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
