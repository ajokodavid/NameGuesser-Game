let text = document.getElementById("text");

var i = 0;
var txt = 'You have just 3 chances, try to guess any letter hidden in my list and win the game'; /* The text */
var speed = 80;

function typeWriter() {
    if (i < txt.length) {
      text.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  
typeWriter();