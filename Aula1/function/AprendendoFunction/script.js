function whatname(name, egi, weight) {
    console.log('Olá senhor(a):'+ name + ' de idade '+ egi + ' de peso '+ weight+'KG')
}

name = 'Ricardo'
egi = 20
weight = 90
whatname(name, egi, weight)

//função de maneira de expressão
const Olá = function(){
    console.log('Olá Mundo')
}

console.log(Olá)

// arrow function
let nome = (name) =>{
    console.log(`Olá meu nome é ${name}`)
}

nome('Christopher')

// Callback function
// chama uma outra função

function print(calculadora){
    console.log('Vamos printar uma calculo: ')
    calculadora()
    console.log('printado')
}

print(
    (number = 1, number2 = 2) =>{
        console.log(number+number2)
        
    }
)
