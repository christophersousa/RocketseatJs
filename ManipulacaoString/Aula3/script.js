//Transforme uma string em um array

const frase = 'Eu estou cansado'
const myarray = frase.split(' ')
console.log(myarray)

//Transforme um array em uma string

const newfrase = myarray.join(' ').toUpperCase()
console.log(newfrase)

// Montando um array com um construtor

const array = new Array('a', 'b', 'c')
console.log(array)

//Transforme uma cadeia de caracteres em um array

const word = frase.replace(' ', '')
console.log(Array.from(word))
