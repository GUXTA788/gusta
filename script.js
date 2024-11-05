// Função para alternar a cor de fundo da página
function toggleBackgroundColor() {
    const body = document.body;  // Seleciona o elemento <body>
    const currentBackgroundColor = window.getComputedStyle(body).backgroundColor; // Obtém a cor de fundo atual

    // Verifica se o fundo da página é preto (rgb(0, 0, 0))
    if (currentBackgroundColor === 'rgb(0, 0, 0)') {
        // Muda o fundo da página para branco
        body.style.backgroundColor = 'white'; 
        body.style.color = 'black'; // Muda o texto para preto
    } else {
        // Muda o fundo da página para preto
        body.style.backgroundColor = 'black'; 
        body.style.color = 'white';            // Muda o texto para branco
    }
}


// Função para alternar a cor de fundo da página e o ícone do botão
function toggleBackgroundColor() {
    const body = document.body;  // Seleciona o elemento <body>

    // Alterna a classe 'light-mode' no body
    body.classList.toggle('light-mode');
}




