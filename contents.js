
$(document).ready(function(){
    $('#goAbout').click(function() {
        $('html,body').animate({
                scrollTop: $('.about').offset().top},
            'slow');
    });
    $('#goProjects').click(function() {
        $('html,body').animate({
                scrollTop: $('.projects').offset().top},
            'slow');
    });
    $('#goContact').click(function() {
        $('html,body').animate({
                scrollTop: $('.contact').offset().top},
            'slow');
    });
});
