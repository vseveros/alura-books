let livros = []
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivros()


async function getBuscarLivros() {
    const res = await fetch(endPointDaApi)
    livros = await res.json()
    let livrosdesconto = aplicardesconto(livros)
    exibirLivros(livrosdesconto)
}

