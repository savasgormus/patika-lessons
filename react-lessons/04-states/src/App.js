import React from 'react';
import {useState} from 'react';


function App() {
  const [name, setName] = useState('Savaş');
  // name'e Savaş'ı atadık.
  // aşağıda ise bir button oluşturduk. onclick durumunda ise setName ile değişeceği değeri belirttik.

  return   (
    <>
      <h1>Hello {name}</h1>
      <button onClick={() => setName('Başar')}>Click</button>
    </>
  )
}

export default App;