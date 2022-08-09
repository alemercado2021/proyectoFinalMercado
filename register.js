const formularioReg = document.querySelector("#registerForm")
const inputUsuario = document.querySelector("#campoUsuario")
const inputContrasena = document.querySelector("#campoContrasena")
const registrar = document.querySelector("#registrar")

const usuarios = []
class nuevoUsuario{
    constructor(usuario,contrasena){
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
}

formularioReg.onsubmit = (e) =>{
    event.preventDefault()
    usuarios.push(new nuevoUsuario(inputUsuario.value, inputContrasena.value,))
    const nuevoUsuarioJSON =JSON.stringify(usuarios);
    localStorage.setItem("usuarios", nuevoUsuarioJSON);
    formularioReg.reset()
}