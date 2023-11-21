const palabraDelDia = ["h","a","c","h","a"];
// const fila_2_1 = document.getElementById("fila-2-1").value;
// const fila_2_2 = document.getElementById("fila-2-2").value;
// const fila_2_3 = document.getElementById("fila-2-3").value;
// const fila_2_4 = document.getElementById("fila-2-4").value;
// const fila_2_5 = document.getElementById("fila-2-5").value;
// let palabraFila2 = fila_2_1 + fila_2_2 + fila_2_3 + fila_2_4 + fila_2_5;
// const fila_3_1 = document.getElementById("fila-3-1").value;
// const fila_3_2 = document.getElementById("fila-3-2").value;
// const fila_3_3 = document.getElementById("fila-3-3").value;
// const fila_3_4 = document.getElementById("fila-3-4").value;
// const fila_3_5 = document.getElementById("fila-3-5").value;
// let palabraFila3 = fila_3_1 + fila_3_2 + fila_3_3 + fila_3_4 + fila_3_5;
// const fila_4_1 = document.getElementById("fila-4-1").value;
// const fila_4_2 = document.getElementById("fila-4-2").value;
// const fila_4_3 = document.getElementById("fila-4-3").value;
// const fila_4_4 = document.getElementById("fila-4-4").value;
// const fila_4_5 = document.getElementById("fila-4-5").value;
// let palabraFila4 = fila_4_1 + fila_4_2 + fila_4_3 + fila_4_4 + fila_4_5;

function verde(elemento){
    elemento.style.backgroundColor = "green";
}

function rojo(elemento){
    elemento.style.backgroundColor = "#FF0000";
}

function amarillo(elemento){
    elemento.style.backgroundColor = "#FFFF00";
}
function evaluarPalabra() {
    const fila_1_1 = document.getElementById("fila-1-1").value;
    const fila_1_2 = document.getElementById("fila-1-2").value;
    const fila_1_3 = document.getElementById("fila-1-3").value;
    const fila_1_4 = document.getElementById("fila-1-4").value;
    const fila_1_5 = document.getElementById("fila-1-5").value;
    let palabraFila1 = fila_1_1 + fila_1_2 + fila_1_3 + fila_1_4 + fila_1_5;

    for (let i = 0; i < palabraFila1.length; i++) {
        const letra = palabraFila1[i];
        if (letra === palabraDelDia[i]) {
            verde(document.getElementById("fila-1-" + (i + 1)));
        } else if (palabraDelDia.includes(letra)) {
            amarillo(document.getElementById("fila-1-" + (i + 1)));
        } else {
            rojo(document.getElementById("fila-1-" + (i + 1)));
        }
    }
}
