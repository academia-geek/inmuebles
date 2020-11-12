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
        let nombres = ["carlos",  "juan",  "manuela"]
        //let nombres = ["oscar", "andrea", "Juan", "david"]
        nombres.push(nombre, "Mario")
        console.log("nombre : ", nombre)
        console.log("documento : ", documento)
        
        /*let i = 0
        while(i <= 5){
            console.log(i, nombres[i])
            i = i + 1 //i++
            i = i - 1 //i--
        } */
        /*
        for(let i = 0; i < nombres.length; i++){
            console.log(i, nombres[i])
        }
        */
       /*
       for (let i in nombres) {
            console.log(i, nombres[i])
       } */
       /*
       for (const nom of nombres) {
           console.log(nom)
       }
       */
      
      let r = nombres.map( nombre => "Su nombre es " + nombre)
      console.log("La respuesta es :",r)
    }
}
)

	
