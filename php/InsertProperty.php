<?php
    // Get SQL Connection object
    include 'ConnectToSQL.php';
    $conn = $GLOBALS['SQL_CONN'];       

    $PROPERTY = json_decode($_POST['PAYLOAD']);
    
    $PROPERTY_IDENTIFIER = "R";
    $PROPERTY_NAME = $PROPERTY->PROPERTY_NAME;
    $PROPERTY_PRICE = $PROPERTY->PROPERTY_PRICE;
    $PROPERTY_TYPE = $PROPERTY->PROPERTY_TYPE;
    $PROPERTY_STREET_ADDRESS1 = $PROPERTY->PROPERTY_STREET_ADDRESS1;
    $PROPERTY_STREET_ADDRESS2 = $PROPERTY->PROPERTY_STREET_ADDRESS2;
    $PROPERTY_CITY = $PROPERTY->PROPERTY_CITY;
    $PROPERTY_STATE = $PROPERTY->PROPERTY_STATE;
    $PROPERTY_COUNTRY = $PROPERTY->PROPERTY_COUNTRY;
    $PROPERTY_ZIP = $PROPERTY->PROPERTY_ZIP;
    $PROPERTY_AVAILABLE = 1;

    $PROPERTY_KEY = -1;

    $query = "INSERT INTO property (PROPERTY_NAME, PROPERTY_IDENTIFIER, PROPERTY_PRICE, PROPERTY_TYPE, PROPERTY_STREET_ADDRESS1, PROPERTY_STREET_ADDRESS2, PROPERTY_CITY, PROPERTY_STATE, PROPERTY_COUNTRY, PROPERTY_ZIP, PROPERTY_AVAILABLE, PROPERTY_DATE)
              VALUES('$PROPERTY_NAME','$PROPERTY_IDENTIFIER',$PROPERTY_PRICE, '$PROPERTY_TYPE','$PROPERTY_STREET_ADDRESS1','$PROPERTY_STREET_ADDRESS2','$PROPERTY_CITY','$PROPERTY_STATE','$PROPERTY_COUNTRY',$PROPERTY_ZIP, '$PROPERTY_AVAILABLE', NOW())";
            
    mysqli_query($conn, $query);

    //Get primary key
    $PROPERTY_KEY = mysqli_insert_id($conn);
    
    $PROPERTY_SQUARE_FEET = $PROPERTY->PROPERTY_SQUARE_FEET;
    $PROPERTY_BED = $PROPERTY->PROPERTY_BED;
    $PROPERTY_BATH = $PROPERTY->PROPERTY_BATH;
    $PROPERTY_PARKING = $PROPERTY->PROPERTY_PARKING;
    $PROPERTY_PET_FRIENDLY = $PROPERTY->PROPERTY_PET_FRIENDLY;
    $PROPERTY_ELECTRICITY = $PROPERTY->PROPERTY_ELECTRICITY;
    $PROPERTY_WATER_SEWAGE_TRASH = $PROPERTY->PROPERTY_WATER_SEWAGE_TRASH;
    $PROPERTY_LEASE_MIN = $PROPERTY->PROPERTY_LEASE_MIN;
    $PROPERTY_LEASE_MAX = $PROPERTY->PROPERTY_LEASE_MAX;
    $PROPERTY_NOTE = $PROPERTY->PROPERTY_NOTE;

    $query = "INSERT INTO property_amenity (PROPERTY_KEY, PROPERTY_SQUARE_FEET, PROPERTY_BED, PROPERTY_BATH, PROPERTY_PARKING, PROPERTY_PET_FRIENDLY, PROPERTY_ELECTRICITY, PROPERTY_WATER_SEWAGE_TRASH, PROPERTY_LEASE_MIN, PROPERTY_LEASE_MAX, PROPERTY_NOTE)
              VALUES($PROPERTY_KEY,$PROPERTY_SQUARE_FEET,$PROPERTY_BED,$PROPERTY_BATH,'$PROPERTY_PARKING',$PROPERTY_PET_FRIENDLY,$PROPERTY_ELECTRICITY,$PROPERTY_WATER_SEWAGE_TRASH,'$PROPERTY_LEASE_MIN','$PROPERTY_LEASE_MAX','$PROPERTY_NOTE')";

    mysqli_query($conn, $query);
    
    $PROPERTY_IMAGE = $PROPERTY->PROPERTY_IMAGE;

    if(!empty($PROPERTY_IMAGE)){
        $query = "INSERT INTO ANDREWSDREAMLLC.property_media VALUES($PROPERTY_KEY,'$PROPERTY_IMAGE','')";
        mysqli_query($conn, $query);
    }else{
        foreach ($_FILES["photo"]["error"] as $key => $error) {
            if ($error == UPLOAD_ERR_OK) {
                $name = "../images/" . $_FILES['photo']['name'][$key];
                move_uploaded_file( $_FILES["photo"]["tmp_name"][$key], "../images/" . $_FILES['photo']['name'][$key]);
                $query = "INSERT INTO ANDREWSDREAMLLC.property_media VALUES($PROPERTY_KEY,'$name','')";
                mysqli_query($conn, $query);
            }
        }
    }
    echo json_encode($PROPERTY_KEY);
?>