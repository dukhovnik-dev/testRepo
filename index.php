<?php

require 'libs/Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();


$app->get('/', function() {
          require_once("landing.php");
});
$app->get('/landing', function() {
          require_once("landing.php");
});
$app->get('/listing', function() {
          require_once("listing.php");
});
$app->get('/lista-drukarni', function() {
          require_once("listing.php");
});

$app->get('/single', function () use ($app) {

     require_once("landing.php");
});
$app->get('/:id', function ($pageID) use ($app) {
    require_once("single.php");
});


$app->run();
?>
