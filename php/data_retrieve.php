 <?php 

    // include "db_connect.php";
    // //----------------------------
    // $location = $_GET['location'];
    // //----------------------------
    // $q = "SELECT `id`, `count`, `entry_date` FROM `traffic_data` WHERE `location` = '$location'";
    // $q1 = mysqli_query($conn, $q);
    // //-----------------
    // while($r = mysqli_fetch_assoc($q1)){
    //     //print_r($r);
    //     echo "\n\n".$r['count'];
    // }
?>


<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include "db_connect.php";

// Get the location from the GET request
$location = $_GET['location'];

// Prepare the query
$q = "SELECT `id`, `count`, `entry_date` FROM `traffic_data` WHERE `location` = ?";
$stmt = $conn->prepare($q);
$stmt->bind_param("s", $location);

// Execute the query
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Initialize an array to hold the fetched data
$data = array();

// Fetch the data and store it in the array
while ($r = $result->fetch_assoc()) {
    $data[] = $r;
}

// Encode the data into JSON format
$json_data = json_encode($data);

// Output the JSON data
header('Content-Type: application/json');
echo $json_data;

// Close the statement and connection
$stmt->close();
$conn->close();
?>
