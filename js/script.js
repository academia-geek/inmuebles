const BD_INMUEBLES = [
    {
        datos_propietario : {
            nombre : "Pedro", 
            documento : 19029372828, 
            genero : "M", 
            fecha_nacimiento : "1984-10-25"
        }, 
        mensualidades : [
            {
                metros_cuadrados : 150, 
                tipo_inmueble : "A", 
                numero_habitantes : 3, 
                fecha_mensualidad : "2020-01"
            }, 
            {
                metros_cuadrados : 140, 
                tipo_inmueble : "A", 
                numero_habitantes : 4, 
                fecha_mensualidad : "2020-02"
            }
        ]
    }, 
    {
        datos_propietario : {
            nombre : "Maria", 
            documento : 119837462, 
            genero : "F", 
            fecha_nacimiento : "1990-01-10"
        }, 
        mensualidades : [
            {
                metros_cuadrados : 300, 
                tipo_inmueble : "C", 
                numero_habitantes : 6, 
                fecha_mensualidad : "2020-03"
            }
        ]
    }
]
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
        //let nombres = ["carlos",  "juan",  "manuela"]
        let datosDePropietario = {
            nombre : nombre, 
            documento : documento 
        }
        
        BD_INMUEBLES.push({
            datos_propietario : datosDePropietario, 
            mensualidades : []
        })
        
        
        //let nombres = ["oscar", "andrea", "Juan", "david"]
       // nombres.push(nombre, "Mario")
       // console.log("nombre : ", nombre)
       // console.log("documento : ", documento)
        
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
      
      //let r = nombres.map( nombre => "Su nombre es " + nombre)
      //console.log("La respuesta es :",r)
    }
}
)

	
