//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let entrada = document.getElementById("amigo");
    let nome = entrada.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    entrada.value = "";
    entrada.focus();

    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        resultado.textContent = "Nenhum amigo disponível para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.textContent = "Amigo sorteado: " + amigoSorteado;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(amigoSorteado);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
