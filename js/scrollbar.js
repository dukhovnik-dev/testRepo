
/*
    CUSTOM SCROLLBAR
*/

//listing
function customScrollInit(){
    $(document).find('.js-scrollbar').each(function(){
        customScrollStart( $(this) );
	});
}

//przypisz wielkosci oraz event
function customScrollStart( el ){
    el = customScrollElementBuild( el );
    el = customScrollElementResize( el );
    $(el.rl.okno).on("scroll", function(){
		customScrollElementOnScroll( el );
	});
}

//stworz obiekty
function customScrollElementBuild( el ){
    $scrollHtml = '<div class="scroll__bar"><div class="scrollbar2"><div class="scrollbar2__bar"></div><div class="scrollbar2__point"></div></div></div>';
    el.append($scrollHtml );
    el.rl = {};
    el.fake = {};
    el.rl.okno = el.children('div');
    el.rl.lista = el.rl.okno.children('ul');
    el.fake = el.children('.scroll__bar');
    el.fake.scrollbar = el.fake.children('.scrollbar2');
    el.fake.bar = el.fake.scrollbar.children('.scrollbar2__bar');
    el.fake.point = el.fake.scrollbar.children('.scrollbar2__point');
    return el;
}

//przelicz rozmiary
function customScrollElementResize( el ){

    //Oblicz wielkosc wzgledna listy
    el.rl.okno.height = $(el.rl.okno).outerHeight();
    el.rl.lista.height = $(el.rl.lista).outerHeight();

    //ukryj/pokaz scroll
    if( el.rl.okno.height > el.rl.lista.height ){
        el.fake.hide();
    }else{
        el.fake.show();
    }

    //nadaj wysokość scrollbarowi
    el.fake.padd = parseInt(el.fake.css('top')) * 2;
    el.fake.startHeight = parseInt(el.rl.okno.height) - parseInt(el.fake.padd);
    el.fake.css('height', el.fake.startHeight);

    //przelicz wysokosc listy
    el.rl.size = parseInt(el.rl.okno.height) / parseInt(el.rl.lista.height);
    el.rl.sizeProc = el.rl.size * 100 + '%';
    el.rl.hmax = el.rl.lista.height - el.rl.okno.height;
    el.rl.oneProc = el.rl.hmax / 100;

    //przypisz % wartosc wysokosci do fake.point
    el.fake.point.css('height', el.rl.sizeProc);

    //Obllicz wielkosci scrollbar
    el.fake.bar.height = $(el.fake.bar).outerHeight();
    el.fake.point.height = $(el.fake.point).outerHeight();
    el.fake.maxPos = parseInt(el.fake.bar.height) - parseInt(el.fake.point.height);
    el.fake.size = parseInt(el.fake.point.height) / parseInt(el.fake.bar.height);
    el.fake.sizeProc = el.fake.size * 100 + '%';
    el.fake.hmax = el.fake.bar.height - el.fake.point.height;
    el.fake.oneProc = el.fake.hmax / 100;

    return el;
}

//after scroll
function customScrollElementOnScroll( el ){

    //pobierz pozycje RL
    el.rl.pos = el.rl.okno.scrollTop();
    el.rl.posProc = el.rl.pos / el.rl.oneProc;

    //oblicz pozycje dla point
    el.fake.posProc = el.rl.posProc;
    el.fake.pos = el.fake.posProc * el.fake.oneProc;
    if( el.fake.pos > el.fake.maxPos ){ el.fake.pos = el.fake.maxPos; };

    //przypisz pozycje do point
    el.fake.point.css('top', el.fake.pos);

}

$(document).ready(function(){
    $(window).resize(function(){
        customScrollInit();
    });
    customScrollInit();
});
