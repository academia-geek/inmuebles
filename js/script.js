/*var numero1 = 0
function suma(numero2){
    numero1 = guardarMensualidad()
    suma = numero1 + numero2
    return suma
}

function imprimirNumero1(){
    return numero1
}*/

var sumar = (n1, n2) => n1 + n2

let guardarMensualidad = event => {
    let a,  b,  sum
    a = 3
    b = 5
    sum = a + b
    console.log(event)
    console.log("Suma = ", sum)
}


document.querySelector("#btn-guardar-mensualidad-inmueble").addEventListener("click", e => {
    if(document.querySelector('#frm-mensualidad').reportValidity()){
        let nombre = document.querySelector("#nombre_propietario").value
        let documento = document.querySelector("#doc_propietario").value
        let nombres = ["oscar", "andrea", "Juan", "david"]
        nombres.push(nombre)
        console.log("nombre : ", nombre)
        console.log("documento : ", documento)
        console.log(nombres)
    }
}
)

	
