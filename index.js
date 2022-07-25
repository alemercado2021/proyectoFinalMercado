let stockRemeras = [
    {talla: "xs",color: "negro"},{talla: "xs",color: "rosa"},{talla: "xs",color: "rojo"},{talla: "xs",color: "blanco"},{talla: "xs",color: "azul"},
    {talla: "s",color: "negro"},{talla: "s",color: "verde"},{talla: "s",color: "rosa"},{talla: "s",color: "blanco"},{talla: "s",color: "azul"},
    {talla: "m",color: "negro"},{talla: "m",color: "verde"},{talla: "m",color: "rojo"},{talla: "m",color: "rosa"},{talla: "m",color: "azul"},
    {talla: "l",color: "negro"},{talla: "l",color: "verde"},{talla: "l",color: "rojo"},{talla: "l",color: "blanco"},{talla: "l",color: "rojo"},
    {talla: "xl",color: "rosa"},{talla: "xl",color: "verde"},{talla: "xl",color: "rojo"},{talla: "xl",color: "blanco"},{talla: "xl",color: "azul"},
]

let stockPantalones = [
    {talla: "xs",color: "negro"},{talla: "xs",color: "rosa"},{talla: "xs",color: "rojo"},{talla: "xs",color: "blanco"},{talla: "xs",color: "azul"},
    {talla: "s",color: "negro"},{talla: "s",color: "verde"},{talla: "s",color: "rosa"},{talla: "s",color: "blanco"},{talla: "s",color: "azul"},
    {talla: "m",color: "negro"},{talla: "m",color: "verde"},{talla: "m",color: "rojo"},{talla: "m",color: "rosa"},{talla: "m",color: "azul"},
    {talla: "l",color: "negro"},{talla: "l",color: "verde"},{talla: "l",color: "rojo"},{talla: "l",color: "blanco"},{talla: "l",color: "rojo"},
    {talla: "xl",color: "rosa"},{talla: "xl",color: "verde"},{talla: "xl",color: "rojo"},{talla: "xl",color: "blanco"},{talla: "xl",color: "azul"},
]

let stockBuzos = [
    {talla: "xs",color: "negro"},{talla: "xs",color: "rosa"},{talla: "xs",color: "rojo"},{talla: "xs",color: "blanco"},{talla: "xs",color: "azul"},
    {talla: "s",color: "negro"},{talla: "s",color: "verde"},{talla: "s",color: "rosa"},{talla: "s",color: "blanco"},{talla: "s",color: "azul"},
    {talla: "m",color: "negro"},{talla: "m",color: "verde"},{talla: "m",color: "rojo"},{talla: "m",color: "rosa"},{talla: "m",color: "azul"},
    {talla: "l",color: "negro"},{talla: "l",color: "verde"},{talla: "l",color: "rojo"},{talla: "l",color: "blanco"},{talla: "l",color: "rojo"},
    {talla: "xl",color: "rosa"},{talla: "xl",color: "verde"},{talla: "xl",color: "rojo"},{talla: "xl",color: "blanco"},{talla: "xl",color: "azul"},
]


const carroDeCompras = [

]
let precioBruto = 0
let pregunta
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

/*Calcular el iva*/
function calcularIva (precioBruto){
    return (precioBruto * 0.21)
}
var iva = calcularIva(precioBruto);
iva = iva.toFixed(2)
console.log("El iva que se le sumara a su compra es de:"+iva)
document.write("<h2>El iva que se le sumara a su compra es de:"+iva+"</h2>");

/*Sumarle el iva al precio total*/
iva = parseInt(iva)
precioBruto = parseInt(precioBruto)
var precioTotal = precioBruto + iva
console.log(precioTotal)
document.write("<h2>El precio final de su compra es de:"+precioTotal+"</h2>");

/*Forma de pago*/
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