/*
	MENU
*/

//Space
import $ from 'jquery';

// Space header function
function spaceHeader() {
    const $headerHeight = $("#c-header").outerHeight();
    $(".space-header").css('height', $headerHeight + 'px');
}

// Initialize space header
function spaceInit() {
    spaceHeader();
}

// Initialize hamburger menu
function hamburgerInit() {
    $("#hamburger").click(function () {
        $("#c-navbar").toggleClass('active');
    });
}

$(document).ready(function () {
    // Initialize functions on document ready
    hamburgerInit();
    spaceInit();

    // Re-initialize space header on window resize
    $(window).resize(function () {
        spaceInit();
    });
});




