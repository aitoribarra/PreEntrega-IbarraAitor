let edad = parseInt(prompt("Ingrese su edad"));

if(edad < 18){
    alert("No puedes ingresar a la plataforma");
}else{
    alert("Bienvenido,puedes ingresar a la plataforma");
}

let dia = prompt("Nuestros turnos medicos son de lunes a viernes, inidique el dia que desee");
let horario = parseInt(prompt("Los horarios son de 8 a 15hs, inidique el horario que desee"));
let confirmar = prompt("¿Desea confirmar la visita?");

function visitaMedica(dia, horario, confirmar) {
  if (confirmar === "si") {
    alert(`Su visita medica sera el dia ${dia}, a las ${horario} hrs`);
  } else if (confirmar === "no") {
    alert("Ingrese nuevos datos para coordinar una visita médica");
  } else {
    alert("Operación inválida");
  }
}

visitaMedica(dia, horario, confirmar);



