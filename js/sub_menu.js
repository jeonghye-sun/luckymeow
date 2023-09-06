$(function () {


    $(".nav").mouseenter(function () {
        $(".sub").stop().slideDown();
        $(".sub_box").stop().slideDown();

    });
    $(".nav").mouseleave(function () {
        $(".sub").stop().slideUp();
        $(".sub_box").stop().slideUp();
    });

});