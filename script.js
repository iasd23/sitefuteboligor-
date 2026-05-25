document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões de curtir
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Encontra o elemento de texto que exibe os números de curtidas dentro do botão clicado
            const likeCountSpan = this.querySelector(".like-count");
            
            // Pega o valor atual e transforma em número inteiro
            let currentLikes = parseInt(likeCountSpan.textContent);
            
            // Incrementa o valor
            currentLikes++;
            
            // Atualiza o texto na tela
            likeCountSpan.textContent = currentLikes;
            
            // Efeito visual rápido de clique
            this.style.transform = "scale(1.1)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 100);
        });
    });
});