const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener ('click', filtrarLivros))
const valorNovo = document.getElementById('valor')

function filtrarLivros() {
    const elementobtn = document.getElementById(this.id)
    const categoria = elementobtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponivel() : filtrarCategoria(categoria)
    exibirLivros(livrosFiltrados)
    if(categoria == 'disponivel') {
        const valorTotal = calcularValor(livrosFiltrados)
        exibirbanner()
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponivel() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirbanner(){
    elementocomvalortotal.style.display = "block"
    valorNovo.innerHTML = "R$ " + calcularValor();
}