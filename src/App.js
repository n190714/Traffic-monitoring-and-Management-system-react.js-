import React, { useState, useEffect } from 'react';
import TrafficDataEntry from './components/TrafficDataEntry';
import TrafficDataDisplay from './components/TrafficDataDisplay';
import TrafficDataRetrieval from './components/TrafficDataRetrieval';
import TrafficDataClear from './components/TrafficDataClear';
import { getTrafficData, saveTrafficData, clearTrafficData } from './services/trafficService';

const App = () => {
  const [trafficData, setTrafficData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrafficData();
      setTrafficData(data);
    };

    fetchData();
  }, []);

  const handleAddData = (location, count) => {
    const newData = { ...trafficData, [location]: { count, timestamp: new Date().toLocaleString() } };
    setTrafficData(newData);
    saveTrafficData(newData);
  };

  const handleClearData = () => {
    setTrafficData({});
    clearTrafficData();
  };

  return (
    <div className="App">
      <h1>Traffic Monitoring and Management System</h1>
      <TrafficDataEntry onAddData={handleAddData} />
      <TrafficDataDisplay trafficData={trafficData} />
      <TrafficDataRetrieval trafficData={trafficData} />
      <TrafficDataClear onClearData={handleClearData} />
    </div>
  );
};

export default App;
