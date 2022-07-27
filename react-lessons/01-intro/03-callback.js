// setTimeout ( () =>{
//     console.log('2 saniye sonra "hi" diyeceğim');
// }, 2000
// )

// setInterval( () => {
//     console.log("ben her saniye çalışacağım");
// }, 1000)


// const sayHi = (callback) => {
//     callback()
// };

// sayHi( ()=> {
//     console.log("hello");
// });

// import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())  // data.json getir
//     .then((users) => console.log(users))  // users bilgisini logla


// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((data) => data.json())  // data.json getir
//     .then((users) => {
//         console.log("Users yüklendi", users);
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((data) => data.json())
//         .then((posts) => console.log("Post yüklendi", posts));
//     });


// async function getData(){
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()
    
    
//     console.log("User 1", users);
//     console.log("post 1", post1);
//     console.log("post 2", post2);
// }
// getData();

// (async() => console.log("hi"))();
// anonim fonksiyon

//! axios
// import axios from "axios";

// (async () => {
//     const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/1");
//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
//     const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("user", user);
//     console.log("post1", post1);
//     console.log("post2", post2);
// })();


//! promises

// const getComments = (number) => {
//     return new Promise((resolve, reject)=>{
//         if (number == 1) {
//             resolve("başarılı") 
//         } else {
//             reject("başarısız")
//         }
//     } )
// };
// getComments(2)
//     .then((data)=> console.log(data))
//     .catch((data)=>console.log(data))


import axios from "axios";

const getUsers = () => {
    return new Promise(async(resolve, reject) =>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/users/1");

        resolve(data);
        reject("bir sorun oluştu")
    });
};
// getUsers()
//     .then((data)=> console.log(data))



const getPosts = (post_id) => {
    return new Promise(async(resolve, reject) =>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
    
            resolve(data);
            reject("bir sorun oluştu")
        });
    };

// getPosts(2)
//     .then((data) => console.log(data))

// (async() => {
//     await getUsers()
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error))
    
//     await getPosts(1)
//         .then((data)=> console.log(data))
//         .catch((error) => console.log(error))
// })();

// (
//     async() => {
//         try {
//             const users = await getUsers();
//             const post = await getPosts(1);
            
//             console.log(users);
//             console.log(post);
//         } catch (error) {
//             console.log(error);
//         }

//     }
// )();

Promise.all([
    getPosts(1), getUsers()
]).then(console.log).catch(console.log)