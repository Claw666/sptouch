var elements = document.querySelectorAll('.box')
var animationDuration = 50000; // in milliseconds

// Set the animationDelay of each element to a random value
// between 0 and animationDuration:
for (var i = 0; i < elements.length; i++) {
  var randomDuration = Math.floor(Math.random() * animationDuration);
  elements[i].style.animationDelay = randomDuration + 'ms';  
}