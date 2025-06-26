let livros = []
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivros()
const inserirLivros = document.getElementById('livros')


async function getBuscarLivros() {
    const res = await fetch(endPointDaApi)
    livros = await res.json()
    console.table(livros)
    exibirLivros(livros)
}

function exibirLivros(listadelivros) {
    listadelivros.forEach(livro => {
        inserirLivros.innerHTML +=  `
        <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.imagem}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    })
}