
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getSingleDonationApi } from '../../apis/Apis'; // Adjust import as per your API structure

const DonationDetails = () => {
  const [donation, setDonation] = useState(null); // Initialize with null
  const { id } = useParams(); // Get the donation ID from URL params

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const res = await getSingleDonationApi(id); // Adjust API function to accept ID parameter
        setDonation(res.data.donation); // Assuming API returns a single donation object within a 'donation' key
      } catch (err) {
        console.error("Error fetching donation:", err);
        setDonation(null); // Set donation to null on error
      }
    };

    fetchDonation();
  }, [id]); // Fetch data whenever `id` changes

  if (!donation) {
    return <p>Donation not found</p>; // Display a message if donation is null or undefined
  }

  return (
    <div className="donation-details-page">
          <style jsx>{`
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

        .donation-details-page {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .donation-details-container {
          display: flex;
          max-width: 1200px;
          width: 100%;
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .donation-left {
          flex: 1.5;
          display: flex;
          flex-direction: column;
          padding: 35px;
        }
        .donation-left img {
          width: 100%;
          height: auto;
          margin-bottom: 10px;
        }
        .donation-left h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .donation-left .donor-name {
          font-size: 18px;
          color: #555;
          margin-bottom: 10px;
        }
        .donation-left .about-campaign {
          font-size: 16px;
          color: #777;
          margin-bottom: 20px;
        }
        .donation-left .donation-progress {
          height: 20px;
          background-color: #e0e0e0;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .donation-left .donation-progress-bar {
          height: 100%;
          background-color: #28a745;
        }
        .donation-left .target-raised {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          font-size: 16px;
          font-weight: bold;
        }
        .donation-left .donation-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .donation-left .donors {
          display: flex;
          align-items: center;
        }
        .donation-left .donors img {
          margin-right: 5px;
          width: 30px;
          height: 30px;
        }
        .donation-left .days-left {
          display: flex;
          align-items: center;
        }
        .donation-left .days-left img {
          margin-right: 5px;
          width: 20px;
          height: 20px;
        }
         .donation-left h1 {
  text-align: center;
}

        .donation-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 40px;
                    margin-top: 55px;

        }
                    
                    .about-campaign {
  text-align: justify;
}

        .donation-right .donate-now {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #007bff;
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 20px;
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
      <div className="donation-details-container">
              <div className="donation-left">
                  <h1>Details</h1>
          <img src={donation.donationImageUrl} alt={donation.donationName} />
          <h1>{donation.donationName}</h1>
          <p className="donor-name">By {donation.donor}</p>
          <div className="donation-progress">
            <div
              className="donation-progress-bar"
              style={{ width: `${donation.percentage}%` }}
            ></div>
          </div>
          <div className="target-raised">
            <p>Target: Rs {donation.target}</p>
            <p>Raised: Rs {donation.raised}</p>
          </div>
          <div className="donation-summary">
            <div className="donors">
              <img src="/path/to/donor1.png" alt="Donor 1" />
              <img src="/path/to/donor2.png" alt="Donor 2" />
              <span>{donation.totalDonor}+ Donated</span>
            </div>
            <div className="days-left">
              <img src="/path/to/clock.png" alt="Clock" />
              <span>2 days left</span>
                      </div>
                      
                  </div>
                  
        </div>
        <div className="donation-right">
                  <p className="about-campaign">{donation.donationDetails}</p>
                  <a href="#" className="donate-now">Donate now</a>


        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
