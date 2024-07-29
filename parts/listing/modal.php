<!--<div id="modal" class="modal">
    <div class="modal__inner">
        <div class="container">

            <div class="modal__header">
                <div class="modal__row">
                    <a id="modal-close" onclick="modalClose()" >Zamknij</a>
                </div>
            </div>

            <div class="modal__body">
                <div class="modal__row">
                    <div class="modal__in" id="modal-in"></div>
                </div>
            </div>

            <div class="modal__footer">
                <div class="modal__row"></div>
            </div>

        </div>
    </div>
</div>
-->
<?php 

$tel =  isset($current) ? substr($current["Phone"], 0, 2)." ".substr($current["Phone"], 2, 3)." ".substr($current["Phone"], 5, 3)." ".substr($current["Phone"], 8, 3):"";
?>
<div class="modal fade" id="contact-info">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title"></h4>
      </div>
      <div class="modal-body text-center">
        <h3 class="modal-heading text-center">Dane kontaktowe do osoby dedykowanej do współpracy</h3>
        <h2 class="modal-phone"><?php echo $tel;?></h2>
        <h2 class="modal-email"><?php echo $current["Email"];?></h2>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
