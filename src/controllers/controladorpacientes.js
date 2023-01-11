//IMPORTACIONES
import {capturarDatos} from '../formularios/formularioPaciente.js'

//etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaRegimen=document.getElementById("regimen")
let etiquetaCorreo=document.getElementById("correo")
let etiquetaGrupo=document.getElementById("grupo")
let etiquetaCuota=document.getElementById("cuota")
let etiquetaTelefono=document.getElementById("telefono")



//detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaRegimen,etiquetaCorreo,etiquetaGrupo,etiquetaCuota,etiquetaTelefono)

})