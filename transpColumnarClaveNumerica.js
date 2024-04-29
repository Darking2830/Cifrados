
var resultadoCifrado = document.querySelector(".resultado-cifrado");
var resultadoMatriz = document.querySelector(".resultado-matriz");

function obtenerValor(){
    let texto = document.querySelector(".texto-cifrado").value;
    let clave = document.querySelector(".clave-cifrado").value;
    let accion = document.querySelector('input[name="accion-cifrado"]:checked').value;

    /* console.log(accion); */

    // let textoSustituido;
    let textoResultado;

    if (accion == 1) {
        /* textoSustituido = ponerAsteriscosTexto(texto); */
        textoResultado = cifrarTexto(texto.toUpperCase(), clave.toUpperCase());
        mostrarResultado(textoResultado);
    }

    if (accion == 2) {
        /* textoSustituido = quitarAsteriscosTexto(texto); */
        textoResultado = descifrarTexto(texto.toUpperCase(), clave.toUpperCase());
        mostrarResultado(textoResultado);
    }


    
}

function mostrarResultado(resultado){
    let texto = resultado.join("").toLowerCase();
    texto = texto.replace(/ /g, "&nbsp;");
    resultadoCifrado.innerHTML = texto;   
}

function cifrarTexto(texto, clave){

    let numFilas = texto.length / clave;

    numFilas = Math.ceil(numFilas);

    let tablaMensaje = [];

    //inicializar la matriz con sub-arrays para cada fila
    for (let i = 0; i < numFilas; i++) {
        tablaMensaje[i] = [];
    }

    let contador = 0;

    for (let i = 0; i < numFilas; i++) {
        
        for (let j = 0; j < clave; j++) {
            if (contador < texto.length) {
                tablaMensaje[i][j] = texto[contador++];
            } else {
                // Si hemos alcanzado el final del texto, llenar el resto de la fila con espacios
                tablaMensaje[i][j] = ' ';
            }
            
        }
        
    }
    
    contador = 0;
    let cadenaMensaje = [];
    for (let i = 0; i < clave; i++) {
        for (let j = 0; j < numFilas; j++) {
            cadenaMensaje[contador++] = tablaMensaje[j][i];
        
        }
        
    }

    return cadenaMensaje;
}

function descifrarTexto(texto, clave){

    let numFilas = texto.length / clave;

    numFilas = Math.ceil(numFilas);

    let tablaMensaje = [];

    //inicializar la matriz con sub-arrays para cada fila
    for (let i = 0; i < numFilas; i++) {
        tablaMensaje[i] = [];
    }

    let contador = 0;

    for (let i = 0; i < clave; i++) {
        
        for (let j = 0; j < numFilas; j++) {
            
                tablaMensaje[j][i] = texto[contador++];
            
            
        }
        
    }

    let cadenaMensaje = tablaMensaje.flat();

    return cadenaMensaje;
}