// @codekit-prepend "../../js/libs/jquery.js"

var $ = $ || {};
var Responsive = Responsive || {};

Responsive.Demo = (function ($) {
    "use strict";
    var Demo = {};

    Demo.createMenu = function () {

        $(".menu").click(function () {

            var aside = $("aside");
            if (aside.css("left") === "-90%") {
                aside.animate({
                    left : "0%"
                }, 1000);
            } else {
                aside.animate({
                    left : "-90%"
                }, 1000);
            }

            return false;
        });
    };


    return Demo;

}($));

$(function () {
    Responsive.Demo.createMenu();
});
