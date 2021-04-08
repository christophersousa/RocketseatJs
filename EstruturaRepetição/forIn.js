const person = {
    name: 'christopher',
    ege: 20,
    weight: 68
}

for(let people in person){
    console.log(people)
    console.log(person[people])
}