
var abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var resultadoCifrado = document.querySelector(".resultado-cifrado");

function obtenerValor(){
    let texto = document.querySelector(".texto-cifrado").value;
    desplazarAlfabetoDescifrar(texto.toUpperCase());
    
}

function desplazarAlfabetoDescifrar(texto){

    let textoDesplazado = new Array(texto.length);

    for (let j = 0; j < 26; j++) {
        for (let i = 0; i < texto.length; i++) {

            let indice = abecedario.indexOf(texto[i]);
            indice = indice - (j+1);
    
    
            if (indice < 0) {
                textoDesplazado[i] = abecedario[indice+26];
            }else{
                textoDesplazado[i] = abecedario[indice];
            }
                
        }

        mostrarTexto(textoDesplazado, j+1);
    }

}

function mostrarTexto(textoDesplazado, indice){

    //se crea un elemento div
    let elemento = document.createElement("p")

    elemento.classList.add('contenido-div');

    //se crea el contenido que llevará el elemento recién creado
    let contenido = document.createTextNode(`${indice}. ${textoDesplazado.join("").toLowerCase()}`);

    //se le agrega el contenido al elemento
    elemento.appendChild(contenido);

    //se muestra el elemento con su contenido en el DOM
    let resultadoDescifrado = document.querySelector(".resultado-cifrado");
    //document.body.insertBefore(elemento, pActual);
    resultadoDescifrado.appendChild(elemento);

}