// var circle = document.getElementById("circle");

// var leftPos = 0;
// var stop_button = document.getElementById("stop");
// var start_button = document.getElementById("start");
// var reset_button = document.getElementById("reset");

// function move() {
//   leftPos++;
//   circle.style.left = leftPos + "px";
//   if (leftPos === window.innerWidth - 110) {
//     clearInterval(moveCircle);
//   }
// }

// var stop = function () {
//   clearInterval(moveCircle);
// };

// var start = function () {
//   moveCircle = setInterval(move, 10);
// };

// var reset = function () {
//   leftPos = 0;
//   circle.style.left = leftPos + "px";
// };

// stop_button.addEventListener("click", stop);
// start_button.addEventListener("click", start);
// reset_button.addEventListener("click", reset);

var circle = document.getElementById("circle");
var leftPos = 0;
var stop_button = document.getElementById("stop");
var start_button = document.getElementById("start");
var reset_button = document.getElementById("reset");

function move() {
  leftPos++;
  circle.style.left = leftPos + "px";
  if (leftPos === window.innerWidth - 110) {
    clearInterval(moveCircle);
  }
}

var stop = function () {
  clearInterval(moveCircle);
};

var start = function () {
  moveCircle = setInterval(move, 10);
};

var reset = function () {
  leftPos = 0;
  circle.style.left = leftPos + "px";
};

stop_button.addEventListener("click", stop);
start_button.addEventListener("click", start);
reset_button.addEventListener("click", reset);
