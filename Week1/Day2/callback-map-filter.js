
function myCoolCallBack() {
    console.log("end");
}


setTimeout(myCoolCallBack, 3000);
console.log("start")




// --- Map ----

const animals = ["leopard🐆", "giraffe🦒", "zebra🦓", "elephant🐘", "monkey🙈", "lion🦁"];

const newArray = []
for (let i = 0; i < animals.length; i++) {
    newArray.push(`cool ${animals[i]}`)

}
// console.log(animals)

const CoolAnimals = animals.map((elm, idx) => {
    return `${idx + 1} cool ${oneAnimal}`
})

console.log(animals)
console.log(CoolAnimals)