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

- div içerisine yazdığımız format JSX. html görünümlü bir js yazım formatı.








