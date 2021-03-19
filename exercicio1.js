let weight // type undefined
console.log(typeof weight)
let [ name, age, stars, isSubscribed ] = [ 'Arsenium', 30, 5.0, true ]

let student = {}
console.log(typeof student) // object
student = {
    name,
    age,
    weight: 75.5,
    isSubscribed
}

console.log(`${student.name} tem ${student.age} e pesa ${student.weight} kg.`)

let students = []
students = [student]
console.log(students[0])

let student2 = {
    name: "Anseris",
    age: 21,
    wieght: 78.4,
    isSubscribed: false
}

// students[1] = student2
students.push(student2)
console.log(students[1])

console.log(a) // undefined
var a = 5 // processo de hoisting

