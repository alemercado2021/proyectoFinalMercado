

const carroDeCompras = [

]

const formulario = document.querySelector("#formulario")
const inputId = document.querySelector("#campo-id")
const inputNombre = document.querySelector("#campo-nombre")
const inputTipo = document.querySelector("#campo-tipo")
const inputColor = document.querySelector("#campo-color")
const inputTalle = document.querySelector("#campo-talle")
const inputPrecio = document.querySelector("#campo-precio")
const submit = document.querySelector("#submit")
/*const compra = document.querySelector("#compra")*/

const productos = [
]
class producto {
    constructor(id, categoria, nombre, precio, color, talle){
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.talle = talle;
    }
}



formulario.onsubmit = (event) => {
    event.preventDefault()
    productos.push(new producto(inputId.value, inputTipo.value, inputNombre.value, inputPrecio.value, inputColor.value, inputTalle.value,))
    const nuevoProductoJSON = JSON.stringify(productos);
    localStorage.setItem("productos", nuevoProductoJSON);
    console.log(productos)
    formulario.reset()
}










/*console.log(inputColor.value)

let precioBruto = 0
let pregunta

compra.addEventListener("click",()=>{


do {
    const productos = prompt("Que tipo de indumentaria quiere comprar? Tenemos: Remeras, pantalones y buzos")
    if (productos.toLowerCase() === 'remeras' || productos.toLowerCase() === 'remera'){
        compraRemeras(stockRemeras)
        pregunta = prompt("Quiere hacer otra compra?")
    }
    else if(productos.toLowerCase() === 'pantalones' || productos.toLowerCase() === 'pantalon'){
        compraPantalones(stockPantalones)
        pregunta = prompt("Quiere hacer otra compra?")
    }
    else if(productos.toLowerCase() === 'buzos' || productos.toLowerCase() === 'buzo'){
        compraBuzos(stockBuzos)
        pregunta = prompt("Quiere hacer otra compra?")
    }
} while (pregunta != "no"); 

function compraRemeras (array){
    const talla = prompt("Que talla de remera usa? xs, s, m, l, xl")
    if (talla === "xs" || talla === "s" || talla === "m" || talla === "l" || talla === "xl"){
        switch (talla){
        case "xs":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "xs"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
        case "s":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "s"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
        case "m":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "m"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
        case "l":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "l"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
        case "xl":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "xl"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $3000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 3000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
    }}
    else{
    alert("No existe esa talla o no tenemos en stock")
    }
}

function compraBuzos (array){
    const talla = prompt("Que talla de buzos usa? xs, s, m, l, xl")
    if (talla === "xs" || talla === "s" || talla === "m" || talla === "l" || talla === "xl"){
        switch (talla){
        case "xs":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "xs"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
        case "s":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "s"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
        case "m":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "m"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
        case "l":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "l"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
        case "xl":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "xl"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $5000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 5000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
    }}
    else{
    alert("No existe esa talla o no tenemos en stock")
    }
}

function compraPantalones (array){
    const talla = prompt("Que talla de pantalones usa? xs, s, m, l, xl")
    if (talla === "xs" || talla === "s" || talla === "m" || talla === "l" || talla === "xl"){
        switch (talla){
        case "xs":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "xs"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
        case "s":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "s"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
        case "m":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "m"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
        case "l":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "l"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
        case "xl":
            checkTalla = array.some((elemento)=>
            {return elemento.talla === "xl"})
            if (checkTalla === true){
                const color = prompt("Que color esta buscando?")
                switch(color){
                case "verde":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "verde"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rojo":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rojo"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "negro":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "negro"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "blanco":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "blanco"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "azul":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "azul"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                case "rosa":
                    checkColor = array.some((elemento)=>
                    {return elemento.color === "rosa"})
                    if (checkColor === true){
                        let confirmacion = prompt("El precio es de $2000, escriba 'si' para confirmar la compra, en caso contraro escriba 'no'")
                        if (confirmacion === "si"){
                            precioBruto = precioBruto + 2000
                            carroDeCompras.push({"talla": talla, "color": color })
                            console.log(carroDeCompras)
                        }
                    }
                    else{
                        alert("Actualmente no tenemos en stock ese color")
                    }
                break;
                default:
                    alert("Actualmente no tenemos en stock ese color");
                }
            }
            else {
                alert("Actualmente no tenemos en stock esta talla")
            }
        break;
    }}
    else{
    alert("No existe esa talla o no tenemos en stock")
    }
}

console.log("El precio bruto es de:"+precioBruto)
document.write("<h2>El precio bruto de los productos es de:"+precioBruto+"</h2>");

Calcular el iva
function calcularIva (precioBruto){
    return (precioBruto * 0.21)
}
var iva = calcularIva(precioBruto);
iva = iva.toFixed(2)
console.log("El iva que se le sumara a su compra es de:"+iva)
document.write("<h2>El iva que se le sumara a su compra es de:"+iva+"</h2>");

/*Sumarle el iva al precio total
iva = parseInt(iva)
precioBruto = parseInt(precioBruto)
var precioTotal = precioBruto + iva
console.log(precioTotal)
document.write("<h2>El precio final de su compra es de:"+precioTotal+"</h2>");

/*Forma de pago
const pago = prompt("Quiere hacer el pago en cuotas?Ingrese si o no")
if (pago.toLowerCase() === 'si'){
    var cuotas = prompt("Ingrese la cantidad la cantidad de cuotas")
    cuotas = parseInt(cuotas)
    var precioCuotas = precioTotal / cuotas
    precioCuotas = precioCuotas .toFixed(2)
    console.log("Usted debera pagar "+cuotas+" cuotas del valor de "+precioCuotas)
    document.write("<h2>Usted debera pagar "+cuotas+" cuotas del valor de "+precioCuotas+"</h2>");
    }
else if (pago === 'no'){
    console.log("Usted debera pagar "+precioTotal)
    document.write("<h2>Usted debera pagar "+precioTotal+"</h2>");
}

else{
    alert("usted no ingreso una respuesta correcta, es Si o No")
}
})*/