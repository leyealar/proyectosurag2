import{registrarMedico} from "../../services/resgistrarMedico.js"

export function validarFormulario(datos){

    //REFERENCIAS A ETIQUETAS QUE QUIERO VALIDAR
    let etiquetaNombre=document.getElementById("nombres")
    let etiquetaDocumento=document.getElementById("documento")
    

    //validemos 3 campos del formulario
    //nombres-documento-registro del medico
    let nombresMedico=datos.nombre
    let documentoMedico=datos.documento
   
    //AGREGAR TODOS LOS CAMINOS POSIBLES PARA VALIDAR EL FORMULARIO
    if(nombresMedico=="" && documentoMedico==""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre y documento son obligatorios',
          })
    }else if(nombresMedico=="" && documentoMedico!=""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }else if(nombresMedico=!"" && documentoMedico==""){
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
    }else{
        registrarMedico(datos)
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }
}