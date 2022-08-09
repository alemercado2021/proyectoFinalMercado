


const formLogin = document.querySelector("#formLogin")
const inputLogUsuario = document.querySelector("#loginUsuario")
const inputLogContrasena = document.querySelector("#loginContrasena")
const iniciar = document.querySelector("#iniciar")
const usuariosCreados = {
    usuario:"test",
    contrasena:"123"
}


formLogin.onsubmit = (e) => {
    e.preventdefault()
    if (inputLogUsuario.value === usuariosCreados.usuario && inputLogContrasena.value === usuariosCreados.contrasena){
        console.log("asd")
    }
    else{
        alert("usuario y/o contraseña incorrecta, vuelva a intentarlo")
    }
}