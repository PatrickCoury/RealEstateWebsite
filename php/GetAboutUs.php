<?php
    
    // Get SQL Connection object
    $conn = $GLOBALS['SQL_CONN'];       

    // Call query on SQL server
    $query = 'select * from andrewsdreamllc.about_us;'
    $result = mysqli_query($conn, $query);
    
    // If we have results 
    if(mysqli_num_rows($result) == 1)
    {
        // Start packaging the query result into a json object 
        $row = mysqli_fetch_assoc($result)
        $about_us= array();   
        $about_us["DESCRIPTION"] = $row["DESCRIPTION"];
        $about_us["ADDRESS"] = $row["COMPANY_ADDRESS"];
        $about_us["CONTACT_NUMBER"] = $row["COMPANY_CONTACT_NUMBER"];
        $about_us["FAX_NUMBER"] = $row["COMPANY_FAX_NUMBER"];
        $about_us["EMAIL_ADDRESS"] = $row["COMPANY EMAIL_ADDRESS"];
        $about_us["FACEBOOK"] = $row["COMPANY_FACEBOOK"];
        
        // Print out the json object
        echo json_encode($about_us); 

    }
    else if(mysqli_num_rows($result) < 1)
    {
        echo "Error: " . $conn . "<br>" . mysqli_error($conn);
    }
    else // 1 means good, <1 means error, >1 means somethings wrong with the table
    {
        echo "Error: about_us table should only have one row";
    }
    
?>