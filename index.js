let catalogoDiv = document.getElementById("catalogoProductos")
let carroDeCompras = JSON.parse(localStorage.getItem("carroDeCompras")) || []
function cargarCatalogo(array){
    array.forEach(producto => {
        catalogoDiv.innerHTML += `
        <div class="producto">
            <img src=${producto.img}>
            <p>${producto.name}  </p>
            <h2 class="precioTxt">$${producto.price}</h2>
            <button  type="button" class="agregar btn btn-light" id="${producto.id}">Agregar al carro</button>
        </div>
        `
    });
}

cargarCatalogo(productosStock)

function filtrar(e){
    let btn = e.target
    let categoria = btn.innerText
    let productosFiltrados = productosStock.filter(producto => producto.category === (categoria.toLowerCase()))
    catalogoDiv.innerHTML = ""
    cargarCatalogo(productosFiltrados)
}

let btnFiltro = document.getElementsByClassName("filtrar")
for (btn of btnFiltro){
    btn.addEventListener("click", filtrar)
}

const mostrarTodo = document.querySelector(".todo")
mostrarTodo.addEventListener("click", () => {
    catalogoDiv.innerHTML = ""
    cargarCatalogo(productosStock)
})

let btnAgregar = document.getElementsByClassName("agregar")

function agregarCompra(e){
    const boton = e.target;
    const idBoton = boton.getAttribute("id");
    let productoSeleccionado = productosStock.find(producto => producto.id === idBoton)
    carroDeCompras.push(productoSeleccionado)
    localStorage.setItem("carroDeCompras", JSON.stringify(carroDeCompras))
    alert("Se añadio un nuevo producto al carro de tus compras")
}

for (boton of btnAgregar){
    boton.addEventListener("click",agregarCompra)
}