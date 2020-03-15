    <?php

    include 'ConnectToSQL.php';
    $conn = $GLOBALS['SQL_CONN'];   

    $HOME_PARAGRAPH_TEXT = $_POST('HOME_PARAGRAPH_TEXT');
    $HOME_IMAGE = $_POST('HOME_IMAGE');
    $HOME_VIDEO_URL = $_POST('HOME_VIDEO_URL');

    $query = "UPDATE ANDREWSDREAMLLC.about_us SET 
        'HOME_PARAGRAPH_TEXT' = $HOME_PARAGRAPH_TEXT,
        'HOME_IMAGE' = $HOME_IMAGE,
        'HOME_VIDEO_URL' = $HOME_VIDEO_URL;";

    if (mysqli_query($conn, $query))
    {
        echo "success";
    }
    else 
    {
        echo "Error: " . $conn . "<br>" . mysqli_error($conn);
    }
?>