/* 
function() construtor
* new function
* Criar um novo objeto
* This keyword

*/

function Person(name, idade){
    this.name = name 
    this.idade = idade
}

const person = new Person('Christopher', 20)

console.log(`O aluno ${person.name} tem ${person.idade} anos de idade`)

const person1 = new Person('Luiz Eduardo', 14)

console.log(`O aluno ${person1.name} tem ${person1.idade} anos de idade`)

// segundo exemplo

function Jogo(name){
    this.name = name
    this.andar = () =>{
        return `O jogador ${this.name} está andando`
    }
}
const jogador = new Jogo('Christopher')
const jogador1 = new Jogo('Luiz')
console.log(jogador.andar())
console.log(jogador1.andar())