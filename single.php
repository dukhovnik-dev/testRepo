<?php 
    require_once('./inc/header.php');
    require_once("./inc/read.php");
foreach ($printHouses as $id => $prt) {
            if($prt["Permalink"] === $pageID){
               $current = $prt;
            }
        }
    //$current = $printHouses[$pageID];
    $currentProducts =array();
        foreach ($productsDuplicated as $id => $res) {
            if(!isset($current)){
                header('Location: /');
                exit();
            }
            if($res["Print_ID"] === $current["Print_ID"]){
                $currentProducts[] = $res;
            }
        }
 ?>

    <?php part('listing/head'); ?>

    <!-- PRIMARY -->
    <div id="primary">
        <div class="listing">

            <div class="listing__bckg">
            </div>

            <div class="listing__header">
                <div class="c-row section__header c-container">
                    <h2 class="title title--underline">
                        <small class="undertitle">Sieć współpracy</small> Dostępne drukarnie
                    </h2>
                </div>
            </div><!-- end .listing__header -->
            <?php part('listing/filters'); ?>
            <div class="listing__body">

                <div class="listing__breadcrumbs c-container">
                    <a class="btn--back" href="./lista-drukarni" >
                        <i class="icon-arrow-back"> < </i>  Lista drukarni
                    </a>
                </div><!-- end .listing__breadcrumbs -->

                    <div class="c-row listing__primary c-container">

                    <div class="listing__main2">
                        <div class="listing__box">
                            <div class="lbox">
                                <div class="lbox__tag"><?php echo $current["Name"]?></div>
                                <div class="lbox__main">
                                    <div class="lbox__main-inner">
                                        <div class="lbox__logo">
                                            <img class="lbox__img" src=<?php echo "./img/print/".$current["Logo"]?> alt="logo" />
                                        </div>
                                    </div>
                                </div>
                                <div class="lbox__site">
                                    <p class="lbox__site-txt"><?php echo $current["URL"]?></p>
                                </div>
                                <div class="lbox__buttons">
                                    <a class="c-btn btn--primary btn--full" data-toggle="modal" data-target="#contact-info" href="">Współpracuj</a>
                                    <div style="height: 18px;"></div>
                                    <a class="c-btn btn--secondary btn--full" href="https://iwareprint.pl/uruchom" target="_blank">Uruchom system IwarePrint</a>
                                </div>
                            </div>
                        </div>
                    </div><!-- end .listing__main2 -->

                    <div class="listing__aside">
                        <div class="scroll js-scrollbar">
                            <div class="services">
                                <ul class="services__list">
                                    <?php 
                                    foreach ($currentProducts as $item) {
                                     echo  '<li class="services__el">'.
                                            '<a class="services__a" href="'.$item["Product_URL"].'">'.
                                                '<span class="services__arrow"></span>'.
                                                '<span class="services__name">'.$item["Product"].'</span>'.
                                                '<span class="services__rabat">Rabat: </span>'.
                                                '<span class="services__rabat-type">'.$item["Discount"].' </span>'.
                                                '<span
                                                    class="services__realzation"> termin realizacji:';
                                                    if (strpos($item["Realization"], ',') !== false){ 
                                                        $item["Realization"] = explode(",", $item["Realization"]);
                                                        foreach ($item["Realization"] as $realization ) {
                                                            echo '<span class="services__realization__item">'.$realization.'</span>';
                                                        }                                                   
                                                    }else{
                                                        echo '<span class="services__realization__item">'.$item["Realization"].'</span>';
                                                    }
                                                echo '</span>'.
                                            '</a>'.
                                        '</li>';
                                    }
                                    ?>
                                </ul>
                            </div>
                        </div>
                    </div><!-- end .listing__aside -->

                </div><!-- end .listing__primary -->

            </div><!-- end .listing__body -->

        </div><!-- end .listing -->
    </div>
    <!-- end #primary -->
<script type="text/javascript">
    $(document).ready(function(){
        $(".filters__sub-a").each(function(){
            $(this).attr("href","./lista-drukarni#"+$(this).text().toLowerCase().replace(" ","-"));
        });
          $(".filters__a").each(function(){
            $(this).attr("href","./lista-drukarni#parent_"+$(this).text().toLowerCase().replace(" ","-"));
        });
    });
</script>
    <?php 
    require_once(PARTS_DIR.'/listing/modal.php');
    part('listing/foot'); ?>

<?php require_once('./inc/footer.php'); ?>
