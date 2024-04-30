
var resultadoCifrado = document.querySelector(".resultado-cifrado");
var resultadoMatriz = document.querySelector(".resultado-matriz");

function obtenerValor(){
    let texto = document.querySelector(".texto-cifrado").value;

    // let textoSustituido;

    descifrarTexto(texto.toUpperCase());


    
}

function mostrarResultado(resultado){
    let texto = resultado.join("").toLowerCase();
    texto = texto.replace(/ /g, "&nbsp;");
    resultadoCifrado.innerHTML = texto;
    
}

function descifrarTexto(texto){

    let divResultados = document.querySelector(".resultados");
    while (divResultados.firstChild) {
        divResultados.removeChild(divResultados.firstChild);
    }
    
    //ciclo que se repite dependiendo del largo del texto
    for (let k = 1; k <= texto.length; k++) {

        //define el número de filas
        let numFilas = texto.length / k;
        numFilas = Math.ceil(numFilas);

        let tablaMensaje = [];
        //inicializa la matriz con sub-arrays para cada fila
        for (let l = 0; l < numFilas; l++) {
            tablaMensaje[l] = [];
        }

        //algoritmo para descifrar mensaje
        let contador = 0;

        for (let i = 0; i < k; i++) {
            for (let j = 0; j < numFilas; j++) {
                    tablaMensaje[j][i] = texto[contador++];
            }
        }

        //convierte en vector la matriz con el texto descifrado
        let cadenaMensaje = tablaMensaje.flat();

        //crea un elemento para mostrar todos los resultados

        //se crea un elemento div
        let elemento = document.createElement("p")

        elemento.classList.add('contenido-div');

        //se crea el contenido que llevará el elemento recién creado
        let contenido = document.createTextNode(`${k}. ${cadenaMensaje.join("").toLowerCase()}`);

        //se le agrega el contenido al elemento
        elemento.appendChild(contenido);

        //se muestra el elemento con su contenido en el DOM
        let pActual = document.querySelector(".resultados");
        //document.body.insertBefore(elemento, pActual);
        pActual.appendChild(elemento);

    }

}