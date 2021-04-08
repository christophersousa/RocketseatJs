let techs = ['html', 'css', 'js']

//adicionar um item no fim
techs.push('python')
console.log(techs)
//adicionar um item no começo
techs.unshift('C+')

//remover do fim
//techs.pop()
//remover do começo
//techs.shift()
//pegar somente alguns elementos do arraya
//console.log(techs.slice(1,3))
//remover 1 ou mais itens em qualquer posição do array
//techs.splice(1,2)
//encontrar a posição de um elemento no array
console.log(techs)

let position = techs.indexOf('css')
console.log(techs.indexOf('css'))
console.log(position)
// aprendendo function


const btn = document.querySelector('#btn')
btn.addEventListener('click', click)

function click(){
    const name = document.querySelector('#name').value
    alert(`Olá sehor ${name} `)
}

document.addEventListener('keyup', (evento)=>{
    if (evento.key == 'Enter'){
        click()
    }
})