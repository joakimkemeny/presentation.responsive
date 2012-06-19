// @codekit-prepend "libs/jquery.js"
// @codekit-prepend "libs/jquery.animate.js"
// @codekit-prepend "libs/impress.js"
// @codekit-prepend "libs/rainbow.js"
// @codekit-prepend "libs/language/c.js"
// @codekit-prepend "libs/language/csharp.js"
// @codekit-prepend "libs/language/css.js"
// @codekit-prepend "libs/language/generic.js"
// @codekit-prepend "libs/language/html.js"
// @codekit-prepend "libs/language/javascript.js"
// @codekit-prepend "libs/language/lua.js"
// @codekit-prepend "libs/language/php.js"
// @codekit-prepend "libs/language/python.js"
// @codekit-prepend "libs/language/ruby.js"
// @codekit-prepend "libs/language/scheme.js"
// @codekit-prepend "libs/language/shell.js"

var $ = $ || {};
var Responsive = Responsive || {};

Responsive = (function ($) {
    "use strict";
    var Presentation = {};

    Presentation.loadDemo = function (step) {
        if (step.data("demo-loaded")) {
            return;
        }

        var browser = step.find(".browser");
        var addressBar = browser.find(".address div");
        browser.append("<iframe src='" + addressBar.text() + "' frameborder='0'></iframe>");

        var iframe = browser.find("iframe");
        iframe.load(function () {
            addressBar.text(this.src);
        });

        step.data("demo-loaded", true);
    };

    Presentation.loadSrc = function (step) {
        if (step.data("src-loaded")) {
            return;
        }

        $("code[data-src]", step).each(function (index, element) {
            var $element = $(element)
            var srcUrl = $element.data("src");
            var srcLang = $element.data("language");
            $.get(srcUrl, function (data) {
                if (srcLang === "text" || srcLang === "") {
                    $element.append(data);
                } else {
                    Rainbow.color(data, srcLang, function (highlighted) {
                        $element.append(highlighted);
                    });
                }
            }, "text");
        });

        step.data("src-loaded", true);
    };

    Presentation.resizeBrowser = function () {
        $(document).keypress(function (e) {
            if (e.keyCode == 46) {
                var $el;
                if (document.location.hash == "#/demo-1") {
                    $el = $('#demo-1 .browser');
                } else if (document.location.hash == "#/demo-2") {
                    $el = $('#demo-2 .browser');
                } else if (document.location.hash == "#/demo-3") {
                    $el = $('#demo-3 .browser');
                } else if (document.location.hash == "#/grid-2") {
                    $el = $('#grid-2 .browser');
                } else if (document.location.hash == "#/grid-4") {
                    $el = $('#grid-4 .browser');
                } else if (document.location.hash == "#/images-3") {
                    $el = $('#images-3 .browser');
                } else if (document.location.hash == "#/media-queries-5") {
                    $el = $('#media-queries-5 .browser');
                } else if (document.location.hash == "#/media-queries-5-2") {
                    $el = $('#media-queries-5-2 .browser');
                } else if (document.location.hash == "#/media-queries-6") {
                    $el = $('#media-queries-6 .browser');
                }

                if ($el.width() > 778) {

                    $el.animate({
                        width : 778
                    }, 3000, "linear");

                } else if ($el.width() > 490) {

                    $el.animate({
                        width : 490
                    }, 5000, "linear");

                } else if ($el.width() > 330) {

                    $el.animate({
                        width : 330
                    }, 3000, "linear");

                } else {
                    $el.animate({
                        width : 990
                    }, 3000, "linear");

                }
            }
        });
    };

    return Presentation;
}($));

$(function () {
    $(".step").on("impress:stepenter", function () {
        Responsive.loadSrc($(this));
        Responsive.loadDemo($(this));
    });

    Responsive.resizeBrowser();
});
