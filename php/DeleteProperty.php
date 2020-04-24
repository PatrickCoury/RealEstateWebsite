<?php

    // Get SQL Connection object
    include 'ConnectToSQL.php';
    $conn = $GLOBALS['SQL_CONN'];       

    // There are three tables per property. Update each of them 
    $PROPERTY_KEY = json_decode($_GET['ID']);    
    
    
    $query = "DELETE FROM ANDREWSDREAMLLC.property WHERE PROPERTY_KEY = $PROPERTY_KEY";

    mysqli_query($conn, $query);

    $query = "DELETE FROM ANDREWSDREAMLLC.property_amenity WHERE PROPERTY_KEY = $PROPERTY_KEY";
    mysqli_query($conn, $query);

    $query = "DELETE FROM ANDREWSDREAMLLC.property_media WHERE PROPERTY_KEY = $PROPERTY_KEY";
    mysqli_query($conn, $query);

    echo json_encode($PROPERTY_KEY);

?>