import React from 'react';
import './App.css';

import User from "./components/User";

const friends = [
  {
    id: 1,
    name : "Ali"
  },
  {
    id: 2,
    name : "Veli"
  },
  {
    id: 3,
    name : "Ahmet"
  },
  {
    id: 4,
    name : "Mehmet"
  },
]

function App() {

  return   (
    <>
      <User 
        name="Savaş" 
        lastname={"Görmüş"} 
        isLoggedIn={true} 
        age= {33} 
        friends = {friends}
        address = {{
          title : "karşıyaka/izmir",
          zip : 35560
        }}
        />
    </>
  )
}

export default App;