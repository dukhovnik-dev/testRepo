<?php 
require_once('./inc/header.php');
require_once('./inc/read.php');   

?>

    <?php part('listing/head'); ?>

    <!-- PRIMARY -->
    <div id="primary">
        <div class="listing">

            <div class="listing__bckg">
            </div>


            <div class="listing__header">
                <div class="row section__header container">
                    <h2 class="title title--underline">
                        <small class="undertitle">Sieć współpracy</small> Dostępne drukarnie
                    </h2>
                </div>
            </div><!-- end .listing__header -->


            <?php part('listing/filters'); ?>


            <div class="listing__body">
                <div class="row listing__primary">
                    <div class="listing__main container">

                        <div class="listing__breadcrumbs">
                        </div>

                        <?php 
                         require_once(PARTS_DIR.'/listing/boxes.php');
                        ?>

                    </div>
                </div><!-- end .listing__primary -->
            </div><!-- end .listing__body -->


        </div><!-- end .listing -->
    </div>
    <!-- end #primary -->




    <?php part('listing/foot'); ?>

<?php require_once('./inc/footer.php'); ?>
