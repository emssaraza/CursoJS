function calcularImpuestoCuatroPorMil() {

  alert("Bienvenido")


  let nombre = "";

  do {
    nombre = prompt("Ingrese su nombre:");
    if (nombre === null) {
      alert("Has cancelado la operación.");
      return;
    }
    if (!isNaN(parseInt(nombre))) {
      alert("El nombre no debe ser un número.");
    }
  } while (!nombre || !isNaN(parseInt(nombre)));

 

  let valorTransaccion = "";

  while (isNaN(parseInt(valorTransaccion))) {
    valorTransaccion = prompt("Ingrese el valor de la transacción:")
    if (isNaN(parseInt(valorTransaccion)))
      alert("El valor de la transacción debe ser numerico")
  }

  let impuesto = valorTransaccion * 0.004;

  alert(nombre + ", el impuesto 4 x 1000 es: " + impuesto)

  let reiniciar = confirm("¿Desea calcular otra transacción?")

  if (reiniciar) {
    calcularImpuestoCuatroPorMil();
  } else {
    alert("Gracias por usar el calculador de impuesto 4 x 1000")
  }
}