var mobileBreakpoint = 600;

// When the page loads, add an open class to nav if screen is wide enough.
window.onload = function() {
    var screenWidth = window.innerWidth;
    var globalNavbar = document.getElementById("global-nav");
    var toggle = document.getElementById("menu-toggle");

    // add 'open' class to the ul in the navbar if wider than the breakpoint
    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
        toggle.classList.add("open");
    }
    // add a toggle click function, which serves as an on-off button
    toggle.onclick = function() {
        if (globalNavbar.classList.contains("open")) {
            globalNavbar.classList.remove("open");
        }
        else {
            globalNavbar.classList.add("open");
        }
    }
}
window.onresize = function() {
    var screenWidth = window.innerWidth;
    
    var globalNavbar = document.getElementById("global-nav");
    var toggle = document.getElementById("menu-toggle");

    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
        toggle.classList.add("open");
    }
    else {
        globalNavbar.classList.remove("open");
        toggle.classList.remove("open");
    }
}