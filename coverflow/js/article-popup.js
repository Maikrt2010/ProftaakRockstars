let popup = parent.document.getElementById("popup");
let targetNode = popup;
let observer = new MutationObserver(function() {
    if (targetNode.style.display != 'none') {
        $("html,body").scrollTop(0);
    }
});
observer.observe(targetNode, { attributes: true, childList: true });