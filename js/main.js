$(document).ready(function () {
    var offset_about = $(".left").offset().top
    var offset_exp = $(".exp").offset().top
    var offset_skill = $(".skill").offset().top
    var offset_ide = $(".ide").offset().top
    var offset_exp = $(".exp").offset().top
    var offset_goal = $(".goal").offset().top
    var height_menu_top = $(".menu-header").offset().top
    
    // xu ly cuon chuot cho menu-top va back-to-top
    $(window).scroll(function (event) {
        var pos_body = $('html,body').scrollTop();
        
        if (pos_body > height_menu_top) {
            $('.menu-header').addClass('sticker-menu');
        }
        else {
            $('.menu-header').removeClass('sticker-menu');
        }
        if (pos_body > height_menu_top) {
            $('.btn-back-to-top').addClass('appear');
        }
        else {
            $('.btn-back-to-top').removeClass('appear');
        }
    });
    $('.btn-back-to-top').click(function (event) {
        $('html,body').animate({ scrollTop: 0 }, 1400);
    });
    // end xu ly cuon chuot cho menu-top va back-to-top

   

    // xu ly scoll cho menu
    $(".menu-header ul li:nth-child(1)").click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass( 'active' );

        $("html, body").animate({ scrollTop: offset_about - 200 }, 1000)
    });
    $(".menu-header ul li:nth-child(2)").click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass( 'active' );
        $("html, body").animate({ scrollTop: offset_exp  - 200}, 1000)
    });
    $(".menu-header ul li:nth-child(3)").click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass( 'active' );
        $("html, body").animate({ scrollTop: offset_skill  - 300 }, 1000)
    });
    $(".menu-header ul li:nth-child(4)").click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass( 'active' );
        $("html, body").animate({ scrollTop: offset_ide -300 }, 1000)
    });
    $(".menu-header ul li:nth-child(5)").click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass( 'active' );
        $("html, body").animate({ scrollTop: offset_goal -300}, 1000)
    });
    
    // left-content
    $(".icon-plus").click(function (e) { 
        e.preventDefault();
        $(this).parent().next().addClass("txt-box-move-in").css({display:"block"});
        $(this).addClass("none-plus")
    });
    $(".icon-up").click(function (e) { 
        e.preventDefault();
        $(this).parent().css({display:"block"})
        $(this).parent().slideUp()
        $(this).parent().removeClass("txt-box-move-in")
        $(this).parent().parent().find(".icon-plus").removeClass("none-plus")
        
    });
    // right-$(selector).clone(true);

});