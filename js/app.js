/*Apuntes: El evento KEYUP sirve para cada tecla que presionamos la va mostrando en pantalla cuando soltamos la tecla
        EL evento KEYDOWN es practicamente lo mismo que le KEYUP solo que su respuesta es mas rapida, sin necesidad de solta tecla
        Y lee por letra anterior. Ejemplo: presiono "Alejo" leeria hasta "Alej".
        El evento KEYPRESS solo cuenta las posiciones de la tecla, nada de Enter, del.

textConten solo para etiquetas de texto.
.Value para lo demas      
*/

//variables
const nameInto = document.getElementById("nameInto");
const firstWord = document.getElementById("F");
const textarea = document.getElementById("text")
const contador = document.getElementById("contador");
const name = document.getElementById("name");
const coment = document.getElementById("coment");
const button = document.getElementById("button");

//Eventos
nameInto.addEventListener("keyup", eventKey);
textarea.addEventListener("keyup", eventText);
button.addEventListener("click",eventText);

//Funciones
function eventKey(event){
  if(event.keyCode == 13){
    let word = event.target.value;
    let name1 = event.target.value;
    firstWord.innerText = word.charAt(0);
    name.innerText = name1;
  }
}

function eventText(event){
  if(event.type == "click"){
    coment.innerText = "Su comentario es -> "+textarea.value;
  }
  if(textarea.value.length <= 201 ){
    // coment.innerText = "Su comentario es -> "+textarea.value;
    contador.innerText = "Contador -> "+ (200 - (textarea.value.length));
    contador.style.color = "white";
    if(textarea.value.length >= 150 ){
      contador.style.color = "yellow";
      if(textarea.value.length >= 190){
        contador.style.color = "Red";
      }
    }
  }
}