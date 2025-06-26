let ordenarPreco = document.getElementById('btnOrdenarPorPreco')
ordenarPreco.addEventListener('click', ordenarPrecoLivros)

function ordenarPrecoLivros() {
    let livrosordenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(livrosordenados)
}