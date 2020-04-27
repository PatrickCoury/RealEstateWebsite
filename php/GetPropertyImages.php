<?php

    // Get SQL Connection object
    include 'ConnectToSQL.php';
    $conn = $GLOBALS['SQL_CONN'];       

    $PROPERTY_KEY = $_POST['PROPERTY_KEY'];

    // Call query on SQL server
    $query = "SELECT * FROM ANDREWSDREAMLLC.property_media WHERE PROPERTY_KEY = $PROPERTY_KEY";
    $result = mysqli_query($conn, $query);

        // If we have results 
    if(mysqli_num_rows($result) > 0)
    {
        // Start packaging the query result into a json object 
        $propertyImages = array();     // list 

        while($row = mysqli_fetch_assoc($result)) 
        {
            // Each property will have a map of property info
            $propertyImage = array(); 
            $propertyImage["PROPERTY_IMAGE"] = $row["PROPERTY_IMAGE"];
            
            // Pack property into properties array 
            array_push($propertyImages, $propertyImage);
        }

        // Print out the json object
        echo json_encode($propertyImages);
    }
    else 
    {
        echo "Error: " . $conn . "<br>" . mysqli_error($conn);
    }
    
?>