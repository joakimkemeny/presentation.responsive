// @codekit-prepend "libs/jquery.js"

(function () {
    "use strict";

    var Responsive = {

        /**
         * Attaches a key handler to resize the browser. The event is forwarded to the parent.
         */
        resizeBrowser : function () {
            if (window.parent) {
                $(document).keypress(function (e) {
                    if (e.keyCode === 46) {
                        parent.postMessage("resizeBrowser", "*");
                    }
                });
            }
        }
    };

    $(function () {
        Responsive.resizeBrowser();
    });
}());
