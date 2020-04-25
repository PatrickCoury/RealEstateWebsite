<?php

    // Get SQL Connection object
    include 'ConnectToSQL.php';
    $conn = $GLOBALS['SQL_CONN'];       

    // Call query on SQL server
    $query = "SELECT * FROM ANDREWSDREAMLLC.property WHERE PROPERTY_IDENTIFIER = 'R'";
    $result = mysqli_query($conn, $query);
    
    // If we have results 
    if(mysqli_num_rows($result) > 0)
    {
        // Start packaging the query result into a json object 
        $properties = array();     // list 

        while($row = mysqli_fetch_assoc($result)) 
        {
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
            
            // Pack property into properties array 
            array_push($properties, $property);
        }

        // Print out the json object
        echo json_encode($properties);
    }
    else 
    {
        echo "Error: " . $conn . "<br>" . mysqli_error($conn);
    }
    
?>