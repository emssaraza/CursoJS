const gastos = 
    [
    {
      fecha: "2023-06-16",
      compra: "Almuerzo",
      valor: 15000,
    },
    {
      fecha: "2023-06-16",
      compra: "Transporte",
      valor: 5000,
    },
    {
      fecha: "2023-06-16",
      compra: "Café",
      valor: 12000,
    },
  ]


function agregarGasto() {
  let fecha = "";
  while (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
    fecha = prompt("Ingrese la fecha del gasto (formato: AAAA-MM-DD):");

    if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
      alert(
        "Fecha ingresada no válida. Por favor, ingrese la fecha en el formato correcto."
      );
    }
  }

  const compra = prompt("Ingrese la descripción de la compra:");
  let valor = prompt("Ingrese el valor en pesos colombianos:");

  while (isNaN(parseFloat(valor))) {
    alert("El valor ingresado no es válido.");
    valor = prompt("Ingrese el valor en pesos colombianos:");
  }

  valor = parseFloat(valor);

  gastos.push({
    fecha: fecha,
    compra: compra,
    valor: valor,
  });
}

function buscarGasto() {
  const descripcion = prompt("Ingrese el gasto a buscar:");
  const index = gastos.findIndex(
    (gasto) => gasto.compra.toLowerCase() === descripcion.toLowerCase()
  );

  if (index !== -1) {
    const gastoEncontrado = gastos[index];
    alert(
      `Gasto encontrado:\nFecha: ${gastoEncontrado.fecha}\nDescripción: ${gastoEncontrado.compra}\nValor: $${gastoEncontrado.valor}`
    );
  } else {
    alert("No se encontró ningún gasto con esa descripción.");
  }
}

function mostrarGastos() {
  let gastosInfo = "Gastos del día: \n";
  gastosInfo += "__________________\n";
  gastos.forEach((gasto, index) => {
    gastosInfo +=
      "Número: " +
      (index + 1) +
      ", Fecha: " +
      gasto.fecha +
      ", Compra: " +
      gasto.compra +
      ", Valor: $" +
      gasto.valor +
      "\n";
  });
  gastosInfo += "__________________\n";
  gastosInfo += "Total de gastos: $" + calcularTotalGastos();
  alert(gastosInfo);
}


function calcularTotalGastos() {
  let total = 0;
  for (let i = 0; i < gastos.length; i++) {
    total += gastos[i].valor;
  }
  return total;
}

function eliminarGasto() {
  const numeroGasto = parseInt(
    prompt("Ingrese el número del gasto que desea eliminar:")
  );

  if (
    !isNaN(numeroGasto) &&
    numeroGasto > 0 &&
    numeroGasto <= gastos.length
  ) {
    const indice = numeroGasto - 1;
    const gastoEliminado = gastos.splice(indice, 1)[0];
    alert(
      `Gasto eliminado:\nFecha: ${gastoEliminado.fecha}\nDescripción: ${gastoEliminado.compra}\nValor: $${gastoEliminado.valor}`
    );
  } else {
    alert("El número de gasto ingresado no es válido.");
  }
}

let opcion;
while (opcion !== "0") {
  opcion = prompt(
    "---Control de gastos---\n1. Agregar un gasto\n2. Eliminar un gasto\n3. Mostrar lista de gastos\n4. Buscar un gasto\n0. Salir"
  );

  switch (opcion) {
    case "1":
      agregarGasto();
      mostrarGastos();
      break;
    case "2":
      eliminarGasto();
      mostrarGastos();
      break;
    case "3":
       mostrarGastos();
      break;
    case "4":
      buscarGasto();
      break;
    case "0":
      alert("Saliendo");
      break;
    default:
      alert("Opción no válida. Intente nuevamente.");
  }
}
