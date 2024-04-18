
var abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var resultadoCifrado = document.querySelector(".resultado-cifrado");
var resultadoMatriz = document.querySelector(".resultado-matriz");

function obtenerValor(){
    let texto = document.querySelector(".texto-cifrado").value;
    let clave = document.querySelector(".clave-cifrado").value;
    let accion = document.querySelector('input[name="accion-cifrado"]:checked').value;

    /* console.log(accion); */

    let textoSustituido;
    let textoResultado;

    if (accion == 1) {
        textoSustituido = ponerAsteriscosTexto(texto);
        textoResultado = cifrarTexto(textoSustituido.toUpperCase(), clave.toUpperCase(), accion);
        mostrarResultado(textoResultado);
    }

    if (accion == 2) {
        textoSustituido = quitarAsteriscosTexto(texto);
        textoResultado = descifrarTexto(textoSustituido.toUpperCase(), clave.toUpperCase(), accion);
        mostrarResultado(textoResultado);
    }


    
}

function mostrarResultado(resultado){
    resultadoCifrado.innerText = resultado.join("").toLowerCase();
    
}

function quitarAsteriscosTexto(texto){
    
    texto = texto.split("*").join(" ");

    return texto;
}

function ponerAsteriscosTexto(texto){
    /* let re = / /gi;
    texto = texto.replace(re, "*"); */

    texto = texto.split(" ").join("*");

    return texto;
}

function ordenarMatrizPorClave(matriz, clave, numFilas, accion){

    let claveOrdeada = [...clave];

    claveOrdeada = claveOrdeada.sort();

    /* console.log(clave)
    console.log(claveOrdeada) */
    console.log(matriz);

    let textoOrdenado = [];

    let contador = 0;

    if(accion == 1){
        for (let i = 0; i < clave.length; i++) {

            let indice = clave.indexOf(claveOrdeada[i]);
    
            for (let j = 0; j < numFilas; j++) {
                
                textoOrdenado[contador++] = matriz[j][indice];
               
                // console.log(clave.indexOf(claveOrdeada[j]))
            }
            
        }
    }

    if(accion == 2){
        for (let i = 0; i < clave.length; i++) {

            let indice = claveOrdeada.indexOf(clave[i]);
    
            for (let j = 0; j < numFilas; j++) {
                
                textoOrdenado[contador++] = matriz[j][indice];
               
                // console.log(clave.indexOf(claveOrdeada[j]))
            }
            
        }
    }

    return textoOrdenado;

}

function cifrarTexto(texto, clave, accion){

    let numFilas = texto.length / clave.length;

    numFilas = Math.ceil(numFilas);

    let tablaMensaje = [];

    //inicializar la matriz con sub-arrays para cada fila
    for (let i = 0; i < numFilas; i++) {
        tablaMensaje[i] = [];
    }


    /* console.log("columnas: " + clave.length);
    console.log("filas: " + numFilas); */

    /* console.log(indice) */
    let contador = 0;

    for (let i = 0; i < clave.length; i++) {
        
        for (let j = 0; j < numFilas; j++) {
            if (contador < texto.length) {
                tablaMensaje[j][i] = texto[contador++];
            } else {
                // Si hemos alcanzado el final del texto, llenar el resto de la fila con asteriscos
                tablaMensaje[j][i] = '*';
            }
            
        }
        
    }
    
    /* for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < numFilas; j++) {
            cadenaMensaje[contador] = tablaMensaje[i][j];
            contador++;
        }
        
    } */

    let textoOrdenado = ordenarMatrizPorClave(tablaMensaje, clave, numFilas, accion);

    /* contador = 0;
    let cadenaMensaje = [];
    for (let i = 0; i < clave.length; i++) {
        for (let j = 0; j < numFilas; j++) {
            cadenaMensaje[contador++] = matrizOrdenada[j][i];
        
        }
        
    } */


    /* let cadenaMensaje = tablaMensaje.flat(); */

    /* console.log(tablaMensaje); */
    /* console.log(tablaMensaje.length); */

    /* document.write(tablaMensaje); */

    return textoOrdenado;
}

function descifrarTexto(texto, clave, accion){

    let numFilas = texto.length / clave.length;

    numFilas = Math.ceil(numFilas);

    let tablaMensaje = [];

    //inicializar la matriz con sub-arrays para cada fila
    for (let i = 0; i < numFilas; i++) {
        tablaMensaje[i] = [];
    }


    /* console.log("columnas: " + clave.length);
    console.log("filas: " + numFilas); */

    /* console.log(indice) */
    let contador = 0;

    for (let i = 0; i < clave.length; i++) {
        
        for (let j = 0; j < numFilas; j++) {
            
                tablaMensaje[j][i] = texto[contador++];
            
            
        }
        
    }

    /* console.log(tablaMensaje); */
    
    /* for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < numFilas; j++) {
            cadenaMensaje[contador] = tablaMensaje[i][j];
            contador++;
        }
        
    } */
    /* contador = 0;
    let cadenaMensaje = [];
    for (let i = 0; i < clave.length; i++) {
        for (let j = 0; j < numFilas; j++) {
            cadenaMensaje[contador++] = tablaMensaje[j][i];
        
        }
        
    } */

    /* console.log(tablaMensaje);
    console.log(tablaMensaje.length); */

    let textoOrdenado = ordenarMatrizPorClave(tablaMensaje, clave, numFilas, accion);

    return textoOrdenado;
}