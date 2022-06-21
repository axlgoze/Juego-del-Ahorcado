// canvas para el juego

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,1200,430);

// function dibujaBarras(){
    pincel.fillStyle = "gold";
    pincel.fillRect(150,350,90,10);
    


    // pincel.fill();
// }
    
// dibujaBarras();