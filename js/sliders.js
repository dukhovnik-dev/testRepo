
/*
SLIDERS
*/

function sliderSlideOut( slide ){
	$( slide ).removeClass('active');
	$( slide ).fadeOut(993000);
}

function sliderSlideIn( slide ){
	$( slide ).addClass('active');
	$( slide ).fadeIn(993000);
}

function slideAnimation( slider, newSlideNum, actualSlideNum ){
	$newSlide = getSlide( slider, newSlideNum );
	$actualSlide = getSlide( slider, actualSlideNum );
	sliderSlideOut( $actualSlide );
	sliderSlideIn( $newSlide );
	setActualSlide( slider, newSlideNum );
}

//zmienia slajd
function slideChange( slider, newSlideNum = null ){
	actualSlideNum = getActualSlideNum( slider );
	if( newSlideNum == null ){
		newSlideNum = getNextSlideNum( slider );
	}
	slideAnimation( slider, newSlideNum, actualSlideNum );
}

//funkcja podpinjaca zdarzenie autoplay
function slideAutoplay( slider, time ){
    setInterval( function(){
        slideChange( slider );
    }, time );
}

//zwraca numer aktualnego slidu
function getActualSlideNum( slider ){
	return $( slider ).attr('data-actual-slide' );
}

//sprawdz numer ostatniego slidu
function getSliderLastNum( slider ){
	$all = getSliderLength( slider );
	return $all -1;
}

//sprawdz ile jest wszystkich slidow
function getSliderLength( slider ){
	$slides = getSlides( slider );
	return $slides.length;
}

//zwraca numer kolejnego slidu
function getNextSlideNum( slider ){
	$actual = getActualSlideNum( slider );
	$last = getSliderLastNum( slider );
	$actual = parseInt( $actual );
	$last = parseInt( $last );
	if( $actual == $last ){
		$next = 0;
	}else{
		$next = $actual + 1;
	}
	return $next;
}

//zwraca objekt slide
function getSlide( slider, slideNum ){
	$slides = getSlides( slider );
	$slide = $slides[slideNum];
	return $slide;
}


//przypisz aktualny slajd do slidera
function setActualSlide( slider, slideNum = 0 ){
	$( slider ).attr('data-actual-slide', slideNum );
}

//zwraca tablice z elementami
function getSlides( slider ){
	return $( slider ).children('div');
}

function sliderResize( slider ){
    $(slider).css('height', 'auto' );
    $(slider).children('div').css('height', 'auto' );
	$slides = getSlides( slider );
	$hLarge = 0;
    var i;
    for (i = 0; i < $slides.length; i++) {
		$thisHeight = $($slides[i]).outerHeight();
		if( $thisHeight > $hLarge ){
			$hLarge = $thisHeight;
		}
    }
    $(slider).css('height', $hLarge );
    $(slider).children('div').css('height', $hLarge );
}

//nadaj domyslne wartosci
function sliderDefault( slider ){
	setActualSlide( slider, 0 );
}

//start pojedynczego slidera
function sliderInit( slider ){

	sliderResize( slider );
	$(window).resize(function(){
        sliderResize( slider );
   });

	sliderDefault( slider );
	slideChange(slider, 0);
	slideAutoplay( slider, 5000 );
}

//funkcja startowa - pobiera wszystkie slidery
function sliders(){

   $(document).find('.slider').each(function(){
        sliderInit( $(this) );
   });
}


$(document).ready(function(){
    sliders();
    $(window).resize(function(){

    });
});
