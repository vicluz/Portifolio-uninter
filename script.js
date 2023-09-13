// Função para mostrar a mensagem de sucesso
function mostrarMensagemDeSucesso() {
    const mensagemSucesso = document.getElementById("mensagem-sucesso");
    mensagemSucesso.style.display = "block"; // Mostra a mensagem
}

// Evento de envio do formulário
document.querySelector(".formulario-de-contato").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Você pode adicionar aqui o código para enviar os dados para o backend, se necessário

    mostrarMensagemDeSucesso(); // Mostra a mensagem de sucesso
});
