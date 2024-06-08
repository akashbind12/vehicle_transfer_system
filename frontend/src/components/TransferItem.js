// TransferItem.js

import React from 'react';

const TransferItem = ({ transfer }) => {
  return (
    <li className="transfer-item">
      <div className="transfer-info">
        {transfer.from_driver_id && (
          <div className="transfer-from">
            <img src={`http://localhost:3000/${transfer.from_driver.profile_photo}`} alt="From Driver" className="driver-image" />
            <p><strong>From Driver:</strong> {transfer.from_driver.name} (ID: {transfer.from_driver_id})</p>
          </div>
        )}
        <div className="transfer-to">
          <img src={`http://localhost:3000/${transfer.to_driver.profile_photo}`} alt="To Driver" className="driver-image" />
          <p><strong>To Driver:</strong> {transfer.to_driver.name} (ID: {transfer.to_driver_id})</p>
        </div>
        <p className="transfer-vehicle"><strong>Vehicle Number:</strong> {transfer.vehicle_number}</p>
        <p className="transfer-date"><strong>Transfer Date:</strong> {new Date(transfer.createdAt).toLocaleString()}</p>
      </div>
    </li>
  );
};

export default TransferItem;
