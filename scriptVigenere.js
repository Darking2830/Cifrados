/* fecha: 15 de abril del 2024
desarrolladores: Parra Hernández José Ángel, Ruelas Leal José Joel
proyecto Seguridad Informática Equipo 9 */


var abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var resultadoCifrado = document.querySelector(".resultado-cifrado");

function obtenerValor(){
    let texto = document.querySelector(".texto-cifrado").value;
    let clave = document.querySelector(".clave-cifrado").value;
    let accion = document.querySelector('input[name="accion-cifrado"]:checked').value;

    /* console.log(accion); */

    if (accion == 1) {
        cifrarTexto(texto.toUpperCase(), clave.toUpperCase());
    }

    if (accion == 2) {
        descifrarTexto(texto.toUpperCase(), clave.toUpperCase());
    }

    
}


function cifrarTexto(texto, clave){
    claveAjustada = ajustarClave(texto, clave);

    let indicesCifrado = [];
    let textoCifrado = [];
    for (let i = 0; i < texto.length; i++) {
        
        indicesCifrado[i] = (abecedario.indexOf(texto[i]) + abecedario.indexOf(claveAjustada[i]));

        /* console.log(abecedario.indexOf(texto[i]));
        console.log(abecedario.indexOf(clave[i]));
        console.log(indicesCifrado[i]); */
        
        if (indicesCifrado[i] > 25 || indicesCifrado[i] < 0){
            indicesCifrado[i] = funcionResiduo(indicesCifrado[i]);
        }
    }

    /* console.log(claveAjustada); */
    
    for (let i = 0; i < indicesCifrado.length; i++) {
        
        textoCifrado[i] = abecedario[indicesCifrado[i]];
        
    }
    /* console.log(indicesCifrado);
    console.log(textoCifrado.join("")); */

    resultadoCifrado.innerText = textoCifrado.join("").toLowerCase();

}

function descifrarTexto(texto, clave){
    claveAjustada = ajustarClave(texto, clave);

    let indicesCifrado = [];
    let textoCifrado = [];
    for (let i = 0; i < texto.length; i++) {
        
        indicesCifrado[i] = (abecedario.indexOf(texto[i]) - abecedario.indexOf(claveAjustada[i]));

        /* console.log(abecedario.indexOf(texto[i]));
        console.log(abecedario.indexOf(clave[i]));
        console.log(indicesCifrado[i]); */
        
        if (indicesCifrado[i] > 25 || indicesCifrado[i] < 0){
            indicesCifrado[i] = funcionResiduo(indicesCifrado[i]);
        }
    }

    /* console.log(claveAjustada); */
    
    for (let i = 0; i < indicesCifrado.length; i++) {
        
        textoCifrado[i] = abecedario[indicesCifrado[i]];
        
    }
    /* console.log(indicesCifrado);
    console.log(textoCifrado.join("")); */

    resultadoCifrado.innerText = textoCifrado.join("").toLowerCase();

}

function ajustarClave(texto, clave){

    let tamanoClave = clave.length;
    for (let i = 0; i < texto.length; i++) {
        if (i > tamanoClave - 1){
            clave = clave + clave[i - tamanoClave];
        }
        
    }
    
    return clave;
}

function funcionResiduo(indice){
    if (indice > 25) {
        indice -= 26;
    }
    if (indice < 0) {
        indice += 26;
    }
    return indice;
}