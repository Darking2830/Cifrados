

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
        textoResultado = cifrarTexto(textoSustituido.toUpperCase(), clave.toUpperCase());
        mostrarResultado(textoResultado);
    }

    if (accion == 2) {
        textoSustituido = quitarAsteriscosTexto(texto);
        textoResultado = descifrarTexto(textoSustituido.toUpperCase(), clave.toUpperCase());
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

function cifrarTexto(texto, clave){

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

    for (let i = 0; i < numFilas; i++) {
        
        for (let j = 0; j < clave.length; j++) {
            if (contador < texto.length) {
                tablaMensaje[i][j] = texto[contador++];
            } else {
                // Si hemos alcanzado el final del texto, llenar el resto de la fila con ateriscos
                tablaMensaje[i][j] = '*';
            }
            
        }
        
    }
    
    /* for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < numFilas; j++) {
            cadenaMensaje[contador] = tablaMensaje[i][j];
            contador++;
        }
        
    } */
    contador = 0;
    let cadenaMensaje = [];
    for (let i = 0; i < clave.length; i++) {
        for (let j = 0; j < numFilas; j++) {
            cadenaMensaje[contador++] = tablaMensaje[j][i];
        
        }
        
    }

    /* let cadenaMensaje = tablaMensaje.flat(); */

    /* console.log(tablaMensaje); */
    /* console.log(tablaMensaje.length); */

    /* document.write(tablaMensaje); */

    return cadenaMensaje;
}

function descifrarTexto(texto, clave){

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

    let cadenaMensaje = tablaMensaje.flat();

    /* console.log(tablaMensaje);
    console.log(tablaMensaje.length); */

    return cadenaMensaje;
}