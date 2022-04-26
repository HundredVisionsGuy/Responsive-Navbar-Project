/* When the page loads, check for navbar */
window.onload = function() {
    var nav = document.getElementById("global-nav");
    var screenWidth = window.innerWidth;
    if (screenWidth < 600) {
        if (nav.classList.contains("open")) {
            nav.classList.remove("open");
        }
    }
}

function toggleNav() {
    var nav = document.getElementById("global-nav");
    nav.classList.toggle("open");
}