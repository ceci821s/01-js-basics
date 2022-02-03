let min;
let max;
let dinAlder;
let datesAlder;

document.querySelector("button").addEventListener("click", button_clicked);

function button_clicked() {
  dinAlder = document.querySelector("#dinAlderTxt").value;
  datesAlder = document.querySelector("#dinDatesAlderTxt").value;
  //hvor ung skal din date mindst være?
  min = Math.round(dinAlder / 2 + 7);
  //hvor gammel må din date højst være?
  max = Math.round((dinAlder - 7) * 2);

  if (
    !Number(dinAlder) ||
    dinAlder < 15 ||
    !Number(datesAlder) ||
    datesAlder < 15
  ) {
    //hvis bruger eller date er under den kriminelle lavalder, må de ikke bruge programmet
    console.log("programmet er ikke for mindreårige");
  } else {
    //1. mulighed: daten ligger inden for rammerne
    if (datesAlder >= min && datesAlder <= max) {
      console.log("Ok, det er passende");
    } else if (datesAlder <= min) {
      //2. mulighed: date er for ung
      console.log(
        "Du er " +
          dinAlder +
          " og din date er " +
          datesAlder +
          "\nDin date er for " +
          (min - datesAlder) +
          " år for ung"
      );
    } else if (datesAlder >= max) {
      //3. mulighed: date er for ung
      console.log(
        "Du er " +
          dinAlder +
          " og din date er " +
          datesAlder +
          "\nDin date er " +
          (datesAlder - max) +
          " år for gammel!"
      );
    }
  }
}
