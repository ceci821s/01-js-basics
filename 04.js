document.querySelector("button").addEventListener("click", buttonClicked);

function buttonClicked() {
  let længde = document.querySelector("#længde").value;
  let bredde = document.querySelector("#bredde").value;
  let areal = længde * bredde;
  let resultat = `længden er ${længde} meter og bredden er ${bredde} meter. Arealet er ${areal}`;
  console.log(resultat);
}
