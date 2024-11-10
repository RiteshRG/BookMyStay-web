<?php
include "dbConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $first_name = $_POST['first_name'];
    $lastname = $_POST['lastname'];
    $phone_number = $_POST['phone_number'];
    $email = $_POST['email'];
    $room_type = $_POST['room_type'];
    $room_count = $_POST['room_count'];
    $arrival_date = $_POST['arrival_date'];
    $departure_date = $_POST['departure_date'];
    $total_amount = $_POST['total_amount'];

   $sql = "INSERT INTO `bookings`(`first_name`, `lastname`, `phone_number`, `email`, `room_type`, `room_count`, `arrival_date`, `departure_date`, `total_amount`) VALUES ('$first_name', '$lastname', '$phone_number', '$email', '$room_type', '$room_count', '$arrival_date', '$departure_date', '$total_amount')";


    $result = $conn->query($sql);
    if($result == TRUE){
        echo 'Record inserted successfully.';
    }else{
        echo "<br> ERROR: ". $sql ."<br>". $conn->error;
    }

    $conn->close();
 }

?>