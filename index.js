let catalogoDiv = document.getElementById("catalogoProductos")
let carroDeCompras = JSON.parse(localStorage.getItem("carroDeCompras")) || []
let btnAgregar = document.getElementsByClassName("agregar")
let datos

const datosApi = () => {
    fetch("./productos.json")
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(data)
        catalogoDiv.innerHTML = cargarCatalogo(data)
        datos = data
    })
    .catch(() => console.log("Error"))
}


const cargarCatalogo = (array) => {
    const arrayReducido = array.reduce((acc, producto)=>{
        return acc + `
        <div class="producto">
            <img src=${producto.img}>
            <p>${producto.name}  </p>
            <h2 class="precioTxt">$${producto.price}</h2>
            <button  type="button" onclick="agregarCompra(event)" class="agregar btn btn-light" id="${producto.id}">Agregar al carro</button>
        </div>
        `
    },"")
    return arrayReducido
}


datosApi()

function filtrar(e){
    let btn = e.target
    let categoria = btn.innerText
    let productosFiltrados = datos.filter(producto => producto.category.toLowerCase() === (categoria.toLowerCase()))
    catalogoDiv.innerHTML = ""
    catalogoDiv.innerHTML = cargarCatalogo(productosFiltrados)
}

let btnFiltro = document.getElementsByClassName("filtrar")
for (btn of btnFiltro){
    btn.addEventListener("click", filtrar)
}

const mostrarTodo = document.querySelector(".todo")
mostrarTodo.addEventListener("click", () => {
    catalogoDiv.innerHTML = ""
    catalogoDiv.innerHTML = cargarCatalogo(datos)
})



function agregarCompra(e){
    console.log("asdfasdds");
    const boton = e.target;
    const idBoton = boton.getAttribute("id");
    let productoSeleccionado = datos.find(producto => producto.id === idBoton)
    carroDeCompras.push(productoSeleccionado)
    console.log(productoSeleccionado);
    localStorage.setItem("carroDeCompras", JSON.stringify(carroDeCompras))
    swal("Se agrego el producto correctamente!", "", "success");
}
