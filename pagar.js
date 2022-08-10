let carro = JSON.parse(localStorage.getItem("carroDeCompras")) || []
let beneficiosCheck = JSON.parse(localStorage.getItem("beneficios"))

const listaProductos = document.querySelector("#listaProductos")
let precioTotal = 0
let contadorProductos = 0

function cargarProductosCarro() {
    carro.map(producto => {
        listaProductos.innerHTML +=`
        <li class="listadoProductos">
        <img src="${producto.img}"/>
        <p>${producto.name}</p>
        <p>$${producto.price}</p>
        <button class="botonBorrar">X</button>
        </li>
        `

        let precioProducto = producto.price
        precioProducto = parseInt(precioProducto)
        precioTotal = precioTotal + precioProducto
        contadorProductos = contadorProductos + 1   

    })
    listaProductos.innerHTML +=`
    <div class="opcionesPago">
    <li>
    <h5>¿Desea pagarlo en cuotas?</h5>
    Si <input type="radio" id="cuota1" value="1" name="cuota" checked>
    No <input type="radio" id="cuota2" value="2" name="cuota">
    </li>
    <li>
    <label for="cantCuotas">Cuotas</label>
    <select id="cantCuotas" name="cantCuotas">
    <option value="3">3</option>
    <option value="6">6</option>
    <option value="9">9</option>
    <option value="12">12</option>
    </select>
    </li>
    <li>
    <button class="btnCalcularTotal">Calcular total</button>
    </li>
  
    </div>
    `
}

carro.length ? cargarProductosCarro() : (listaProductos.innerHTML=`<h3 class="htresPagar">El carro esta vacio</h3>`)
let radioSino = document.getElementById("cuota1")
let cuantasCuotas = document.getElementById("cantCuotas")
let botonConfirmar = document.getElementsByClassName("btnConfirmar")
let botonCalcularTotal = document.getElementsByClassName("btnCalcularTotal")
function calcularTotal (e){
    if (radioSino.checked === true){
        if (beneficiosCheck === true){
            precioTotal = precioTotal - (precioTotal*0.10)
            alert("Recibio un descuento del 10%")
        }
        console.log(precioTotal)
        console.log(calcularIva(precioTotal))
        let precioCuotas = calcularIva(precioTotal) / (cuantasCuotas.value)
        precioCuotas = precioCuotas.toFixed(2)
        console.log(precioCuotas)
        listaProductos.innerHTML +=`
        <div class="opcionesPago">
        <li>
        <h2>Precio final: $${precioTotal} pagado en ${cuantasCuotas.value} cuotas de $${precioCuotas}</h2>
        </li>

        </div>
        `
    }
    else{
        listaProductos.innerHTML+=`
        <div class="opcionesPago">
        <li>
        <h2>Precio final: $${precioTotal}</h2>
        </li>

        </div>
        `
    }
}

function confirmarCompra (){

    if (beneficiosCheck === true){
        alert(("El paquete se enviara en los proximos dias hacia esta direccion:") )
    }
    else {
        const direccionComprador = prompt("Ingrese la direccion de envio")
        alert("El paquete se enviara en los proximos dias hacia esta direccion:"+direccionComprador )
    }
}
for (boton2 of botonConfirmar){
    boton2.addEventListener("click",confirmarCompra)
}
for (boton of botonCalcularTotal){
    boton.addEventListener("click", calcularTotal)
}
function calcularIva (precioTotal){
    let iva = (precioTotal * 1.21)
    iva = iva.toFixed(2)
    return (iva)
}

let btnBorrar = document.getElementsByClassName("botonBorrar")
for (btnSacar of btnBorrar){
    btnSacar.addEventListener("click", eliminarProducto)
}

function eliminarProducto(e) {
    listaProductos.innerHTML = ""
    const btnSacar = e.target;
    const idbtnSacar = btnSacar.getAttribute("id");
    let indexProducto = carro.findIndex(producto => producto.id === idbtnSacar)
    carro.splice(indexProducto, 1)
    localStorage.removeItem("carroDeCompras")
    localStorage.setItem("carroDeCompras", JSON.stringify(carro))
    cargarProductosCarro(carro)
}

