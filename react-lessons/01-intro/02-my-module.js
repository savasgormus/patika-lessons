const hello = (name) => {
    console.log(`hello ${name}`);
}

const topla = (a,b) => a + b;
const cikar = (a,b) => a - b;

export const text = "text";

// object
export const user = {
    name: "Savas",
    lastname: "Gormus",
};

// array
export const users = [{
    name: "Savas",
    lastname: "Gormus",
},
{
    name: "Basar",
    lastname: "Gormus",
}];

export { hello, topla, cikar }
