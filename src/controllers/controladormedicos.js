//etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocuemnto=document.getElementById("documento")

// detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    // Swal.fire(
    //     'Exito!!',
    //     'El especialista ha sido registrado',
    //     'success'
    //   )

    // recibiendo los datos del fomulario
    let nombresMedico=etiquetaNombre.value 
    console.log(nombresMedico)

    let documentoMedico=etiquetaDocuemnto.value
    console.log(documentoMedico)


})