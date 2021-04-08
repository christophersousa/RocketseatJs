//Condições
// primeira forma de fazer uma condição
const pao = true;
const queijo = false;

const CafeManha = pao && !queijo ? 'Café da manha ótimo':'café da manha ruim';

console.log(CafeManha)

// segunda forma 

const cliente = 16
let result = ''

if(cliente >= 18){
    result = 'Cliente é maior de idade'
}else{
    result = 'Cliente é menor de idade'
}

console.log(`o cliente é ${result}`)