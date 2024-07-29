<?php require_once('function.php'); ?>

<!DOCTYPE html>
<html lang="pl">
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-138654119-1"></script>
<script>
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', 'UA-138654119-1');
</script>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moduł Podzlecanie druku - IwarePrint</title>
    <link rel="shortcut icon" type="image/icon-x" href="./img/favicon.ico">
    <link rel="manifest" href="./img/manifest.json">
    <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&amp;subset=latin-ext" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="./css/modal.css">
    <link rel="stylesheet" type="text/css" href="./css/style.css?v=3.2">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="./js/menu.js"></script>
    <script src="./js/scrollbar.js"></script>
    <script src="./js/scrolling.js"></script>
    <script src="./js/searchbox.js"></script>
    <script src="./js/sliders.js"></script>
    <script src="./js/filters.js"></script>
    <script type='text/javascript'>
        jQuery(window).on('load', function () {
            var fc_JS=document.createElement('script');
            fc_JS.type='text/javascript';
            fc_JS.src='https://wchat.eu.freshchat.com/js/widget.js?t='+Date.now();
            (document.body?document.body:document.getElementsByTagName('head')[0]).appendChild(fc_JS);
            window.fcSettings = { token:'7a74cec9-9eeb-4940-9513-426f1ddbe00b', host : 'https://wchat.eu.freshchat.com', siteId: 'podzlecdruk.pl', locale: 'pl'};
        })
    </script>
</head>
<body>

<div id="page" class="page">
