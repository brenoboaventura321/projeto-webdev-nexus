// ===============================
// AULA 2 — RESPOSTAS AUTOMÁTICAS
// ===============================

let botao = document.getElementById("chat-toggle");
let chat = document.getElementById("chat");
let fechar = document.getElementById("fechar");
let input = document.getElementById("input");
let enviarBtn = document.getElementById("enviar");
let chatBox = document.getElementById("chat-box");

botao.addEventListener("click", function () {
    chat.classList.toggle("hidden");
});

fechar.addEventListener("click", function () {
    chat.classList.add("hidden");
});

enviarBtn.addEventListener("click", enviar);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        enviar();
    }
});

function enviar() {

    let texto = input.value;

    texto = texto.trim();
    texto = texto.toLowerCase();
    texto = texto.replace(/[.,!?]/g, "");

    if (texto === "") {
        return;
    }

    let mensagemUsuario = "<div class='usuario'>" + texto + "</div>";
    chatBox.innerHTML += mensagemUsuario;
    //==================================================================
    


    // ==============COLEQUE ACIMA DESSA LINHA O CÓDIGO=================
    input.value = "";

}