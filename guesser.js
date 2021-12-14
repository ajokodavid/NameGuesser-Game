let txt = "blockchainn";
let guess = document.getElementById("guess");
let result = document.getElementById("result");

function showResult() {
  if (guess.value == txt.slice(0, 10).toLowerCase() || guess.value == txt.slice(0, 10).toUpperCase()) {
    result.innerText = "You are correct";

  } else {
     result.innerHTML = `You are wrong`;
  }

  guess.value = '';

    typeWriter();
}