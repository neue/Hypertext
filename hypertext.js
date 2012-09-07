$(document).ready(function() {
    var $win = $(window);
    var menuShown = true;
    $win.scroll(function () {
        if($win.scrollTop() > 100){
                $("#header").addClass("hidden");
                menuShown = false;
        } else {
                $("#header").removeClass("hidden");
                menuShown = true;
        }
    });
    
    $("#aboutlink").click(function() {
        $("#about").addClass("open");
        return false;
    });
    $("#closelink").click(function() {
        $("#about").removeClass("open");
        return false;
    });
    $('#backtotop').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });

    
});
