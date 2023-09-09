// Creo un array vacio para almacenar los prestamos que voy a crear
const prestamos = [];

// Función para calcular el pago mensual del préstamo
function calcularPagoMensual() {
  // Obtenemos el value que tenemos en los inputs
  const inputMonto = document.getElementById("monto").value;
  const inputTasaInteresAnual = document.getElementById("tasa").value;
  const inputPlazoMeses = document.getElementById("plazo").value;

  // Transformamos los valores input string a numeros para hacer los calculos
  const monto = Number(inputMonto);
  const plazo = Number(inputPlazoMeses);
  const tasa = Number(inputTasaInteresAnual);

  //Hacemos los calculos
  const tasaInteresMensual = Number(inputTasaInteresAnual) / (12 * 100);
  const pagoMensual =
    (Number(monto) * tasaInteresMensual) /
    (1 - Math.pow(1 + tasaInteresMensual, -Number(inputPlazoMeses)));

  //Creamos el objeto prestamo con los valores que tenemos pasados a numeros
  const prestamo = { monto, plazo, tasa, pagoMensual };

  // Agregamos el prestamo al array de prestamos
  prestamos.push(prestamo);
  // Guardamos en localStorage los prestamos
  localStorage.setItem("prestamos", JSON.stringify(prestamos));

  // Creamos los elementos para mostar los resultados
  const h2Monto = document.createElement("h2");
  h2Monto.textContent = "El monto del prestamo es: " + monto;
  const h2Tasa = document.createElement("h2");
  h2Tasa.textContent =  "La tasa del prestamo es: " + tasa;
  const h2Plazo = document.createElement("h2");
  h2Plazo.textContent = "El plazo del prestamo es: " + plazo;
  const h2PagoMensual = document.createElement("h2");
  h2PagoMensual.textContent = "El pago mensual es de: " + pagoMensual;

  // Creamos un titulo
  const h2 = document.createElement("h2");
  h2.textContent = "Resultado de mi prestamo actual";
  document.body.appendChild(h2);

  // Agregamos los resultados que creamos mas arriba
  document.body.appendChild(h2Monto);
  document.body.appendChild(h2Plazo);
  document.body.appendChild(h2Tasa);
  document.body.appendChild(h2PagoMensual);
}

// Creamos una funcion para ver los prestamos de localStorage
function verPrestamosEnLocalStorage() {

  // Obtemenmos el valor de la key prestamos de localStorage
  const prestamosEnLocalStorage = localStorage.getItem("prestamos");

  // Creamos un titulo para los prestamos de localStorage
  const h2 = document.createElement("h2");
  h2.textContent = "Prestamos en localStorage";
  document.body.appendChild(h2);

  //Parseamos el string a array javascript
  //y recorremos ese array generando un h5 con el valor del monto del prestamo como texto
  JSON.parse(prestamosEnLocalStorage).map((prestamoEnLocalStorage) => {
    const h5 = document.createElement("h5");
    h5.textContent =
      "Monto del prestamo en localStorage es: " + prestamoEnLocalStorage.monto;
    document.body.appendChild(h5);
    return;
  });
}

function limpiarDatos() {
  localStorage.clear();

// selecciono los h2 y los borro del DOM
  const elementsH2 = document.querySelectorAll("h2");
  elementsH2.forEach((elemento) => elemento.remove());

// selecciono los h5 y los borro del DOM
  const elementsH5 = document.querySelectorAll("h5");
  elementsH5.forEach((elemento) => elemento.remove());

  Toastify({
    text: "Datos borrados",
    duration: 1000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

function obtenerUsuario() {
  fetch("https://reqres.in/api/users/2")
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      const user = jsonResponse.data;
      const email = document.createElement("h1");
      const name = document.createElement("h2");
      email.textContent = user.email;
      name.textContent = user.first_name + " " + user.last_name;
      document.body.appendChild(email);
      document.body.appendChild(name);

      const avatar = document.createElement("img");
      avatar.src = user.avatar;
      document.body.appendChild(avatar);
    })
    .catch((error) => {
      console.error(error);
    });
}

// aplicando el DOM
document.querySelector("h1").textContent = "La mejor Tasa del Mercado!";
console.log(document.querySelector("h1"));

