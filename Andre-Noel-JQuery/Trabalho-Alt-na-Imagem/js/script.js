(function($) {
    $.fn.altImageIndex = function() {
        $(this).after('<br>'+ $(this).attr("alt"));
    };
})(jQuery);

$(document).ready(function() {
    $("img").altImageIndex();
})