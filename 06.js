document.querySelector("button").addEventListener("click", buttonClicked);

function buttonClicked() {
  let længde = document.querySelector("#længde").value;
  let bredde = document.querySelector("#bredde").value;
  let a = areal(længde, bredde);
  let resultat;
  if (isNaN(a)) {
    resultat = "det er ikke et tal, prøv igen!";
  } else if (a <= 0) {
    resultat = "Arialet er mindre end 0, prøv igen!";
  } else {
    resultat = `Arialet er ${a}`;
  }
  console.log(resultat);
}
function areal(l, b) {
  return l * b;
}
