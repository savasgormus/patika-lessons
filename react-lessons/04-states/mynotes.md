# States

- componentin değişme durumu var ise belirttiğimiz state devreye girer ve componentimiz bu şekle girer.

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



















