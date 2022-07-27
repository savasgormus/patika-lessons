# Component yapısı

- bir componenti function şeklinde yazıyoruz. function bir return veriyor. bu return içerisine kapsayıcı bir div oluşturuyoruz. bu div içerisinde yazdığımız herşey bizim componentimizin içeriği olarak bize geri dönüyor.

- componentimizi görüntülemek için App.js'e import edip bunu App isimli fonksiyondaki kapsayıcı div içerisine yazıyoruz:

```jsx
// app.js
import './App.css';
import Header from './components/header';

function App() {
  return(
    <div>
      <h1>hello world</h1>
      <Header />
    </div>
  )
}

export default App;

// components/header.jsx
function Header() {
    return(
        <div>
            this is header
        </div>
    )
}
export default Header
```

# Jsx

- div içerisine yazdığımız format JSX. html görünümlü bir js yazım formatı.

- özel tanımlı keywordleri jsx'de kullanamayız. örneğin p tagi içerisine class="asdas" yazarsak çalışmaz. onun yerine className="asda" kullanmalıyız. çünkü class JS'de özel tanımlı.
- ya da label eklediğimizde for="" yerine htmlFor="" yazmamız gerekiyor.

- bir değişkeni yazdırmak için {} içerisine yazmalıyız. ya da template literal yöntemi ile yazdırabiliriz.

```jsx
const name = "savaş";
const surname = "görmüş";

function App() {
  return   (
    <>
      <h1>my name is {name}</h1>
      <h1>{`my surname is ${surname}`}</h1>
    </>
  )
}
```

- koşullu bir render işlemi yapabiliriz. örneğin koşulumuz true ise bize string ifademizi göstersin.

```jsx
const name = "savaş";
const surname = "görmüş";
const isLoggedIn = true;

function App() {
  return   (
    <>

      <h1>
         { isLoggedIn &&`my name is ${name} ${surname}`}
      </h1>
      
      {!isLoggedIn &&'giriş yapmadınız'}
{/* isLoggedIn eğer false olursa ekranda göreceğimiz ifade */}
  )}
```

- yada bu işlemi ternary yapısı ile daha kısa bir şekilde halledebiliriz.

```jsx
  <h1>
        {
          isLoggedIn ? `my name is ${name} ${surname}` : 'giriş yapmadınız'
        }
      </h1>
```