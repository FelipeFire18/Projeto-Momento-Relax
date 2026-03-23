let intervalo;
let fase = 0;

// =========================
// 🌙 MODO ESCURO
// =========================
function toggleTema() {
    document.body.classList.toggle("dark-mode");

    const ativo = document.body.classList.contains("dark-mode");
    localStorage.setItem("tema", ativo);
}

// Carregar tema salvo
window.onload = () => {
    if (localStorage.getItem("tema") === "true") {
        document.body.classList.add("dark-mode");
    }
};

// =========================
// 🎵 SOM
// =========================
function toggleSom() {
    const som = document.getElementById("somRelaxante");

    if (som.paused) {
        som.play();
    } else {
        som.pause();
    }
}

// =========================
// 🫁 RESPIRAÇÃO COMPLETA
// =========================
function iniciarRespiracao() {
    const circulo = document.getElementById("circulo");
    const contador = document.getElementById("contador");

    clearInterval(intervalo);

    let tempo = 4;
    fase = 0;

    intervalo = setInterval(() => {

        if (fase === 0) {
            circulo.innerText = "Inspirar";
            circulo.className = "circulo inspirar";
            contador.innerText = tempo;

        } else if (fase === 1) {
            circulo.innerText = "Segurar";
            circulo.className = "circulo segurar";
            contador.innerText = tempo;

        } else {
            circulo.innerText = "Expirar";
            circulo.className = "circulo expirar";
            contador.innerText = tempo;
        }

        tempo--;

        if (tempo < 0) {
            fase = (fase + 1) % 3;

            if (fase === 0) tempo = 4;   // inspirar
            if (fase === 1) tempo = 4;   // segurar
            if (fase === 2) tempo = 4;   // expirar
        }

    }, 1000);
}

// parar
function pararRespiracao() {
    clearInterval(intervalo);
    document.getElementById("contador").innerText = 0;
}