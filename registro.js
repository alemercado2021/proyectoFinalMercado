const formularioReg = document.querySelector("#registerForm")
const inputUsuario = document.querySelector("#campoUsuario")
const inputEmail = document.querySelector("#campoEmail")
const inputDireccion = document.querySelector("#campoDireccion")
const inputTelefono = document.querySelector("#campoTelefono")
const registrar = document.querySelector("#registrar")

const usuarios = []
class nuevoUsuario{
    constructor(usuario,email,direccion, telefono){
        this.usuario = usuario;
        this.email = email;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}

formularioReg.onsubmit = (e) =>{
    event.preventDefault()
    usuarios.push(new nuevoUsuario(inputUsuario.value, inputEmail.value, inputDireccion.value, inputTelefono.value,))
    const nuevoUsuarioJSON =JSON.stringify(usuarios);
    localStorage.setItem("usuarios", nuevoUsuarioJSON);
    
    swal("Ahora es un nuevo subscriptor de nuestra tienda, por ello obtendra increibles beneficios")
    localStorage.setItem("beneficios", true)
    formularioReg.reset()
}

