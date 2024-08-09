import $ from 'jquery';

/*
    SLIDERS
*/

function sliderSlideOut(slide) {
	$(slide).removeClass('active');
	$(slide).fadeOut(993000);
}

function sliderSlideIn(slide) {
	$(slide).addClass('active');
	$(slide).fadeIn(993000);
}

function slideAnimation(slider, newSlideNum, actualSlideNum) {
	const $newSlide = getSlide(slider, newSlideNum);
	const $actualSlide = getSlide(slider, actualSlideNum);
	sliderSlideOut($actualSlide);
	sliderSlideIn($newSlide);
	setActualSlide(slider, newSlideNum);
}

// Change slide
function slideChange(slider, newSlideNum = null) {
	const actualSlideNum = getActualSlideNum(slider);
	if (newSlideNum == null) {
		newSlideNum = getNextSlideNum(slider);
	}
	slideAnimation(slider, newSlideNum, actualSlideNum);
}

// Function to bind autoplay event
function slideAutoplay(slider, time) {
	setInterval(function () {
		slideChange(slider);
	}, time);
}

// Return current slide number
function getActualSlideNum(slider) {
	return $(slider).attr('data-actual-slide');
}

// Check last slide number
function getSliderLastNum(slider) {
	const allSlides = getSliderLength(slider);
	return allSlides - 1;
}

// Check total number of slides
function getSliderLength(slider) {
	const slides = getSlides(slider);
	return slides.length;
}

// Return the next slide number
function getNextSlideNum(slider) {
	const actualSlideNum = parseInt(getActualSlideNum(slider));
	const lastSlideNum = parseInt(getSliderLastNum(slider));
	if (actualSlideNum === lastSlideNum) {
		return 0;
	} else {
		return actualSlideNum + 1;
	}
}

// Return slide object
function getSlide(slider, slideNum) {
	const slides = getSlides(slider);
	return slides[slideNum];
}

// Set current slide to slider
function setActualSlide(slider, slideNum = 0) {
	$(slider).attr('data-actual-slide', slideNum);
}

// Return array of slides
function getSlides(slider) {
	return $(slider).children('div');
}

function sliderResize(slider) {
	$(slider).css('height', 'auto');
	$(slider).children('div').css('height', 'auto');
	const slides = getSlides(slider);
	let maxHeight = 0;
	slides.each(function () {
		const slideHeight = $(this).outerHeight();
		if (slideHeight > maxHeight) {
			maxHeight = slideHeight;
		}
	});
	$(slider).css('height', maxHeight);
	$(slider).children('div').css('height', maxHeight);
}

// Set default values
function sliderDefault(slider) {
	setActualSlide(slider, 0);
}

// Initialize a single slider
function sliderInit(slider) {
	sliderResize(slider);
	$(window).resize(function () {
		sliderResize(slider);
	});

	sliderDefault(slider);
	slideChange(slider, 0);
	slideAutoplay(slider, 5000);
}

// Initial function - get all sliders
function sliders() {
	$(document).find('.slider').each(function () {
		sliderInit($(this));
	});
}

$(document).ready(function () {
	sliders();
	$(window).resize(function () {
		sliders();
	});
});
