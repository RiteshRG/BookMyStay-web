<?php
include "./php/dbConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $first_name = $_POST['first_name'];
    $lastname = $_POST['lastname'];
    $phone_number = $_POST['phone_number'];
    $email = $_POST['email'];
    $room_type = $_POST['room_type'];
    $room_count = $_POST['room_count'];
    $arrival_date = $_POST['arrival_date'];
    $departure_date = $_POST['departure_date'];
    $total_amount = $_POST['total_amount'];

   $sql = "UPDATE `bookings` SET `first_name`='$first_name', `lastname`='$lastname', `phone_number`='$phone_number', `email`='$email', `room_type`='$room_type', `room_count`='$room_count', `arrival_date`='$arrival_date', `departure_date`='$departure_date', `total_amount`='$total_amount' WHERE `id`='$id'";

    $result = $conn->query($sql);
    if($result == TRUE){
        echo 'Record updated successfully.';
    }else{
        echo "<br> ERROR: ". $sql ."<br>". $conn->error;
    }

     $conn->close();
 }

 
if(isset($_GET['id'])){
    $id = $_GET['id'];
    $sql = "SELECT * FROM `bookings` WHERE `id`='$id'";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            $first_name = $row['first_name'];
            $lastname = $row['lastname'];
            $phone_number = $row['phone_number'];
            $email = $row['email'];
            $room_type = $row['room_type'];
            $room_count = $row['room_count'];
            $arrival_date = $row['arrival_date'];
            $departure_date = $row['departure_date'];
            $id = $row['id'];
        }
    }
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <link rel="stylesheet" href="styles/bookNow.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.1/aos.css" />
        <title>BookMyStay | Update</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">BookMyStay</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="bookNow.html">Book Now</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="myBoooking.php">My Bookings</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div id="heroCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./images/poster8.jpg" class="d-block w-100" alt="Hero Image 1">
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Modify Your Reservation</h1>
                        <p>Easily adjust your booking details to enhance your stay.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./images/poster4.jpg" class="d-block w-100" alt="Hero Image 2">
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Refine Your Stay</h1>
                        <p>Update your booking information for a personalized experience.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./images/poster3.jpg" class="d-block w-100" alt="Hero Image 3">
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Update Your Booking Details</h1>
                        <p>Make changes to your reservation and ensure everything is just right.</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="container my-5">
            <h2 class="text-center mb-4">Update Your Booking</h2> 
            <form id="formUpdate" method="POST">
                <div class="form-row" data-aos="fade-up">
                    <div class="form-group col-md-6">
                        <label for="firstName">First Name</label>
                        <input type="text" value="<?php echo $first_name; ?>" class="form-control" id="firstNameUpdate" placeholder="Enter your first name">
                        <span class="error-field fname-error-field-Update text-danger small"></span>
                        <input type="hidden" value="<?php echo $id;?>" id="idUpdate">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" value="<?php echo $lastname; ?>" id="lastNameUpdate" placeholder="Enter your last name">
                        <span class="error-field lname-error-field-Update text-danger small"></span>
                    </div>
                </div>

                <div class="form-row" data-aos="fade-up" data-aos-delay="100">
                    <div class="form-group col-md-6">
                        <label for="phone">Phone Number</label>
                        <input type="text" class="form-control" value="<?php echo $phone_number; ?>" id="phoneUpdate" placeholder="Enter your phone number">
                        <span class="error-field phone-error-field-Update text-danger small"></span>
                        <p></p>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" value="<?php echo $email; ?>" id="emailUpdate" placeholder="Enter your email">
                        <span class="error-field email-error-field-Update text-danger small"></span>
                    </div>
                </div>

                <div class="form-row" data-aos="fade-up" data-aos-delay="200">
                    <div class="form-group col-md-6">
                        <label for="roomType">Room Type</label>
                        <select class="form-control" id="roomTypeUpdate">
                            <option value="">Choose Room Type</option>
                            <option value="standard" <?php if($room_type === 'standard'){echo 'selected';}?>>Standard Room</option>
                            <option value="deluxe" <?php if($room_type === 'deluxe'){echo 'selected';}?>>Deluxe Room</option>
                            <option value="suite" <?php if($room_type === 'suite'){echo 'selected';}?>>Suite</option>
                        </select>
                        <span class="error-field rtype-error-field-Update text-danger small"></span>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="roomCount">Number of Rooms</label>
                        <input type="number" class="form-control" value="<?php echo $room_count; ?>" id="roomCountUpdate" placeholder="Enter number of rooms" min="1">
                        <span class="error-field numOfRoom-error-field-Update text-danger small"></span>
                    </div>
                </div>

                <div class="form-row" data-aos="fade-up" data-aos-delay="300">
                    <div class="form-group col-md-6">
                        <label for="arrivalDate">Arrival Date</label>
                        <input type="date" class="form-control" value="<?php echo $arrival_date; ?>" id="arrivalDateUpdate">
                        <span class="error-field adate-error-field-Update text-danger small"></span>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="departureDate">Departure Date</label>
                        <input type="date" class="form-control" value="<?php echo $departure_date; ?>" id="departureDateUpdate">
                        <span class="error-field ddate-error-field-Update text-danger small"></span>
                    </div>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-success btn-block col-md-4">Update Booking</button>
                </div>
            </form>

        </div>

        <footer class="bg-dark text-white text-center p-4">
            <p>&copy; 2024 Hotel Booking System. All Rights Reserved.</p>
            <p>Contact: info@hotelbookingsystem.com | Phone: +1 234 567 890</p>
        </footer>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.1/aos.js"></script>
        <script type="module" src="./scripts/updateValidation.js"></script>
        <script>
            AOS.init({
                duration: 1000, 
            });
        </script>
    </body>
</html>
<?php 
}
    ?>
