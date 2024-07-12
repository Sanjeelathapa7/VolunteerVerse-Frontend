
import React from "react";
import { useNavigate } from "react-router-dom";

const OrganizationCard = ({ organization }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/organization/${organization._id}`);
  };

  return (
    <div className="organization-card" onClick={handleClick}>
      <style jsx>{`
        .organization-card {
          width: calc(33.333% - 20px);
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 0px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          cursor: pointer;
        }

        .organization-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block; /* Ensure the image is treated as a block element */
}


        .organization-card-content {
          padding: 10px;
        }

        .organization-card-title {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .organization-details {
          color: #777;
          margin-bottom: 20px;

        }

        .read-more {
          color: #007bff;
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>

      <img src={organization.organizationImageUrl} alt={organization.organizationName}
        
      />
      <div className="organization-card-content">
        <h2 className="organization-card-title">
          {organization.organizationName}
        </h2>
        <p className="organization-details">
          {organization.organizationDetails.slice(0, 50)}...
          <span className="read-more">Read more</span>
        </p>
      </div>
    </div>
  );
};

export default OrganizationCard;
