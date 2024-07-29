/*
	MENU
*/

//Space
function spaceHeader(){
    $headerHeight = $("#c-header").outerHeight();
    $(".space-header").css('height', $headerHeight+'px');
}

function spaceInit(){
    spaceHeader();
}

function hamburgerInit(){
    $("#hamburger").click(function(){
		$("#c-navbar").toggleClass('active');
    });
}

$(document).ready(function(){
	hamburgerInit()
    spaceInit();
    $(window).resize(function(){
        spaceInit();
    });
});



