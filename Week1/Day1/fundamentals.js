// ? ----- SCOPE ----

// var name = "bob"

// function sayHi() {
//     name = "alice";
//     console.log(name)
// }
// sayHi(); // ?
// console.log(name) // ?

// ? ----- HOISTING ----
// console.log("what is x?", x)
// let x = "bob"
// const x = "Alice"
// x = "bob"


// const nums = [1, 2, 3, 4]

// [1, 2]
// 1

// nums[0] = "bob";
// nums = 1
// console.log(nums)

// for (let i = 0; i < 5445; i++) {

// }
// console.log(i)


var x = "Alice"
x[0] = "5"
console.log(x)

// the output will be "alice"
// primitive datatypes
// String
// Number
// Boolean
// undefined / null


// complex datatypes
// Arrays
// Objects

//!---------------- Destructuring --------------------

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
}

// const firstName = person.firstName
// const lastName = person.lastName
// console.log(firstName, lastName)

const { firstName: name } = person
console.log(name)


const animals = ['horse🐎', 'dog🐕', 'fish🐟', 'cat🐈', 'bird🐦'];

const [, coolAnimal, , , lastAnimal] = animals
console.log(coolAnimal, anotherAnimal, lastAnimal)


//? --- REST / SPREAD ---

// pass by reference and pass by value

//         0x00141EF
const a = [10, 20, 30];
// const b = a
const b = [...a]


b.push(1000)

console.log(a) //?
console.log(b) //? 


