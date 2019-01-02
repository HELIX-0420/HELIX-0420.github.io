var currentDate = new Date();
var currentTime = currentDate.getTime();
var Move1 = document.querySelector(".movie-1");


if (currentTime <= 12) {
  Move1.innerHTML = `
  <img src="accets/img/Avengers.jpg" alt="">
  `
} else if (currentMonth >= 24) {
  Move1.innerHTML = `
  <img src="accets/img/bee.jpg" alt="">
  `
}
