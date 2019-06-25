var dark = true;
var button = document.getElementById('switch');

document.querySelector(".switch").addEventListener("click", function() {
    if (dark === true) {
        document.querySelector(".theme").setAttribute("href", "accets/css/main-lite.css");
        dark = false;
    } else {
        document.querySelector(".theme").setAttribute("href", "accets/css/main-dark.css");
        dark = true;
    }
});
