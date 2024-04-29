
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

function crearMatriz(){
    let matriz = [];
    for (let i = 0; i < 27; i++) {
        matriz[i] = [];
        
    }

    //eje x de la matriz
    matriz[0][0] = 0;
    for (let i = 1; i < 27; i++) {
        matriz[0][i] = abecedario[i-1];
        
    }
    //eje y de la matriz
    for (let j = 1; j < 27; j++) {
        matriz[j][0] = abecedario[j-1];
        
    }
    //llenado matriz
    for (let i = 1; i < 27; i++) {
        for (let j = 1; j < 27; j++) {
            if ((j-1)+(i-1) > 25) {
                matriz[i][j] = abecedario[((j-1)+(i-1))-26];
            }else{
                matriz[i][j] = abecedario[(j-1)+(i-1)];
            }
                       
        }
        
    }

    return matriz;
}

function cifrarTexto(texto, clave){
    claveAjustada = ajustarClave(texto, clave);

    let textoCifrado = [];

    let matrizVigenere = crearMatriz();

    // console.log(matrizVigenere);

    /* x = matrizVigenere[abecedario.indexOf(texto[0])+1][abecedario.indexOf(claveAjustada[0])+1];
    console.log(x) */

    //cifrar texto usando la matriz
    for (let i = 0; i < texto.length; i++) {
        textoCifrado[i] = matrizVigenere[abecedario.indexOf(texto[i])+1][abecedario.indexOf(claveAjustada[i])+1];
        
    }

    //console.log(textoCifrado);

    resultadoCifrado.innerText = textoCifrado.join("").toLowerCase();

}

function descifrarTexto(texto, clave){
    claveAjustada = ajustarClave(texto, clave);

    let textoCifrado = [];

    let matrizVigenere = crearMatriz();

    //descifrar texto usando la matriz
    let distanciaLetras = 0;
    for (let i = 0; i < texto.length; i++) {

        if(abecedario.indexOf(claveAjustada[i]) > abecedario.indexOf(texto[i])){
            distanciaLetras = (abecedario.indexOf(texto[i])+26) - abecedario.indexOf(claveAjustada[i]);
        }
        else{
            distanciaLetras = abecedario.indexOf(texto[i]) - abecedario.indexOf(claveAjustada[i]);
        }
       textoCifrado[i] = matrizVigenere[distanciaLetras+1][0];

        
    }
    
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