<?php

    // Get SQL Connection object
    include 'ConnectToSQL.php';
    $conn = $GLOBALS['SQL_CONN'];       

    $PROPERTY_KEY = $_POST['PROPERTY_KEY'];

    // Call query on SQL server
    $query = "SELECT * FROM ANDREWSDREAMLLC.property 
              WHERE PROPERTY_KEY = $PROPERTY_KEY";

    $result = mysqli_query($conn, $query);
    
    // If we have results 
    if(mysqli_num_rows($result) == 1)
    {
        // Start packaging the query result into a json object 
        $row = mysqli_fetch_assoc($result); 

        // Each property will have a map of property info
        $property = array();   
        $property["KEY"] = $row["PROPERTY_KEY"];
        $property["IDENTIFIER"] = $row["PROPERTY_IDENTIFIER"];
        $property["NAME"] = $row["PROPERTY_NAME"];
        $property["PRICE"] = $row["PROPERTY_PRICE"];
        $property["TYPE"] = $row["PROPERTY_TYPE"];
        $property["STREET_ADDRESS1"] = $row["PROPERTY_STREET_ADDRESS1"];
        $property["STREET_ADDRESS2"] = $row["PROPERTY_STREET_ADDRESS2"];
        $property["CITY"] = $row["PROPERTY_CITY"];
        $property["STATE"] = $row["PROPERTY_STATE"];
        $property["COUNTRY"] = $row["PROPERTY_COUNTRY"];
        $property["ZIP"] = $row["PROPERTY_ZIP"];
        $property["AVAILABLE"] = $row["PROPERTY_AVAILABLE"];
        $property["DATE"] = $row["PROPERTY_DATE"];
            
        $query = "SELECT * FROM ANDREWSDREAMLLC.property_amenity 
                  WHERE PROPERTY_KEY = $PROPERTY_KEY";
                  
        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($result); 
        
        $property["SQUARE_FEET"] = $row["PROPERTY_SQUARE_FEET"];
        $property["BED"] = $row["PROPERTY_BED"];
        $property["BATH"] = $row["PROPERTY_BATH"];
        $property["PARKING"] = $row["PROPERTY_PARKING"];
        $property["PET_FRIENDLY"] = $row["PROPERTY_PET_FRIENDLY"];
        $property["ELECTRICITY"] = $row["PROPERTY_ELECTRICITY"];
        $property["WATER_SEWAGE_TRASH"] = $row["PROPERTY_WATER_SEWAGE_TRASH"];
        $property["LEASE_MIN"] = $row["PROPERTY_LEASE_MIN"];
        $property["LEASE_MAX"] = $row["PROPERTY_LEASE_MAX"];
        $property["NOTE"] = $row["PROPERTY_NOTE"];

        // Print out the json object
        echo json_encode($property);
    }
    else 
    {
        echo 'error';
    }
    
?>