let tal = Math.round(Math.random() * 20);
//   console.log(tal);
let guess;
let antal = 1;

document.querySelector("button").addEventListener("click", guessTal);
document.querySelector("#nyt_spil").addEventListener("click", nytSpil);

document.querySelector("#nyt_spil").style.visibility = "hidden";

function guessTal() {
  guess = document.querySelector("#gæt").value;
  // guess = prompt("Gæt mit tal!");
  if (guess == tal) {
    console.log("Rigtigt\ndu prøvede " + antal + " gange");

    document.querySelector("#nyt_spil").style.visibility = "visible";
    document.querySelector("button").style.visibility = "hidden";
  } else if (tal > guess) {
    console.log("for lavt - prøv igen!");
    antal++;
  } else {
    console.log("for højt - prøv igen");
    antal++;
  }
}
function nytSpil() {
  location.reload();
}
