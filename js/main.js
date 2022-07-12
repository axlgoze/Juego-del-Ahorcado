// funcion para elegir palabras secreta
var words = ["arbol","cereza","cuchillo"];
console.log(words.length);

var entrada=document.querySelector(".nuevaEntrada");


// funcion para agregar una palabra al arreglo de palabras a mostrar
function addWord(newWord){
    newWord = entrada.value;
    words.push(newWord);
    for(i=0;i<words.length;i++){
        console.log(words[i]);
    }
    document.getElementById("nuevaEntrada").value="";
    alert("Palabra agregada correctamente");

}

//addWord(sol);