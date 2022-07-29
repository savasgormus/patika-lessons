import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
// import Counter from "./components/Counter";

function App() {
  const [name, setName] = useState("Savaş");
  // name'e Savaş'ı atadık.
  // aşağıda ise bir button oluşturduk. onclick durumunda ise setName ile değişeceği değeri belirttik.
  const [age, setAge] = useState(33);

  // array state'imizi yazdık. buna ekleme / çıkarma işlemi yapacağız.
  const [friends, setFriends] = useState(["Ali", "Veli"]);

  // object state
  const [address, setAddress] = useState({
    title: "izmir",
    zip : 35560
  })

  return (
    <>
    <Counter />

      <h1>Hello {name} </h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Başar")}>Change Name</button>
      <button onClick={() => setAge(29)}>Change Name</button>

      <hr />
      <br />
      <br />

      <h2>friends</h2>
      {friends.map((friend, id) => (
        <div key={id}>{friend}</div>
      ))}

      <br />

      {/* ekleme işlemi yapacağız */}
      {/* kwargs ile friends arrayini aldık ve eklemek istediğimiz öğeyi koyduk */}
      <button onClick={() => setFriends([...friends, "ayşe"])}>Add new friend</button>
      
      <br /><hr />

      <h2>address</h2>
      <div>
        {address.title} , {address.zip}
      </div>
      <button onClick={() => setAddress({
        title : "ankara",
        zip : 16600
        })}>change address</button>
    </>
  );
}

export default App;
