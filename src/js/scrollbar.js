import $ from 'jquery';
/*
    CUSTOM SCROLLBAR
*/

// Custom Scrollbar HTML
const $scrollHtml = '<div class="scroll__bar"><div class="scrollbar2"><div class="scrollbar2__bar"></div><div class="scrollbar2__point"></div></div></div>';

// Initialize custom scrollbar for all elements with class 'js-scrollbar'
function customScrollInit() {
    $(document).find('.js-scrollbar').each(function () {
        customScrollStart($(this));
    });
}

// Assign sizes and events
function customScrollStart(el) {
    el = customScrollElementBuild(el);
    el = customScrollElementResize(el);
    $(el.rl.okno).on("scroll", function () {
        customScrollElementOnScroll(el);
    });
}

// Build custom scrollbar elements
function customScrollElementBuild(el) {
    el.append($scrollHtml);
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

// Calculate sizes
function customScrollElementResize(el) {
    // Calculate relative size of the list
    el.rl.okno.height = $(el.rl.okno).outerHeight();
    el.rl.lista.height = $(el.rl.lista).outerHeight();

    // Hide/show scrollbar
    if (el.rl.okno.height > el.rl.lista.height) {
        el.fake.hide();
    } else {
        el.fake.show();
    }

    // Assign height to the scrollbar
    el.fake.padd = parseInt(el.fake.css('top')) * 2;
    el.fake.startHeight = parseInt(el.rl.okno.height) - parseInt(el.fake.padd);
    el.fake.css('height', el.fake.startHeight);

    // Calculate list height
    el.rl.size = parseInt(el.rl.okno.height) / parseInt(el.rl.lista.height);
    el.rl.sizeProc = el.rl.size * 100 + '%';
    el.rl.hmax = el.rl.lista.height - el.rl.okno.height;
    el.rl.oneProc = el.rl.hmax / 100;

    // Assign % value height to fake.point
    el.fake.point.css('height', el.rl.sizeProc);

    // Calculate scrollbar sizes
    el.fake.bar.height = $(el.fake.bar).outerHeight();
    el.fake.point.height = $(el.fake.point).outerHeight();
    el.fake.maxPos = parseInt(el.fake.bar.height) - parseInt(el.fake.point.height);
    el.fake.size = parseInt(el.fake.point.height) / parseInt(el.fake.bar.height);
    el.fake.sizeProc = el.fake.size * 100 + '%';
    el.fake.hmax = el.fake.bar.height - el.fake.point.height;
    el.fake.oneProc = el.fake.hmax / 100;

    return el;
}

// After scroll event
function customScrollElementOnScroll(el) {
    // Get position RL
    el.rl.pos = el.rl.okno.scrollTop();
    el.rl.posProc = el.rl.pos / el.rl.oneProc;

    // Calculate position for point
    el.fake.posProc = el.rl.posProc;
    el.fake.pos = el.fake.posProc * el.fake.oneProc;
    if (el.fake.pos > el.fake.maxPos) { el.fake.pos = el.fake.maxPos; }

    // Assign position to point
    el.fake.point.css('top', el.fake.pos);
}

$(document).ready(function () {
    $(window).resize(function () {
        customScrollInit();
    });
    customScrollInit();
});
