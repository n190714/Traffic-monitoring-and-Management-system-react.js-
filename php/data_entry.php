<?php
include "db_connect.php";

//------------VALUES------------

//$id = $_POST[""];
$location = $_POST["location"];
$count = $_POST["count"];
//----------------------------
$i = "INSERT INTO `traffic_data`(`location`, `count`) VALUES ('$location','$count')";
$i1 = mysqli_query($conn,$i);
if($i1){
  echo "inserted";
}else{
  echo " not inserted";
}
?>