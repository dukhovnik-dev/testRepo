import $ from 'jquery';

$(document).ready(function () {
    function modalContent(content) {
        const modal = $("#modal");
        const modalIn = $("#modal-in");
        $(modalIn).html($(content).clone());
    }

    function modalOpen(content) {
        const modal = $("#modal");
        $(modal).css('display', 'block');
        modalContent(content);
    }

    function modalClose() {
        const modal = $("#modal");
        $(modal).css('display', 'none');
    }

    function filterClick(a) {
        const $el = $(a).parent('.filters__el');
        const $list = $($el).find('.filters__submenu-list');
        if ($list.length > 0) {
            modalOpen($list);
        }
    }

    $(".filters__a").click(function () {
        if ($(window).width() < 992) {
            filterClick($(this));
        }
    });

    if (window.location.hash) {
        if (window.location.href.indexOf("parent_") > -1) {
            console.log("parentCat Detected");
            let l = decodeURI(window.location.hash);
            l = l.replace("#parent_", "");
            l = l.replace("-", " ");
            console.log(l);
            $.post(
                "inc/read.php",
                { ParentFilter: l }).done(function (data) {
                console.log(data);
                const result = JSON.parse(data);
                $(".listing__box").fadeOut();
                if (result.length > 0) {
                    result.forEach(function (item) {
                        $('.listing__box[data-id="' + item + '"]').fadeIn();
                    });
                } else {
                    $(".listing__box").fadeOut();
                }
            });
        } else {
            let l = decodeURI(window.location.hash);
            l = l.replace("#", "");
            l = l.replace("-", " ");
            console.log(l);
            $.post(
                "inc/read.php",
                { filter: l }).done(function (data) {
                const result = JSON.parse(data);
                $(".listing__box").fadeOut();
                if (result.length > 0) {
                    result.forEach(function (item) {
                        $('.listing__box[data-id="' + item + '"]').fadeIn();
                    });
                } else {
                    $(".listing__box").fadeOut();
                }
            });
        }
        window.location.hash = '';
    }

    $("a.filters__sub-a").on("click", function (e) {
        e.preventDefault();
        const filter = $(this).text().toLowerCase();
        $.post(
            "inc/read.php",
            { filter: filter }).done(function (data) {
            console.log(data);
            const result = JSON.parse(data);
            $(".listing__box").fadeOut();
            if (result.length > 0) {
                result.forEach(function (item) {
                    $('.listing__box[data-id="' + item + '"]').fadeIn();
                });
            } else {
                $(".listing__box").fadeOut();
            }
        });
    });

    $("a.filters__a").on("click", function (e) {
        e.preventDefault();
        const parentFilter = $(this).text().toLowerCase();
        console.log(parentFilter);
        $.post(
            "inc/read.php",
            { ParentFilter: parentFilter }).done(function (data) {
            console.log(data);
            const result = JSON.parse(data);
            $(".listing__box").fadeOut();
            if (result.length > 0) {
                result.forEach(function (item) {
                    $('.listing__box[data-id="' + item + '"]').fadeIn();
                });
            } else {
                $(".listing__box").fadeOut();
            }
        });
    });
});
