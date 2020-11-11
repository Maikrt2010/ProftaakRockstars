// verantwoordelijk om navbar en hero in te laden. 
// In elke html-template kun je dit script importeren en laden:
// <div id="naam_component"></div>


$(function() {
    $("#navbar").load("components/navbar.html");
    $("#hero").load("components/hero.html");
});