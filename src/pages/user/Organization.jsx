// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getSingleOrganizationApi } from "../../apis/Apis"; // Adjust import as per your API structure

// const Organization = () => {
//   const [organization, setOrganization] = useState(null); // Initialize with null
//   const { id } = useParams(); // Get the organization ID from URL params

//   useEffect(() => {
//     const fetchOrganizations = async () => {
//       try {
//         const res = await getSingleOrganizationApi(id); // Adjust API function to accept ID parameter
//         setOrganization(res.data.organization); // Assuming API returns a single organization object within a 'organization' key
//       } catch (err) {
//         console.error("Error fetching organization:", err);
//         setOrganization(null); // Set organization to null on error
//       }
//     };

//     fetchOrganizations();
//   }, [id]); // Fetch data whenever `id` changes

//   if (!organization) {
//     return <p>Organization not found</p>; // Display a message if organization is null or undefined
//   }

//   return (
//     <div className="organization-details-page">
//       <style jsx>{`
//         .organization-card {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           border: 1px solid rgba(0, 0, 0, 0.1);
//           border-radius: 10px;
//           padding: 20px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           margin: 20px 0;
//           text-align: center;
//           max-width: 300px;
//         }

//         .organization-card img {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           margin-bottom: 10px;
//         }

//         .organization-card h2 {
//           font-size: 1.2em;
//           margin: 10px 0;
//         }

//         .organization-card p {
//           font-size: 0.9em;
//           color: #666;
//         }

//         .organization-card a {
//           text-decoration: none;
//           color: #007bff;
//           font-weight: bold;
//         }
//       `}</style>
//       <div className="organization-card">
//         <img
//           src={organization.organizationImageUrl}
//           alt={`${organization.organizationName} Logo`}
//         />
//         <h2>{organization.organizationName}</h2>
//         <p>{organization.organizationDetails}</p>
//         <a href={`/organization/${organization.id}/read-more`}>Read more</a>
//       </div>
//     </div>
//   );
// };

// export default Organization;
