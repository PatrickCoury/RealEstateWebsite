<?php
    $servername = "localhost";
    $username = "realestate";
    $password = "realestate";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, 'ANDREWSDREAMLLC');

    // Check connection
    if (!$conn)
    {
        die("Connection failed: " . mysqli_connect_error());
    }
    


    $GLOBALS["SQL_CONN"] = $conn;
?>