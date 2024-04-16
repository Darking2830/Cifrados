/* fecha: 16 de abril del 2024
desarrolladores: Parra Hernández José Ángel & Ruelas Leal José Joel
proyecto Seguridad Informática Equipo 9 
algoritmo de cifrado por sustitución césar */

var abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var resultadoCifrado = document.querySelector(".resultado-cifrado");

function obtenerValor(){
    let texto = document.querySelector(".texto-cifrado").value;
    let clave = document.querySelector(".clave-cifrado").value;
    let accion = document.querySelector('input[name="accion-cifrado"]:checked').value;
    let textoDesplazado;

    if (accion == 1) {
        textoDesplazado = desplazarAlfabetoCifrar(texto.toUpperCase(),clave);
    }

    if (accion == 2) {
        textoDesplazado = desplazarAlfabetoDescifrar(texto.toUpperCase(),clave);
    }


    /* console.log(textoDesplazado); */

    resultadoCifrado.innerText = textoDesplazado.join("").toLowerCase();
    
}

function desplazarAlfabetoCifrar(texto,clave){

    let textoDesplazado = new Array(texto.length);

    for (let i = 0; i < texto.length; i++) {

        let indice = abecedario.indexOf(texto[i]);
        /* console.log(indice); */
        indice = indice + parseInt(clave);

       /*  console.log(indice); */

        if (indice > 25) {
            textoDesplazado[i] = abecedario[indice-26];
        }else{
            textoDesplazado[i] = abecedario[indice];
        }
            
    }

    /* console.log(textoDesplazado); */

    return textoDesplazado;

}

function desplazarAlfabetoDescifrar(texto,clave){

    let textoDesplazado = new Array(texto.length);

    for (let i = 0; i < texto.length; i++) {

        let indice = abecedario.indexOf(texto[i]);
        /* console.log(indice); */
        indice = indice - parseInt(clave);

       /*  console.log(indice); */

        if (indice < 0) {
            textoDesplazado[i] = abecedario[indice+26];
        }else{
            textoDesplazado[i] = abecedario[indice];
        }
            
    }

    /* console.log(textoDesplazado); */

    return textoDesplazado;

}