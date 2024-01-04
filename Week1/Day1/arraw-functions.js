// ! ---- Arrow Function

function hello() {
    return "hello " + "Wael";
}
function hello1() {
    return "hello " + "Wael";
}
function hello3() {
    return "hello " + "Wael";
}
console.log(hello())

// arrow function:

const SayHello = (lastName) => {
    // const someName = "Wael"
    return `hello  ${someName} - ${lastName}`;
}

console.log(SayHello("Hajji"))

// Short Arrow function

const helloShort = someName => `hello  ${someName}`

console.log(helloShort("Hajji"))

//----------------

const age = 20

if (age >= 21) {
    return "you may pass!"
} else {
    return "you need more xp"
}

age >= 21 ? "you may pass!" : "you need more xp"