function getPilComputer() {
  const rand = Math.random();

  if (rand < 0.34) return "gajah";
  if (rand >= 0.34 && rand < 0.67) return "semut";
  return "orang";
}

function ruleGame(player, computer) {
  if (player === computer) return "SERI !";
  if (player === "gajah") return computer === "semut" ? "KALAH !" : "MENANG !";
  if (player === "semut") return computer === "gajah" ? "MENANG !" : "KALAH !";
  if (player === "orang") return computer === "semut" ? "MENANG !" : "KALAH !";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = performance.now();
  setInterval(function () {
    if (performance.now() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const getPilPlayer = document.querySelectorAll("li img");
let clicks = 0;
let wins = 0;
let loses = 0;
getPilPlayer.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const computer = getPilComputer();
    const player = pil.className;
    const hasil = ruleGame(player, computer);
    const scorePlayer = document.querySelector(".score-player");
    const scoreComputer = document.querySelector(".score-computer");
    if (wins == 10) {
      alert("Selamat anda menang!!");
      wins = 0;
      loses = 0;
      scorePlayer.innerHTML = 0;
      scoreComputer.innerHTML = 0;
    } else if (loses == 10) {
      alert("WAH, anda kalah!! Coba lagi kawan");
      wins = 0;
      loses = 0;
      scorePlayer.innerHTML = 0;
      scoreComputer.innerHTML = 0;
    } else {
      putar();
      setTimeout(function () {
        const imgComp = document.querySelector(".img-komputer");
        imgComp.setAttribute("src", "img/" + computer + ".png");
        const info = document.querySelector(".info");
        info.innerHTML = hasil;
        if (hasil == "MENANG !") scorePlayer.innerHTML = ++wins;
        if (hasil == "KALAH !") scoreComputer.innerHTML = ++loses;
      }, 1000);
    }
  });
});
