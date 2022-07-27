const usersArray = ["Mehmet", "Ahmet", "Murat"]
const usersObject =  [
    {
        name : "mehmet",
        age : 21
    },
    {
        name : "mehmet",
    
        age : 18
    },
    {
        name : "ahmet",
        age : 40
    },
    {
        name : "murat",
        age : 30
    }
];

//! push
// usersArray.push("ayşe")
// usersArray.push("savas")
// arrayin sonuna bir item daha ekledik

// console.log(usersArray);

//! map

// usersArray.map((item) => console.log(item))
// usersObject.map((item) => console.log(item.name))

//! find

// const result = usersObject.find( 
//     (item) => item.name === "mehmet" && item.age > 20
//     );
// console.log(result);

//! filter

// const filtered = usersObject.filter(
//     // (item) => item.name == "mehmet" && item.age > 17
//     ( {name, age}) => name == "mehmet" && age > 17

// )
// console.log(filtered);

//! some

const some = usersObject.some(
    (item) => item.age < 25
)
// console.log(some)

//! every
const every = usersObject.every(
    (item) => item.age > 50
)
console.log(every);

//! includes
const meyveler = ["elma", "armut", "muz"];
const isIncluded = meyveler.includes("portakal")

console.log(isIncluded);


