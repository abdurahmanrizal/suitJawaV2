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
  if (player === "orang") return computer === "semut" ? "MENANG!" : "KALAH !";
}
// versi panjang

// event user memilih gajah
const pilGajah = document.querySelector(".gajah");
pilGajah.addEventListener("click", function () {
  const computer = getPilComputer();
  const player = pilGajah.className;
  const hasil = ruleGame(player, computer);
  const imgComp = document.querySelector(".img-komputer");
  imgComp.setAttribute("src", "img/" + computer + ".png");
  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});

// event user memilih orang
const pilOrang = document.querySelector(".orang");
pilOrang.addEventListener("click", function () {
  const computer = getPilComputer();
  const player = pilOrang.className;
  const hasil = ruleGame(player, computer);
  const imgComp = document.querySelector(".img-komputer");
  imgComp.setAttribute("src", "img/" + computer + ".png");
  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});

const pilSemut = document.querySelector(".semut");
pilSemut.addEventListener("click", function () {
  const computer = getPilComputer();
  const player = pilSemut.className;
  const hasil = ruleGame(player, computer);
  const imgComp = document.querySelector(".img-komputer");
  imgComp.setAttribute("src", "img/" + computer + ".png");
  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});
// akhir
