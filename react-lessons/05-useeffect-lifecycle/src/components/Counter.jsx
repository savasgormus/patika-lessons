import { useState, useEffect } from "react"

const Counter = () => {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("component mount edildi");
        const interval = setInterval(() => {
            setNumber((number) => number + 1)
        }, 1000);
        return () => {
            console.log("Component unmount edildi.");
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        console.log("number state güncellendi")
    }, [number])

    return (
        <div >
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
        </div>
    )
}

export default Counter