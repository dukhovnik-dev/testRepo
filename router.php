<?php

$url = strtolower($_SERVER["REQUEST_URI"]);
while(preg_match("/\/\//",$url)) {
    $url = str_replace("//","/",$url);
}

$url = explode("?",$url);
$url = explode("/",$url[0]);

array_shift($url);

//print_r($url);

if($url[2] == "") {
    echo "home";
} elseif($url[2] == "listing") {
    echo "listing";
} else {
    echo "404";
}

?>