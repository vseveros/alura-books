const inserirLivros = document.getElementById('livros')
const elementocomvalortotal = document.getElementById('valor_total_livros_disponiveis')

function exibirLivros(listadelivros) {
    elementocomvalortotal.style.display = 'none'
    inserirLivros.innerHTML = ''
    listadelivros.forEach(livro => {
        // let disponibilidade = verificarDisponivel (livro)
        let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel'
        inserirLivros.innerHTML +=  `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.imagem}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p> 
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
        //. toFixed(2) para ele fixar em duas casas decimais  
    })
}

// function verificarDisponivel(livro) {
//     if (livro.quantidade > 0) {
//         return 'livro-imagens'
//     }else {
//         return 'livros_imagens indisponivel'
//     }
// }