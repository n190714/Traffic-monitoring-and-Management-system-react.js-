import React, { useState } from 'react';
import axios from 'axios';
import $ from 'jquery';

const TrafficDataEntry = ({ onAddData }) => {
  const [location, setLocation] = useState('');
  const [count, setCount] = useState('');

  const handleAdd = (e) => {
    if (location && count) {
      const data = {
        location: location,
        count: parseInt(count, 10)
      };
      
      $.ajax({
        url:"http://localhost/myapp2/myapp2/php/data_entry.php",
        method:"post",
        crossDomain: true,
        data: {location:data.location,count:data.count},
        success:function(response){
          alert(response);
        }
      })
      e.preventDefault();
      alert("Data Inserted..!");
      window.location.reload();
    } else {
      alert('Please enter both location and traffic count.');
    }
  };

  return (
    <div>
      <h2>Enter Traffic Data</h2>
      <form method='post'>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Traffic Count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" onClick={handleAdd}>Add Data</button>
      </form>
    </div>
  );
};

export default TrafficDataEntry;