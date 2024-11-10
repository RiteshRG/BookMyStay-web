<?php 
include "./php/dbConfig.php";
$sql = "SELECT * FROM bookings";
$result = $conn->query($sql);
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
    <title>BookMyStay | My Booking</title>
    <style>
        .btn {
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease-in-out;
        }
    
        .btn:hover {
            transform: translateY(-2px);
        }
    
        .table {
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
        }

        .custom-container {
            width: 85%; 
            max-width: 100%; 
            margin-left: 0 auto; 
        }

    </style>
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
                    <a class="nav-link active" href="#">My Bookings</a>
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
                <img src="./images/poster1.jpeg" class="d-block w-100" alt="Hero Image 1">
                <div class="carousel-caption d-none d-md-block">
                    <h1>Find Your Perfect Stay</h1>
                    <p>Book your room with ease and comfort today!</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./images/poster2.jpeg" class="d-block w-100" alt="Hero Image 2">
                <div class="carousel-caption d-none d-md-block">
                    <h1>Luxury Awaits You</h1>
                    <p>Experience the best in hospitality and comfort.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./images/poster3.jpg" class="d-block w-100" alt="Hero Image 3">
                <div class="carousel-caption d-none d-md-block">
                    <h1>Enjoy Affordable Stays</h1>
                    <p>Discover Quality Comfort Without Compromise</p>
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

    <div class="container custom-container my-5">
        <h2 class="text-center mb-4">My Bookings</h2>
        <div class="table-responsive">
            <table class="table table-striped table-hover table-bordered text-center shadow-sm">
                <thead class="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Room Type</th>
                        <th>Rooms</th>
                        <th>Arrival Date</th>
                        <th>Departure Date</th>
                        <th>Amount</th> 
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if($result->num_rows > 0){
                        while($row = $result->fetch_assoc()){
                    ?>
                    <tr id='record-<?php echo $row['id'];?>'>
                        <td><?php echo $row['id'];?></td>
                        <td><?php echo $row['first_name'];?></td>
                        <td><?php echo $row['lastname'];?></td>
                        <td><?php echo $row['phone_number'];?></td>
                        <td><?php echo $row['email'];?></td>
                        <td><?php echo $row['room_type'];?></td>
                        <td><?php echo $row['room_count'];?></td>
                        <td><?php echo $row['arrival_date'];?></td>
                        <td><?php echo $row['departure_date'];?></td>
                        <td>₹<?php echo $row['total_amount'];?></td> 
                        <td>
                            <div class="d-flex justify-content-center">
                                <a class="btn btn-primary btn-sm mx-1 d-flex align-items-center" data-toggle="tooltip" href="update.php?id=<?php echo $row['id']; ?>">
                                    <i class="fas fa-edit mr-1"></i> <span>Update</span>
                                </a>
                                <a class="btn btn-danger btn-sm mx-1 d-flex align-items-center" data-toggle="tooltip" onclick="confirmDelete(<?php echo $row['id']; ?>)">
                                    <i class="fas fa-trash-alt mr-1"></i> <span>Cancel</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <?php }
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
    
    <footer class="bg-dark text-white text-center p-4">
        <p>&copy; 2024 Hotel Booking System. All Rights Reserved.</p>
        <p>Contact: info@hotelbookingsystem.com | Phone: +1 234 567 890</p>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.1/aos.js"></script>
    <script>
        AOS.init({
            duration: 1000, 
        });

        function confirmDelete(id) {
        if (confirm("Are you sure you want to cancel booking?")) {
            fetch(`./php/cancel.php?id=${id}`, {
                method: 'GET'
            })
            .then(response => response.text())
            .then(result => {
                if (result.includes("Booking Canceled successfully")) {
                    alert(result);
                    document.getElementById(`record-${id}`).remove(); 
                } else {
                    alert(result);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while deleting the record.");
            });
        }
        }
    </script>
</body>

</html>
