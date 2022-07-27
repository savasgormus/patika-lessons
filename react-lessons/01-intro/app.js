import axios from "axios";

const getData = async(id) => {
    const {data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + id);
    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/" + id);
    try {
        console.log("user" , user);
        console.log("post", post);
    } catch (error) {
        console.log(error, "bir hata oluştu");
    }

};

export default getData;





