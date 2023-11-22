//en primer lugar definimos la palabra correcta que tiene que tener 5 letras
//por eso creamos un array con las letras por deparado: 
const palabraDelDia = ["h","a","c","h","a"];
//variable segundos para el tiempo del contador 
//60 segundos que tiene un minuto * 5 minutos que queremos que sea el tiempo de duración del juego
let segundos = 300;
//funciones para definir el resultado de la letra al introducirlo en el juego
function verde(elemento) {
    //verde = lugar correcto de la letra 
    elemento.style.backgroundColor = "green";
}
function rojo(elemento) {
    //rojo = incorrecto 
    elemento.style.backgroundColor = "#FF0000";
}
function amarillo(elemento) {
    //amarillo = la letra está en la palabra pero no en la posicion correcta
    elemento.style.backgroundColor = "#FFFF00";
}
function neutro(elemento) {
    //neutro = sin comprobar 
    elemento.style.backgroundColor = "#67c4c4";
}
//para obtener la palabra de la fila 
function obtenerPalabraFila(fila) {
    //creo la palabra
    let palabra = "";
    //extension de 5 letras
    for (let i = 1; i <= 5; i++) {
        const inputElement = document.getElementById(`fila-${fila}-${i}`);
        //busca por fila - numero de fila y cada letra (5)
        //si la casilla esta ocupada, sacamos el, valor del id
        if (inputElement !== null) {
            palabra += inputElement.value;
        }
    }
    //que me devuelva la palabra 
    return palabra;
}
//
function evaluarPalabraFila(palabraFila, fila){
//recorremos todas las letras de la fila

    for(let i = 0; i < palabraFila.length; i++){
        const letra = palabraFila[i];
        const columna = i + 1;
        //esto es la concatenacion de las letras hasta llegar al maximo que es cinco
        if(palabraFila != null){
            //sino esta vacio llama a evaluar palabra con la letra y columna (5 letras por columna )
            evaluarLetra(letra, fila, columna)
        }else{
            //si esta vacio neutro y sino 
            neutro(document.getElementById(`fila-${fila}-${columna}`))
        }
    }
}

function evaluarLetra(letra, fila, columna){
    const elemento = document.getElementById(`fila-${fila}-${columna}`);
    if(letra === palabraDelDia[columna -1]){
        //si la letra es ta en la posicion correcta, se muestra verde
        verde(elemento);
        //llamar modal ganador
        //si la palabra incluye la letra, pero no en la posicion se pinta amarillo
    }else if (palabraDelDia.includes(letra)){
        amarillo(elemento);  
    }else{
        //si la letra no esta en la palabra rojo
        rojo(elemento);
    }
}

function evaluarPalabra() {
    for (let i = 1; i <= 4; i++) {
        //me llevara a la funcion de obtenerpalabrafila con la palabra
        const palabraFila = obtenerPalabraFila(i);
        evaluarPalabraFila(palabraFila, i);
    }
}

function segundero() {
    //Math siempre con mayuscula la primera. Cuidado
    let minutos = Math.round((segundos - 30) / 60);
    let segundosRestantes = segundos % 60;
    if (segundosRestantes < 10) {
      segundosRestantes = "0" + segundosRestantes;
    }
    //donde? en el label que he llamado cuenta_atras
    document.getElementById("cuenta__atras").innerHTML =
      minutos + ":" + segundosRestantes;
    //para pararlo usare el clear interval
    //si mi contador de segundos llega a llega cero le cambio de color a rojo por ejemplo
    if (segundos == 0) {
      clearInterval(cuentaAtras);
      alert("SE ACABO");
      document.getElementById("cuenta__atras").innerHTML = "FIN";
    } else {
      segundos--;
    }
  }

let cuentaAtras = setInterval(segundero, 1000);


document.addEventListener('DOMContentLoaded', function () {
    const keyboards = document.querySelectorAll('.cuadrados');
    const keyboardButtons = document.getElementById('keyboard').children;
    const letterInArea = new Map();
  
    // Definir las teclas del teclado
    const keys = [
      
      'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
      'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ',
      'Z', 'X', 'C', 'V', 'B', 'N', 'M', '', '', '',
      
    ];
  
    // Crear botones para cada tecla
    keys.forEach(key => {
      const button = document.createElement('button');
      button.textContent = key;
  
      // Manejar eventos de clic para las teclas
      button.addEventListener('click', function () {
        handleKeyPress(key);
      });
  
      document.getElementById('keyboard').appendChild(button);
    });
  
    // Función para manejar la pulsación de teclas
    function handleKeyPress(key) {
      keyboards.forEach((keyboard, index) => {
        if (!letterInArea.has(index)) {
          letterInArea.set(index, '');
        }
  
        const span = document.createElement('span');
        span.textContent = key;
  
        if (key === 'Space') {
          span.style.width = '40px'; // Ajusta el ancho del espacio
        }
  
        letterInArea.set(index, key);
        updateTextInArea(keyboard, index);
      });
    }
  
    // Función para actualizar el texto en el área
    function updateTextInArea(area, index) {
      // Limpia el contenido existente
      area.innerHTML = '';
  
      const span = document.createElement('span');
      span.textContent = letterInArea.get(index);
  
      area.appendChild(span);
    }
  });
