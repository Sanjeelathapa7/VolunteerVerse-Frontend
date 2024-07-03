// // DonationDetails.js
// import React from "react";
// import { useParams } from "react-router-dom";

// const DonationDetails = ({ donations }) => {
//   const { id } = useParams();
//   const donation = donations.find((don) => don.id === parseInt(id));

//   return (
//     <div className="donation-details">
//       <style jsx>{`
//         .donation-details {
//           padding: 20px;
//           background-color: #fff;
//           border: 1px solid #ccc;
//           border-radius: 10px;
//           max-width: 600px;
//           margin: 0 auto;
//         }

//         .donation-details img {
//           width: 100%;
//           height: 300px;
//           object-fit: cover;
//           border-radius: 10px;
//         }

//         .donation-details-content {
//           margin-top: 20px;
//         }

//         .donation-details-title {
//           font-size: 24px;
//           margin-bottom: 10px;
//         }

//         .donation-details-author {
//           color: #777;
//           margin-bottom: 10px;
//         }

//         .donation-details-progress {
//           height: 10px;
//           background-color: #f0f0f0;
//           border-radius: 5px;
//           overflow: hidden;
//           margin-bottom: 10px;
//         }

//         .donation-details-progress-bar {
//           height: 100%;
//           background-color: #28a745;
//         }
//       `}</style>
//       <img src={donation.donationImageUrl} alt={donation.donationName} />
//       <div className="donation-details-content">
//         <h2 className="donation-details-title">{donation.donationName}</h2>
//         <p className="donation-details-author">By {donation.donor}</p>
//         <p>{donation.donationDetails}</p>
//         <div className="donation-details-progress">
//           <div
//             className="donation-details-progress-bar"
//             style={{ width: `${donation.percentage}%` }}
//           ></div>
//         </div>
//         <p>Target: Rs {donation.target}</p>
//         <p>{donation.percentage}% donated</p>
//       </div>
//     </div>
//   );
// };

// export default DonationDetails;
