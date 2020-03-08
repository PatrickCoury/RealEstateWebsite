<?php

    $conn = $GLOBALS['SQL_CONN'];   

    // TODO: We need this table created

    $NAME = $_POST['NAME'];
    $EMAIL_ADDRESS = $_POST['EMAIL_ADDRESS'];
    $PHONE_NUMBER = $_POST['PHONE_NUMBER'];
    $SERVICE_OFFERED  = $_POST['SERVICE_OFFERED'];

    $query = "insert into ANDREWSDREAMLLC. TODO:ContractorInfo values('$NAME','$EMAIL_ADDRESS','$PHONE_NUMBER','$SERVICE_OFFERED');";

    if (mysqli_query($conn, $query))
    {
        echo "New record created successfully";
    }
    else 
    {
        echo "Error: " . $conn . "<br>" . mysqli_error($conn);
    }

?>