// verantwoordelijk om navbar en hero in te laden. 
// In elke html-template kun je dit script importeren en laden:
// <div id="naam_component"></div>
// vergeet niet ook jquery in te laden


$(function() {
    $("#navbar").load("../components/navbarNew.html");
    // $("#hero").load("../components/hero.html");
    $("#videobar").load("../components/HomeVideo.html");
    
});