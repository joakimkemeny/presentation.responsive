// @codekit-prepend "../../js/libs/jquery.js"

(function () {
    "use strict";

    var Responsive = {

        /**
         * Attaches a click handler that toggles the side menu.
         */
        createMenu : function () {
            $(".menu").click(function () {
                var aside = $("aside");
                if (aside.css("left") === "-90%" || aside.css("left") !== "0px") {
                    aside.animate({ left : "0%" }, 1000);
                } else {
                    aside.animate({ left : "-90%" }, 1000);
                }
                return false;
            });
        }
    };

    $(function () {
        Responsive.createMenu();
    });
}());
