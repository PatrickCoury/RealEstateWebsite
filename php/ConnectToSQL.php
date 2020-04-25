<?php
    $servername = "localhost:3306";
    $username = "root";
    $password = "root";
    //$servername = "localhost";
    //$username = "realestate";
    //$password = "realestate";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, 'ANDREWSDREAMLLC');

    // Check connection
    if (!$conn)
    {
        die("Connection failed: " . mysqli_connect_error());
    }
    


    $GLOBALS["SQL_CONN"] = $conn;
?>