let text = document.getElementById("text");

var i = 0;

// The Hint to the game
var txt = 'The first letter starts with b and the last letter ends with n';  

//The speed of the text
var speed = 80;

//The function handling the text

function typeWriter() {
    if (i < txt.length) {
      text.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  
typeWriter();