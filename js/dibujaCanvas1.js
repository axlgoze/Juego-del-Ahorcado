// canvas para el juego

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,1200,430);

function dibujaBarras(numeroLetras){
    let n=200;
    if(numeroLetras>8){
        alert("Error, palabra mayor a 8 caracteres");
    }else{
        for(i=1;i<=numeroLetras;i++){
            pincel.fillStyle = "#5C33F6";
            pincel.fillRect(n,350,90,10);
            n=n+100;
        }
    }
}
    
dibujaBarras(5);