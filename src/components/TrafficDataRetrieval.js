import React, { useEffect, useState } from 'react';
import $ from "jquery";

const TrafficDataRetrieval = ({ trafficData }) => {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState(null);

  //const handleRetrieve = (location) => {};
  const ret = (e) => {
    var loc = $("#location").val().trim();
    // fetch('http://localhost/myapp2/myapp2/php/data_retrieve.php?location='+loc)
    // .then((res) => {
    //   console.log(res);
    // })
    // .then((data) => {
    //   console.log(data);
    // });
    
    alert(loc);
    $.ajax({
      url:"http://localhost/myapp2/myapp2/php/data_retrieve.php?location="+loc,
      method:"get",
      crossDomain: true,
      success:function(response){
        console.log(response);
      },error:function(response){
        console.log(response);
      }
    })
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div>
      <h2>Retrieve Traffic Data</h2>
      <input id="location" type="text" placeholder="Location" />
      <button type="button" id="retrieve" onClick={ret}>Retrieve</button>
      {result && (
        <div>
          <p>Location: {location}</p>
          <p>Count: {result.count}</p>
          <p>Timestamp: {result.timestamp}</p>
        </div>
      )}
    </div>
  );
};

export default TrafficDataRetrieval;
