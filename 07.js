let time = new Date().getHours();

//Godnat mellem 24 og 5.
if (time < 5) {
  console.log("godnat");
}

//Godmorgen mellem kl. 5 og kl 10,
else if (time < 10) {
  console.log("godmorgen");
}
//Goddag mellem kl 10 og 18,
else if (time < 18) {
  console.log("goddag");
}
//Godaften mellem 18 og 24 og
else {
  console.log("godaften");
}
