// 1. Número par o impar
function numeroParOImpar() {
  const numero = parseInt(prompt("Ingrese un número:"));
  if (isNaN(numero)) {
    alert("Debe ingresar un número válido.");
  } else {
    alert(numero % 2 === 0 ? "El número es PAR." : "El número es IMPAR.");
  }
}

// 2. Días del mes
function diasDelMes() {
  const mes = prompt("Ingrese un mes:").toLowerCase();
  let dias;
  switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
      dias = 31;
      break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
      dias = 30;
      break;
    case "febrero":
      dias = "28 o 29 (año bisiesto)";
      break;
    default:
      dias = "Mes no válido";
  }
  alert(`El mes de ${mes} tiene ${dias} días.`);
}

// 3. Examen aprobado
function examenAprobado() {
  const nota = parseFloat(prompt("Ingrese la nota del examen (0 a 10):"));
  if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Nota no válida.");
  } else if (nota > 7) {
    alert("¡Examen aprobado!");
  } else if (nota > 4) {
    alert("Debe recuperar.");
  } else {
    alert("Aplazo.");
  }
}

// 4. Grupo de letras
function grupoDeLetras() {
  const letra = prompt("Ingrese una letra:").toLowerCase();
  if ("aeiou".includes(letra)) {
    alert("Grupo A");
  } else if ("bcdfg".includes(letra)) {
    alert("Grupo B");
  } else if ("hjklm".includes(letra)) {
    alert("Grupo C");
  } else if ("npqr".includes(letra)) {
    alert("Grupo D");
  } else if ("stvwxyz".includes(letra)) {
    alert("Grupo E");
  } else {
    alert("Letra no válida.");
  }
}

// 5. Piedra, papel o tijera con bucle
function jugarPiedraPapelTijera() {
  const rondas = parseInt(prompt("¿Cuántas rondas deseas jugar?"));
  if (isNaN(rondas) || rondas <= 0) {
    alert("Cantidad de rondas no válida.");
    return;
  }

  const opciones = ["piedra", "papel", "tijera"];
  let puntosJugador = 0;
  let puntosComputadora = 0;

  for (let ronda = 1; ronda <= rondas; ronda++) {
    const jugador = prompt(`Ronda ${ronda} de ${rondas}\nElige piedra, papel o tijera:`).toLowerCase();
    if (!opciones.includes(jugador)) {
      alert("Opción inválida. Ronda perdida.");
      puntosComputadora++;
      continue;
    }

    const computadora = opciones[Math.floor(Math.random() * 3)];
    let resultado = "";

    if (jugador === computadora) {
      resultado = "Empate";
    } else if (
      (jugador === "piedra" && computadora === "tijera") ||
      (jugador === "papel" && computadora === "piedra") ||
      (jugador === "tijera" && computadora === "papel")
    ) {
      resultado = "La jugadora ha ganado esta ronda";
      puntosJugador++;
    } else {
      resultado = "La computadora ha ganado esta ronda";
      puntosComputadora++;
    }

    alert(
      `Ronda: ${ronda} de ${rondas}\n` +
      `Jugadora: ${jugador}\nComputadora: ${computadora}\n` +
      `${resultado}\n` +
      `Puntaje: ${puntosJugador} (Jugadora) - ${puntosComputadora} (Computadora)`
    );
  }

  let final = "\nResultado final:\n";
  if (puntosJugador > puntosComputadora) {
    final += "🎉 ¡La jugadora ganó el juego!";
  } else if (puntosJugador < puntosComputadora) {
    final += "💻 La computadora ganó el juego.";
  } else {
    final += "🤝 ¡Empate!";
  }

  alert(final);
}
