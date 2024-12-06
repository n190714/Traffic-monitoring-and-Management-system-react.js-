<?php


// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "traffic_data";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

if($conn)
{
  echo "connected";
}

else
{
  echo "notconnected";
}
/*
$x = "select location from traffic_data where `id` = 1";
$x1 = mysqli_query($conn,$x);
// print_r($x1);
// echo "-->".$x1;
// echo mysqli_fetch_assoc($x1);
while($r = mysqli_fetch_assoc($x1)){
  echo $r["location"];
  }
*/