<?php require_once("./inc/read.php");?>
<div class="listing__boxes">
    <?php 
    foreach ($printHouses as $item){
        echo '<div class="listing__box" data-id="'.$item["Print_ID"].'">'.
        '<a class="lbox" href="./'.$item["Permalink"].'">'.
            '<div class="lbox__tag">'.$item["Name"].'</div>'.
            '<div class="lbox__main">'.
                '<div class="lbox__main-inner">'.
                    '<div class="lbox__logo">'.
                        '<img class="lbox__img" src="'.'./img/print/'.$item["Logo"].'" alt="logo" />'.
                    '</div>'.
                '</div>'.
            '</div>'.
            '<div class="lbox__site">'.
                '<p class="lbox__site-txt">'.$item["URL"].'</p>'.
                '<i class="lbox__i icon icon--arrow-next"></i>'.
           '</div>'.
        '</a>'.
    '</div>';    
    }

    ?>
        <div class="listing__box">
        <a class="lbox" href="#">
            <div class="lbox__tag">Miejsce na Twoją reklamę</div>
            <div class="lbox__main">
                <div class="lbox__main-inner">
                    <div class="lbox__logo">
                        <p class="lbox__special_text">Miejsce na Twoją reklamę</p>
                    </div>
                </div>
            </div>
            <div class="lbox__site">
                <p class="lbox__site-txt">Miejsce na Twoją reklamę</p>
                <i class="lbox__i icon icon--arrow-next"></i>
           </div>
        </a>
    </div>   
</div><!-- end listing__boxes -->
