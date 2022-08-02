import { useState, useEffect} from "react"
import Counter from "./components/Counter";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Savaş")
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    console.log("number state güncellendi")}, [number])

  useEffect(() => {
    console.log("name state güncellendi")}, [name])

  useEffect(() => {
    console.log("component mount edildi");
  }, [])
  
  return (
    <div className="App">
      {isVisible && <Counter /> }
      <button onClick={()=> setIsVisible(!isVisible)}>Toggle</button>


        <br /><br />
        <hr /><hr /><hr />
        <h1>{number}</h1>
        <button onClick={() => setNumber(number + 1)}>Click</button>
        <hr />
        <h1>{name}</h1>
        <button onClick={() => setName("başar")}>Click</button>
    </div>
  );
}

export default App;
