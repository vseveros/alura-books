// Cria desconto em todos os livros
function aplicardesconto(livros) {
    const desconto = 0.3 //Defini o valor do desconto
    livroscomdesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} //livro, preco = pega todas com todas as informações sem alterar nenhuma delas além do preço
    })
    return livroscomdesconto //Pega os livros, depois aplica os desconto nesses livros e ele vai retorna o objeto.
}