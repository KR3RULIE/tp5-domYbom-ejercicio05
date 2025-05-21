function actualizarCronometro() {
  // Convertir tiempo a minutos, segundos y milisegundos
  let ms = tiempo % 1000;
  let totalSeg = Math.floor(tiempo / 1000);
  let s = totalSeg % 60;
  let totalMin = Math.floor(totalSeg / 60);
  let m = totalMin % 60;
  let h = Math.floor(totalMin / 60);
  // Mostrar en pantalla usando innerText o textContent
  const detalleCronometro = document.querySelector("p");
  detalleCronometro.textContent = `${String(h).padStart(2, "0")}:${String(
    m
  ).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(ms).padStart(
    3,
    "0"
  )}`;
}

function iniciar() {
  // Verificar si ya hay un intervalo corriendo
  if (intervalo) return;
  // Usar setInterval para aumentar "tiempo" cada 10ms
  intervalo = setInterval(() => {
    tiempo += 10;
    actualizarCronometro();
  }, 10);
}

function pausar() {
  // Usar clearInterval con el ID guardado en "intervalo"
  if (intervalo) {
    clearInterval(intervalo); // detenerlo
    intervalo = null; // reiniciar el estado
  }
}

function reset() {
  // Detener el intervalo si está activo
  if (intervalo) {
    clearInterval(intervalo);
    intervalo = null;
  }

  // Reiniciar tiempo
  tiempo = 0;

  // Actualizar visualmente
  actualizarCronometro();
}

const btnIniciar = document
  .getElementById("btnIniciar")
  .addEventListener("click", iniciar);
const btnPausar = document
  .getElementById("btnPausar")
  .addEventListener("click", pausar);
const btnReiniciar = document
  .getElementById("btnReiniciar")
  .addEventListener("click", reset);

let tiempo = 0; // tiempo en milisegundos
let intervalo = null; // para guardar el ID del setInterval
