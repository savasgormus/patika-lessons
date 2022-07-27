import React from 'react';
import './App.css';
// import Header from './components/header';

const name = "savaş";
const surname = "görmüş";
const isLoggedIn = true;

function App() {
  return   (
    <>

      {/* <h1>
         { isLoggedIn &&`my name is ${name} ${surname}`}
      </h1>

      {!isLoggedIn &&'giriş yapmadınız'}
      isLoggedIn eğer false olursa */}

      <h1>
        {
          isLoggedIn ? `my name is ${name} ${surname}` : 'giriş yapmadınız'
        }
      </h1>




      {/* <h1>my name is {name}</h1>
      <h1>{`my surname is ${surname}`}</h1>
      <h1>hello world</h1>
      <Header />
      <label htmlFor="sasdasd">
        Name
        <input type="text" name="" id="sasdasd" />
      </label> */}
    </>
  )
}

export default App;