(function($) {
    $.fn.altImageIndex = function() {
        this.each(function(){
            $(this).after('<br>'+ $(this).attr("alt")); 
        });
        return this;
    };
})(jQuery);

$(document).ready(function() {
    $("img").altImageIndex();
})