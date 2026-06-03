const contador = document.getElementById("contador");

let valor = 0;
const meta = 5000;

const intervalo = setInterval(() => {

    valor += 50;

    contador.textContent = valor.toLocaleString("pt-BR");

    if(valor >= meta){
        clearInterval(intervalo);
    }

}, 30);