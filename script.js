                        
                        
                        /*Victor Camilo da Luz 
                           RU 4120125*/


// Função para mostrar a mensagem de sucesso e redefinir o formulário
function mostrarMensagemDeSucesso() {
    const mensagemSucesso = document.getElementById("mensagem-sucesso");
    mensagemSucesso.style.display = "block"; // Mostra a mensagem

    // Redefine o formulário
    const formulario = document.querySelector(".formulario-de-contato");
    formulario.reset();
}

// Evento de envio do formulário
document.querySelector(".formulario-de-contato").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    

    mostrarMensagemDeSucesso(); // Mostra a mensagem de sucesso e redefine o formulário
});
