

var resultadoCifrado = document.querySelector(".resultado-cifrado");

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

    /* if (accion == 2) {
        textoSustituido = quitarAsteriscosTexto(texto);
        textoResultado = descifrarTexto(textoSustituido.toUpperCase(), clave.toUpperCase());
        mostrarResultado(textoResultado);
    } */


    
}

function mostrarResultado(resultado){
    resultadoCifrado.innerText = resultado.join("").toLowerCase();
}

function quitarAsteriscosTexto(texto){
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "*") {
            texto[i] = " ";
        }
        
    }
    return texto;
}

function ponerAsteriscosTexto(texto){
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == " ") {
            texto[i] = "*";
        }

    }
    return texto;
}

function cifrarTexto(texto, clave){

    let numFilas = texto.length / clave.length;

    numFilas = Math.ceil(numFilas);

    let tablaMensaje = [];
    let cadenaMensaje = new Array(texto.length);

    //inicializar la matriz con sub-arrays para cada fila
    for (let i = 0; i < numFilas; i++) {
        tablaMensaje[i] = [];
    }


    /* console.log("columnas: " + clave.length);
    console.log("filas: " + numFilas); */

    /* console.log(indice) */

    let i,j;
    for (i = 0; i < numFilas; i++) {
        
        for (j = 0; j < clave.length; j++) {
            tablaMensaje[i][j] = texto[j];
            
        }
        
    }

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < numFilas; j++) {
            cadenaMensaje = tablaMensaje[i][j];
            
        }
        
    }

    return cadenaMensaje;
}