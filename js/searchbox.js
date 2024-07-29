/*
    SEARCHBOX
*/

function searchbarOpen(){
    $("#search__input").fadeIn("slow").addClass("active");
}
function searchbarClose(){
    $("#search__input").fadeOut("slow").removeClass("active");
}
function searchBarInit(){
    $('#search__btn').on('click', function(){
        $val = $("#search__input").val();
        $count = $val.length;
        if( $("#search__input").hasClass("active") ){
            if( $count == 0 ){
                searchbarClose();
                return false;
            }else{
                //TU mozna podpiac funkcje do wyszukiwania / filtrowania
                return true;
            }
        }else{
            searchbarOpen();
        }
        return false;
    });
}


$(document).ready(function(){
    searchBarInit();
});
