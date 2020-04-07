<?php

    // Get SQL Connection object
    include 'ConnectToSQL.php';
    $conn = $GLOBALS['SQL_CONN'];       

    $PROPERTY_IDENTIFIER = "-";
    $PROPERTY_NAME = "-";
    $PROPERTY_PRICE = 0;
    $PROPERTY_TYPE = "-";
    $PROPERTY_STREET_ADDRESS1 = "-";
    $PROPERTY_STREET_ADDRESS2 = "-";    
    $PROPERTY_CITY = "-";
    $PROPERTY_STATE = "-";
    $PROPERTY_COUNTRY = "-";
    $PROPERTY_ZIP = 0;
    $PROPERTY_AVAILABLE = 0;




    $query = "INSERT INTO property (PROPERTY_IDENTIFIER, PROPERTY_NAME, PROPERTY_PRICE, PROPERTY_TYPE, PROPERTY_STREET_ADDRESS1, PROPERTY_STREET_ADDRESS2, PROPERTY_CITY, PROPERTY_STATE, PROPERTY_COUNTRY, PROPERTY_ZIP, PROPERTY_AVAILABLE, PROPERTY_DATE)
              VALUES('$PROPERTY_IDENTIFIER','$PROPERTY_NAME','$PROPERTY_PRICE', '$PROPERTY_TYPE','$PROPERTY_STREET_ADDRESS1','$PROPERTY_STREET_ADDRESS2','$PROPERTY_CITY','$PROPERTY_STATE','$PROPERTY_COUNTRY','$PROPERTY_ZIP', '$PROPERTY_AVAILABLE', NOW());";
            
    if (mysqli_query($conn, $query))
    {
          echo "New record created successfully";
    }   
    else 
    {
        echo "Error: " . $conn . "<br>" . mysqli_error($conn);
    }

    // Get primary key
    $query = 'SELECT LAST_INSERT_ID();';
    $result = mysqli_query($conn, $query);
    if(mysqli_num_rows($result) == 1)
    {
        $PROPERTY_KEY = mysqli_fetch_assoc($result);
        $PROPERTY_KEY = intval($PROPERTY_KEY["LAST_INSERT_ID()"]);
    }
    
    $PROPERTY_SQUARE_FEET = 0;
    $PROPERTY_BED = 0;
    $PROPERTY_BATH = 0;
    $PROPERTY_PARKING = '-';
    $PROPERTY_PET_FRIENDLY = 0;
    $PROPERTY_ELECTRICITY = '-';
    $PROPERTY_WATER_SEWAGE_TRASH = '-';
    $PROPERTY_LEASE_MIN = '-';
    $PROPERTY_LEASE_MAX = '-';
    $PROPERTY_NOTE = '-';

    $query = "INSERT INTO property_amenity 
              VALUES($PROPERTY_KEY,'$PROPERTY_SQUARE_FEET','$PROPERTY_BED','$PROPERTY_BATH','$PROPERTY_PARKING','$PROPERTY_PET_FRIENDLY','$PROPERTY_ELECTRICITY','$PROPERTY_WATER_SEWAGE_TRASH','$PROPERTY_LEASE_MIN','$PROPERTY_LEASE_MAX','$PROPERTY_NOTE');";

    if (mysqli_query($conn, $query))
    {
        echo "New record created successfully";
    }
    else 
    {
        echo "Error: " . $conn . "<br>" . mysqli_error($conn);
    }

?>