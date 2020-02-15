<?php
    
    // Get SQL Connection object
    $conn = $GLOBALS['SQL_CONN'];       

    // Call query on SQL server
    $query = 'select * from andrewsdreamllc.property;'
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
            $property["STREET1_ADDRESS"] = $row["PROPERTY_STREET1_ADDRESS"];
            $property["STREET2_ADDRESS"] = $row["PROPERTY_STREET2_ADDRESS"];
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