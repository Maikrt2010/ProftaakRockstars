let popup = parent.document.getElementById("popup");
let targetNode = popup;

//ervoor zorgen dat de popup altijd naar boven is gescrolled als ie wordt geopend.
let observer = new MutationObserver(function() {
    if (targetNode.style.display != 'none') {
        $("html,body").scrollTop(0);
    }
});
observer.observe(targetNode, { attributes: true, childList: true });


//link naar artikel in knop
let button = document.getElementById("articleButton");
button.href = "http://127.0.0.1:5500/coverflow/public/article.html?article="