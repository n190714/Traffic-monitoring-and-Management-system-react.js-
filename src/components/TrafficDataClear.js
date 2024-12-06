import React from 'react';

const TrafficDataClear = ({ onClearData }) => {
  return (
    <div>
      <h2>Clear Traffic Data</h2>
      <button onClick={onClearData}>Clear All Data</button>
    </div>
  );
};

export default TrafficDataClear;
