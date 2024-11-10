<?php
$severname = "localhost";
$username = "root";
$password = "5*Rit2004";
$dbname = "book_my_stay";

$conn = new mysqli($severname, $username, $password, $dbname);

if($conn->connect_error){
    die("Connect failed: ".$conn->connect_error);
}else{
    // echo "Connection Successfull!";
}
?>