import React from 'react';

const TrafficDataDisplay = ({ trafficData }) => {
  return (
    <div>
      <h2>All Traffic Data</h2>
      <ul>
        {Object.entries(trafficData).map(([location, data]) => (
          <li key={location}>
            Location: {location}, Count: {data.count}, Timestamp: {data.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrafficDataDisplay;
