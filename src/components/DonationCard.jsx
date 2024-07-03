// import React from 'react';

// const DonationCard = ({ donation }) => {
//     return (
//         <div className="donation-card">
//             <img src={donation.donationImageUrl} alt={donation.donationName} />
//             <h2>{donation.donationName}</h2>
//             <p>By {donation.donor}</p>
//             <p>{donation.donationDetails}</p>
//             <div className="progress">
//                 <div className="progress-bar" style={{ width: `${donation.percentage}%` }}></div>
//             </div>
//             <p>Target: Rs {donation.target}</p>
//             <p>{donation.percentage}%</p>
//         </div>
//     );
// };

// export default DonationCard;


// import React from "react";

// const DonationCard = ({ donation }) => {
//   return (
//     <div className="donation-card">
//       <style jsx>{`
//         .donation-card {
//           width: calc(33.333% - 20px);
//           background-color: #fff;
//           border: 1px solid #ccc;
//           border-radius: 10px;
//           overflow: hidden;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           margin-bottom: 20px; /* Adjust margin as needed */
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
//       <img src={donation.donationImageUrl} alt={donation.donationName} />
//       <div className="donation-card-content">
//         <h2 className="donation-card-title">{donation.donationName}</h2>
//         <p className="donation-card-author">By {donation.donor}</p>
//         <p>{donation.donationDetails}</p>
//         <div className="donation-card-progress">
//           <div
//             className="donation-card-progress-bar"
//             style={{ width: `${donation.percentage}%` }}
//           ></div>
//         </div>
//         <p>Target: Rs {donation.target}</p>
//         <p>{donation.percentage}% donated</p>
//       </div>
//     </div>
//   );
// };

// export default DonationCard;


import React, { useState } from "react";

const DonationCard = ({ donation }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="donation-card" onClick={handleToggleDetails}>
      <style jsx>{`
        .donation-card {
          width: calc(33.333% - 20px);
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px; /* Adjust margin as needed */
          cursor: pointer;
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
      <img src={donation.donationImageUrl} alt={donation.donationName} />
      <div className="donation-card-content">
        <h2 className="donation-card-title">{donation.donationName}</h2>
        <p className="donation-card-author">By {donation.donor}</p>
        {showDetails && <p>{donation.donationDetails}</p>}
        <div className="donation-card-progress">
          <div
            className="donation-card-progress-bar"
            style={{ width: `${donation.percentage}%` }}
          ></div>
        </div>
        <p>Target: Rs {donation.target}</p>
        <p>{donation.percentage}% donated</p>
      </div>
    </div>
  );
};

export default DonationCard;


// DonationCard.js



// import React from "react";
// import { useNavigate } from "react-router-dom";

// const DonationCard = ({ donation }) => {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/donation/${donation.id}`);
//   };

//   return (
//     <div className="donation-card" onClick={handleCardClick}>
//       <style jsx>{`
//         .donation-card {
//           width: calc(33.333% - 20px);
//           background-color: #fff;
//           border: 1px solid #ccc;
//           border-radius: 10px;
//           overflow: hidden;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           margin-bottom: 20px; /* Adjust margin as needed */
//           cursor: pointer;
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
//         <p>Target: Rs {donation.target}</p>
//         <p>{donation.percentage}% donated</p>
//       </div>
//     </div>
//   );
// };

// export default DonationCard;
