(function($) {
    $.fn.sub = function() {
        this.each(function() {
            var pLorem = $(this).html();
            pLorem = pLorem.replace(/e/g, 'enter');
            pLorem = pLorem.replace(/i/g, 'inis');
            pLorem = pLorem.replace(/o/g, 'omber');
            pLorem = pLorem.replace(/u/g, 'ufter');
            pLorem = pLorem.replace(/a/g, 'ais');           
            $(this).html(pLorem);
        });
        return this;
    }
})(jQuery);

$(document).ready(function() {
    $('p').sub();
})