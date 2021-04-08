let student = {
    name: "Mathues",
    age: 18,
    weight: 65,
    isSubscribed: true
}
console.log(`${student.name} de idade ${student.age} anos pesa ${student.weight} Kg`)

const students = [student]

console.log(students[0].name)

const john = {
    name: "John",
    age: 23,
    weight: 72.5,
    isSubscribed: true
}

students.push(john)

console.log(students[1])
