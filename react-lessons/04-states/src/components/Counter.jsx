import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)

    // ikinci yöntem ise dışarıda birer fonksiyon atayarak onclick'e göndermek
    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)

  return (
    <div>
        <h1>{count}</h1>

        {/*
        <button onClick={()=> setCount(count - 1)}>Decrase</button>
        <button onClick={()=> setCount(count + 1)}>Increase</button>
        */}
        <button onClick={decrease}>Decrase</button>
        <button onClick={increase}>Increase</button>
        
        <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter