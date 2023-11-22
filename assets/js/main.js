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
    let letraOk = 0;
//recorremos todas las letras de la fila
    for(let i = 0; i < palabraFila.length; i++){
        const letra = palabraFila[i];
        const columna = i + 1;
        //esto es la concatenacion de las letras hasta llegar al maximo que es cinco
        if(palabraFila != null){
            //sino esta vacio llama a evaluar palabra con la letra y columna (5 letras por columna )
            evaluarLetra(letra, fila, columna)
            letraOk++;
        }else{
            //si esta vacio neutro y sino 
            neutro(document.getElementById(`fila-${fila}-${columna}`))
        }
    }if(letraOk == 5){
        mostrarModalGanador();
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

  function mostrarModalGanador() {
    var modal = document.getElementById('modalGanador');
    modal.style.display = 'flex';
}

// Función para ocultar la modal
function ocultarModalGanador() {
    var modal = document.getElementById('modalGanador');
    modal.style.display = 'none';
}

// Cierra la modal si se hace clic fuera de ella
window.onclick = function(event) {
    var modal = document.getElementById('modalGanador');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

//function evaluarPalabra() {
    //     const fila_1_1 = document.getElementById("fila-1-1").value;
    //     const fila_1_2 = document.getElementById("fila-1-2").value;
    //     const fila_1_3 = document.getElementById("fila-1-3").value;
    //     const fila_1_4 = document.getElementById("fila-1-4").value;
    //     const fila_1_5 = document.getElementById("fila-1-5").value;
    //     let palabraFila1 = fila_1_1 + fila_1_2 + fila_1_3 + fila_1_4 + fila_1_5;
    //     const fila_2_1 = document.getElementById("fila-2-1").value;
    //     const fila_2_2 = document.getElementById("fila-2-2").value;
    //     const fila_2_3 = document.getElementById("fila-2-3").value;
    //     const fila_2_4 = document.getElementById("fila-2-4").value;
    //     const fila_2_5 = document.getElementById("fila-2-5").value;
    //     let palabraFila2 = fila_2_1 + fila_2_2 + fila_2_3 + fila_2_4 + fila_2_5;
    //     const fila_3_1 = document.getElementById("fila-3-1").value;
    //     const fila_3_2 = document.getElementById("fila-3-2").value;
    //     const fila_3_3 = document.getElementById("fila-3-3").value;
    //     const fila_3_4 = document.getElementById("fila-3-4").value;
    //     const fila_3_5 = document.getElementById("fila-3-5").value;
    //     let palabraFila3 = fila_3_1 + fila_3_2 + fila_3_3 + fila_3_4 + fila_3_5;
    //     const fila_4_1 = document.getElementById("fila-4-1").value;
    //     const fila_4_2 = document.getElementById("fila-4-2").value;
    //     const fila_4_3 = document.getElementById("fila-4-3").value;
    //     const fila_4_4 = document.getElementById("fila-4-4").value;
    //     const fila_4_5 = document.getElementById("fila-4-5").value;
    //     let palabraFila4 = fila_4_1 + fila_4_2 + fila_4_3 + fila_4_4 + fila_4_5;
    //     const palabras = palabraFila1 + palabraFila2 + palabraFila3 + palabraFila4;
    
    //     for (let i = 0; i < palabraFila1.length; i++) {
    //         const letra = palabraFila1[i];
    //         if(palabraFila1 != null){
    //             if (letra === palabraDelDia[i]) {
    //                 verde(document.getElementById("fila-1-" + (i + 1))); 
    //             } else if (palabraDelDia.includes(letra)) {
    //                 amarillo(document.getElementById("fila-1-" + (i + 1)));
    //             } else {
    //                 rojo(document.getElementById("fila-1-" + (i + 1)));
    //             }
    //         }else {
    //             neutro(document.getElementById("fila-1-" + (i + 1)));
    //         }
    //     }
    
    //     for (let i = 0; i < palabraFila2.length; i++) {
    //         const letra = palabraFila2[i];
    //         if(palabraFila2 != null){
    //             if (letra === palabraDelDia[i]) {
    //                 verde(document.getElementById("fila-2-" + (i + 1))); 
    //             } else if (palabraDelDia.includes(letra)) {
    //                 amarillo(document.getElementById("fila-2-" + (i + 1)));
    //             } else {
    //                 rojo(document.getElementById("fila-2-" + (i + 1)));
    //             }
    //         }else {
    //             neutro(document.getElementById("fila-2-" + (i + 1)));
    //         }
    //     }
    
    //     for (let i = 0; i < palabraFila3.length; i++) {
    //         const letra = palabraFila3[i];
    //         if(palabraFila3 != null){
    //             if (letra === palabraDelDia[i]) {
    //                 verde(document.getElementById("fila-3-" + (i + 1))); 
    //             } else if (palabraDelDia.includes(letra)) {
    //                 amarillo(document.getElementById("fila-3-" + (i + 1)));
    //             } else {
    //                 rojo(document.getElementById("fila-3-" + (i + 1)));
    //             }
    //         }else {
    //             neutro(document.getElementById("fila-3-" + (i + 1)));
    //         }
    //     }
    
    //     for (let i = 0; i < palabraFila4.length; i++) {
    //         const letra = palabraFila4[i];
    //         if(palabraFila4 != null){
    //             if (letra === palabraDelDia[i]) {
    //                 verde(document.getElementById("fila-4-" + (i + 1))); 
    //             } else if (palabraDelDia.includes(letra)) {
    //                 amarillo(document.getElementById("fila-4-" + (i + 1)));
    //             } else {
    //                 rojo(document.getElementById("fila-4-" + (i + 1)));
    //                 // Se Acabo el juego
    //             }
    //         }else {
    //             neutro(document.getElementById("fila-4-" + (i + 1)));
    //         }
    //     }
    // }