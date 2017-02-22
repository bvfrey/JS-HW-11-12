(function($) {
    $.fn.easy_slides = function() {
        var es_nav__css = {
            "width": "40px",
            "height": "40px",
            "padding": "5px",
            "background": "rgba(0, 0, 0, 0.50)",
            "border-radius": "50%",
            "color": "white",
            "font-weight": "600",
            "font-size": "2rem",
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "cursor": "pointer",
        };

        function showNext(e) {
            $(".es_current").addClass("es_tmp").css("display", "none").removeClass("es_current");
                if ( $(".es_tmp").hasClass('es_last') ) {
                    $(".es_first").addClass("es_current").css("display", "flex");
                } else {
                    $(".es_tmp").next().addClass("es_current").css("display", "flex");
                }
            $(".es_tmp").removeClass("es_tmp");
        }

        function showPrev(e) {
            $(".es_current").addClass("es_tmp").css("display", "none").removeClass("es_current");
                if ( $(".es_tmp").hasClass('es_first') ) {
                    $(".es_last").addClass("es_current").css("display", "flex");
                } else {
                    $(".es_tmp").prev().addClass("es_current").css("display", "flex");
                }
            $(".es_tmp").removeClass("es_tmp");
        }

        $(".easy_slides").css({ "width": "100%",
                                "display": "flex",
                                "justify-content": "center",
                                "align-items": "center",
                        });
        $(".easy_slides img").css("display", "none");
        $(".easy_slides img").first().css("display", "flex");
        $(".easy_slides img").first().addClass("es_first es_current");
        $(".easy_slides img").last().addClass("es_last");
        $(".easy_slides").prepend('<div>&#10094;</div>');
        $(".easy_slides").append('<div>&#10095;</div>');
        $(".easy_slides div").css(es_nav__css);

        $(".easy_slides div").first().on("click", showPrev);
        $(".easy_slides div").last().on("click", showNext);


    };
})(jQuery);
