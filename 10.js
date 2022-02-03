let timer;

let co2UdledtIKgVedFlyrejse;
let klimaSynderKommentar;
document.querySelector("button").addEventListener("click", buttonClicked);

function buttonClicked() {
  timer = document.querySelector("#timer").value;

  if (isNaN(timer) || timer == "") {
    console.log("Du har ikke tastet et tal ind!");
  } else {
    co2UdledtIKgVedFlyrejse = Math.round(timer * 109);

    if (co2UdledtIKgVedFlyrejse < 100) {
      klimaSynderKommentar = "Tæt på Thunberg.";
    } else if (co2UdledtIKgVedFlyrejse < 200) {
      klimaSynderKommentar = "Ja ja, du behøver ikke at melde dig ud af Å!";
    } else if (co2UdledtIKgVedFlyrejse < 600) {
      klimaSynderKommentar = "Det er godt for turismen i nordeuropa.";
    } else {
      klimaSynderKommentar =
        "Nå ja vi kan jo altid kolonisere en anden planet ...";
    }
    console.log(
      `Du har fløjet ${timer} timer og udledt ${co2UdledtIKgVedFlyrejse} kg CO2. ${klimaSynderKommentar}`
    );
  }
}
