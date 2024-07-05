import React from 'react';
import DonationCard from './DonationCard';

const DonationList = ({ donations }) => {
    return (
        <div className="donation-section">
            <h2>Donation</h2>
            <div className="donation-list">
                {donations.map((donation) => (
                    <DonationCard key={donation._id} donation={donation} />
                ))}
            </div>
        </div>
    );
};

export default DonationList;
