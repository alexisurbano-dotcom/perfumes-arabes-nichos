// Variables para el carrito de compras
let cantidadCarrito = 0;
let totalCarrito = 0;

// Funcion para filtrar los perfumes por categoria
function filtrarCategoria(categoria, botonPresionado) {
    // Cambiar estilo del boton activo
    const botones = document.querySelectorAll(".btn-filtro");
    botones.forEach(function (btn) {
        btn.classList.remove("activo");
    });
    botonPresionado.classList.add("activo");

    // Mostrar u ocultar las tarjetas segun la categoria
    const tarjetas = document.querySelectorAll(".card");
    let contador = 0;

    tarjetas.forEach(function (card) {
        const tipo = card.getAttribute("data-tipo");
        const familia = card.getAttribute("data-familia");

        if (categoria === "todos" || tipo === categoria || familia.includes(categoria)) {
            card.style.display = "flex";
            contador++;
        } else {
            card.style.display = "none";
        }
    });

    const textoContador = document.getElementById("texto-contador");
    if (textoContador) {
        textoContador.textContent = "Mostrando " + contador + " de 20 perfumes";
    }
}

// Buscador de perfumes por nombre o marca
const inputBuscador = document.getElementById("input-buscar");
if (inputBuscador) {
    inputBuscador.addEventListener("keyup", function () {
        const texto = inputBuscador.value.toLowerCase();
        const tarjetas = document.querySelectorAll(".card");
        let contador = 0;

        tarjetas.forEach(function (card) {
            const contenido = card.innerText.toLowerCase();
            if (contenido.includes(texto)) {
                card.style.display = "flex";
                contador++;
            } else {
                card.style.display = "none";
            }
        });

        const textoContador = document.getElementById("texto-contador");
        if (textoContador) {
            textoContador.textContent = "Mostrando " + contador + " de 20 perfumes";
        }
    });
}

// Funcion para agregar un perfume al carrito
function agregarCarrito(nombre, precio) {
    cantidadCarrito++;
    totalCarrito += precio;

    const btnCarrito = document.getElementById("btn-carrito");
    if (btnCarrito) {
        btnCarrito.textContent = "Carrito (" + cantidadCarrito + ") - S/ " + totalCarrito;
    }

    alert("Se agrego al carrito: " + nombre + " (S/ " + precio + ".00)");
}

// Funcion para ver el resumen del carrito
function verCarrito() {
    if (cantidadCarrito === 0) {
        alert("Tu carrito esta vacio. Agrega algun perfume del catalogo.");
    } else {
        const confirmar = confirm(
            "Tienes " + cantidadCarrito + " perfume(s) en el carrito.\n" +
            "Total a pagar: S/ " + totalCarrito + ".00\n\n" +
            "¿Deseas vaciar el carrito?"
        );
        if (confirmar) {
            cantidadCarrito = 0;
            totalCarrito = 0;
            document.getElementById("btn-carrito").textContent = "Carrito (0) - S/ 0";
        }
    }
}

// Funcion para el formulario de contacto
function enviarConsulta(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    alert("Gracias " + nombre + ", hemos recibido tu consulta.");
    event.target.reset();
}
