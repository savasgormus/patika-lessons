# States

- componentin değişme durumu var ise belirttiğimiz state devreye girer ve componentimiz bu şekle girer.

- herhangi bir state güncellendiği anda render işlemi baştan yapılır.

- useState'i import ediyoruz ve state'imizi tanımlıyoruz. state'i tanımlarken 2 şeyi gireceğiz. 1 state'in ismi(return ettiğimiz kısımda kullanacağımız isim) ve  2 state'in değerini değiştirecek olan fonksiyonun ismini yazıyoruz. örneğin state ismi name ise best practice olarak fonksiyonun ismi de setName olacaktır.

```jsx
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
```

- setState işlemi yaparken yukarıda tanımladığımız state'e göre değişiklik yapmalıyız. örneğin bir array tanımladıysak değişikliği array olarak yapmalıyız. aynı şekilde önceki değerleri korumak ve üzerine değişiklik yapmak amacımız olmalı.

# Counter uygulaması

- componentimizi oluşturduk ve useState'i import ettik. daha sonra setState'imizi counter uygulaması için oluşturduk. butonlarımıza onclick durumunda setState'imizin değişeceği biçimi arrow function ile ekledi.

```jsx
import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count - 1)}>Decrase</button>
        <button onClick={()=> setCount(count + 1)}>Increase</button>
        <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
``` 

- farklı bir yöntem ise dışarıda fonksiyon olarak bu işlemleri tanımlayıp onclick içerisine tanımladığımız fonksiyonları yazabiliriz.

```jsx
import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)

    // ikinci yöntem ise dışarıda birer fonksiyon atayarak onclick'e göndermek
    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={decrease}>Decrase</button>
        <button onClick={increase}>Increase</button>
        
        <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
```