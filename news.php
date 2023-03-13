<?php

$host = "localhost";
    $db_user = "root";
    $db_pass = null;
    $db_name = "news_db";
 
$result = $mysqli->prepare("SELECT * FROM news;");
$result->execute();
$array=$result->get_result();

$news = array();

while($row = $array->fetch_assoc()) {
    $news[] = $row;
}
echo json_encode($news);
?>