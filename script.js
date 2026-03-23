let intervalo;

function iniciarRespiracao(tempoInicial) {
    let tempo = tempoInicial;
    const circulo = document.getElementById("circulo");
    const contador = document.getElementById("contador");

    clearInterval(intervalo);

    intervalo = setInterval(() => {
        contador.innerText = tempo;
        circulo.classList.toggle("expandir");

        tempo--;
        if (tempo < 0) tempo = tempoInicial;

    }, 1000);
}

function pararRespiracao() {
    clearInterval(intervalo);
    document.getElementById("contador").innerText = 0;
}