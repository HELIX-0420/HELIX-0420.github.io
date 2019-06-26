var dark = false;

document.querySelector(".switch").addEventListener("click", function() {
    if (getCookie(dark) == true) {
        document.querySelector(".theme").setAttribute("href", "assets/css/main-lite.css");
        document.querySelector(".switch").innerHTML = "🌑";
        document.cookie = dark = false;
    } else {
        document.querySelector(".theme").setAttribute("href", "assets/css/main-dark.css");
        document.querySelector(".switch").innerHTML = "🌞";
        document.cookie = dark = true;
    }
});

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
