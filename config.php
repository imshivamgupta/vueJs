<?php
    $dbhost = 'localhost';
    $dbuser = 'root';
    $dbpass = '';
    $dbname = 'vuejs';
    date_default_timezone_set('Asia/Kolkata');
    $conn = mysqli_connect ($dbhost, $dbuser, $dbpass, $dbname);
    if (mysqli_connect_errno()){
        echo "Error : " . mysqli_connect_error();
    }
    mysqli_set_charset($conn, 'utf8');
?>
