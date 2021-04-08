const LivrosPorCategoria =[
    {
        category: 'Riqueza',
        livros: [
            {
                title: 'Os segredos da mente milionária',
                autor: 'T. Harv Eker'
            },
            {
                title: 'O homem mais rico da Babilônia',
                autor: 'George S. Clason'
            },
            {
                title: 'Pai rico, pai pobre',
                autor: 'Robert T. Kiyosaki e Sharon L. Lechter'
            }
        ]
    },
    {
        category: 'Inteligência Emocional',
        livros: [
            {
                title: 'Você é Insubstituível',
                autor: 'Augusto Cury'
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                autor: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                autor: 'Sterphen R. Covey'
            }
        ]
    }
]

const totalCategorias = LivrosPorCategoria.length

for( let categorias of LivrosPorCategoria){
    console.log('Total de livros da categoria', categorias.category)
    console.log('Total de livros', categorias.livros.length)
}

function NumberAltores(){
    let autores = []
    for(let categorias of LivrosPorCategoria){
        for(let livro of categorias.livros){
            if(autores.indexOf(livro.autor)== -1){
                autores.push(livro.autor)
            }
        }
    }
    console.log(`Total de altores = ${autores.length}`)
}

NumberAltores()

function MostrarAltor(autor = 'Augusto Cury'){
    let livros = []
    for(let categorias of LivrosPorCategoria){
        for(let livro of categorias.livros){
            if(livro.autor == autor){
                livros.push(livro.title)
            }
        }
    }
    console.log(`Total de Livros do altor ${autor} = ${livros.join(', ')}`)

    /*for(let i = 0; i < livros.length; i++){
        console.log(`Titulo do livro: ${livros[i]}`)
    }*/
}
MostrarAltor()
