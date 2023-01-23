
// Defina a data de lançamento
const launchDate = new Date("january 24, 2026 12:00:00");

// Atualize a contagem regressiva a cada segundo
setInterval(function() {
    const currentDate = new Date();
  const timeLeft = launchDate - currentDate;

  // Calcule dias, horas, minutos e segundos restantes
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Atualize a página com a contagem regressiva
  document.getElementById("days").innerHTML = days + " dias";
  document.getElementById("hours").innerHTML = hours + " horas";
  document.getElementById("minutes").innerHTML = minutes + " minutos";
  document.getElementById("seconds").innerHTML = seconds + " segundos";

});

// Dark mode
const darkmodeBtn = document.getElementById("darkmode-btn");
darkmodeBtn.addEventListener("click", function() {
  const body = document.querySelector("body");
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");


  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  }
});

