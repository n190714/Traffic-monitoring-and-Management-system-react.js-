<?php
include_once "db_connect.php";

// Select database
$conn->select_db($dbname);

// SQL to create table
$sql = "CREATE TABLE IF NOT EXISTS traffic_data (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  location VARCHAR(100) NOT NULL,
  count INT(10) NOT NULL,
  entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
  //echo "Table traffic_data created successfully or already exists\n";
} else {
  echo "Error creating table: " . $conn->error . "\n";
}

$conn->close();
