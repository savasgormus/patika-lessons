- yarn add react-router-dom ile kütüphanemizi kuruyoruz.
- router'ın avantajı bir linke tıkladığımızda sayfanın yenilenmemesi. böylece router-dom kullanarak sadece değişmesini istediğimiz alanların değişmesini sağlayabiliyoruz.

- index.js dosyamıza import { BrowserRouter } from "react-router-dom"; ile import ettikten sonra aşağıdaki App divini BrowseRouter div'i ile sarmalıyoruz.

```jsx
// index.js
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </React.StrictMode>
);
```

- daha sonra App.js dosyamıza geliyoruz ve yine dökümantasyondaki kodu buraya yapıştırıyoruz.

```jsx

// App.js
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
``` 

- App.js içerisindeki Home ve about fonksiyonlarını components klasörü içerisine taşıyalım.

# Url Parameters

- user adında bir component oluşturduk ve routes çerisine ekledi.(routes dediğimiz eski versiyondaki switch). fakat user/:id şeklinde eklemeliyiz ki aşağıda yapacağımız uygulamalarda problem yaşamayalım.

```jsx
//app.js
...
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="user/:id" element={<User />} />
      </Routes>
```

- users componentimizde bir listeleme yapalım ve tıkladığımızda bizi o kullanıcının detaylarına götürsün. react-router-dom ile Link'i import edelim. Link içerisine bizi yönlendireceği url'yi girdiğimizde istediğimiz şekilde bizi yönlendirecektir.

- peki bu durumda her bir kullanıcı için ayrı bir component mi oluşturacağız? hayır. bunun yerine react-router-dom'dan useParams'ı import edeceğiz. fonksiyonumuz içerisine {id}'yi useParams için tanımlıyoruz ve kapsayıcı div içerisine yazıyoruz.

```jsx 
//user.jsx
import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    
    const {id} = useParams();
    return (
        <div>
            <h1>User Details</h1>
            id: {id}
        </div>
    )
}

export default User
``` 

- şimdi biraz daha gerçekçi bir hale getirelim. fake bir api ile gelecek kullanıcı bilgilerini yerleştirelim. https://jsonplaceholder.typicode.com/

- users.jsx dosyamıza useEffect ve useState'i import ettik. ve state'imizi boş bir array olarak tanımlayalım. ardından useEffect ile mount durumuda yüklenmesini sağlayacağız. 

- yüklenmesi için öncelikle axios kütüphanemizi kuralım: yarn add axios












