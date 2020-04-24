<?php

    include 'ConnectToSQL.php';
    $conn = $GLOBALS['SQL_CONN'];   
    
    if(isset($_POST['DESCRIPTION'])){
    $DESCRIPTION = $_POST['DESCRIPTION'];
    $COMPANY_ADDRESS = $_POST['COMPANY_ADDRESS'];
    $COMPANY_CONTACT_NUMBER = $_POST['COMPANY_CONTACT_NUMBER'];
    $COMPANY_FAX_NUMBER = $_POST['COMPANY_FAX_NUMBER'];
    $COMPANY_EMAIL_ADDRESS  = $_POST['COMPANY_EMAIL_ADDRESS'];
    $COMPANY_FACEBOOK = $_POST['COMPANY_FACEBOOK'];

    $query = "UPDATE ANDREWSDREAMLLC.about_us SET DESCRIPTION = '$DESCRIPTION', COMPANY_ADDRESS = '$COMPANY_ADDRESS', COMPANY_CONTACT_NUMBER = '$COMPANY_CONTACT_NUMBER', COMPANY_FAX_NUMBER = '$COMPANY_FAX_NUMBER', COMPANY_EMAIL = '$COMPANY_EMAIL_ADDRESS', COMPANY_FACEBOOK = '$COMPANY_FACEBOOK' WHERE DESCRIPTION_ID ='1'";
    var_dump($query);
    if (mysqli_query($conn, $query))
    {
        echo "success";
        die;
    }
    else 
    {
        echo "Error: ";
        die;
    }
    }
    echo "Error";
    die;
?>