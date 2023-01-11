import {validarFormulario} from './validacionFormularioPaciente.js'
//creamos una función que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaRegimen,etiquetaCorreo,etiquetaGrupo,etiquetaCuota,etiquetaTelefono){

    let nombresPaciente=etiquetaNombre.value
    let documentoPaciente=etiquetaDocumento.value
    let regimenPaciente=etiquetaRegimen.value
    let correoPaciente=etiquetaCorreo.value
    let grupoPaciente=etiquetaGrupo.value
    let cuotaPaciente=etiquetaCuota.value
    let telefonoPaciente=etiquetaTelefono.value
    
    

   //debemos almacenar todos los valores del formulario en una SOLA VARIABLE
   //OBJETO=ALMACENAR VARIOS DTOS EN 1 SOLO ESPACIO DE MEMORIA

   let datosFormularioPaciente={
    nombre:nombresPaciente,
    documento:documentoPaciente,
    regimen:regimenPaciente,
    correo:correoPaciente,
    grupo:grupoPaciente,
    cuota:cuotaPaciente,
    telefono:telefonoPaciente,
   }
   
   validarFormulario(datosFormularioPaciente)
}