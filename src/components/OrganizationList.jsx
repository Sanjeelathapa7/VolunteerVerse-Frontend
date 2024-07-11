import React from 'react';
import OrganizationCard from './OrganizationCard';

const OrganizationList = ({ organizations }) => {
    return (
        <div className="organization-section">
            <h2>Organization</h2>
            <div className="organization-list">
                {organization.map((organization) => (
                    <OrganizationCard key={organization._id} organization={organization} />
                ))}
            </div>
        </div>
    );
};

export default OrganizationList;
