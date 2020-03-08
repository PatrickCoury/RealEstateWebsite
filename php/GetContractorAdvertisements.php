<?php

    // Get SQL Connection object
    include 'ConnectToSQL.php';
    $conn = $GLOBALS['SQL_CONN'];       

    // Call query on SQL server
    $query = 'select * from ANDREWSDREAMLLC.contractor;';
    $result = mysqli_query($conn, $query);
    
    // If we have results 
    if(mysqli_num_rows($result) > 0)
    {
        // Start packaging the query result into a json object 
        $jobs = array();     // list 

        while($row = mysqli_fetch_assoc($result)) 
        {
            // Each property will have a map of property info
            $job= array();   
            $job["KEY"] = $row["JOB_KEY"];
            $job["NAME"] = $row["JOB_NAME"];
            $job["DESCRIPTION"] = $row["JOB_DESCRIPTION"];
            $job["ADDRESS"] = $row["JOB_ADDRESS"];

            // Pack property into properties array 
            array_push($job, $job);
        }

        // Print out the json object
        echo json_encode($jobs);
    }
    else 
    {
        echo "Error: " . $conn . "<br>" . mysqli_error($conn);
    }
    
?>