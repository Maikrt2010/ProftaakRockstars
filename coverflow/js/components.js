// verantwoordelijk om navbar en hero in te laden. 
// In elke html-template kun je dit script importeren en laden:
// <div id="naam_component"></div>
// vergeet niet ook jquery in te laden


$(function() {
    $("#hero").load("../components/hero.html");
    $("#navbar").load("../components/navbar.html");
    $("#videobar").load("../components/HomeVideo.html");
    
});