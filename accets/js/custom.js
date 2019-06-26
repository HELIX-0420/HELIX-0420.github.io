var dark = false;

document.querySelector(".switch").addEventListener("click", function() {
    if (dark === true) {
        document.querySelector(".theme").setAttribute("href", "accets/css/main-lite.css");
        document.querySelector(".switch").innerHTML = "🌑";
        dark = false;
    } else {
        document.querySelector(".theme").setAttribute("href", "accets/css/main-dark.css");
        document.querySelector(".switch").innerHTML = "☀";
        dark = true;
    }
});
