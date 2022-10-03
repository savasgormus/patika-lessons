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

- user adında bir component oluşturduk ve routes içerisine ekledik.(routes dediğimiz eski versiyondaki switch). fakat user/:id şeklinde eklemeliyiz ki aşağıda yapacağımız uygulamalarda problem yaşamayalım.

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

- yüklenmesi için öncelikle axios kütüphanemizi kuralım ve import edelim: yarn add axios

```jsx
// users.jsx

import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
    }, [])
    // useEffect ile mount anında fake api'den veriyi çektik.
    
    return (
      <>
        <main>
          <h2>Welcome to the Users page!</h2>
          <p>You can do this, I believe in you.</p>
          <ul>
            {/* map işlemi yapıyoruz ve sırayla bize api'den gelen verileri sıralıyor. */}
            {
              users.map((user) => (
                <li key={user.id}>
                  <Link to={`/user/${user.id}`}>{user.name}</Link>
                  {/* her bir endpointi user id'ye göre belirlemesi için backtick ile linkledik. */}
                </li>
              ))
            }
          </ul>
        </main>
      </>
    );
  }
export default Users
```

- gelen bilgileri map işlemi ile sıraladık. Link içerisine `` ile gideceği endpointi belirledik. user/id şeklinde yazdık.

- sırada kullanıcılarının detay bilgileri görmek için yapacağımız işlemlere. user.jsx dosyamıza girdik: bu componente girdiğimzde bir istek yapacağız. bu yüzden useEffect() ve useState()'i import edelim. önce boş bir state tanımlayalım ve useEffect() kullanarak axios ile az önceki users.jsx componentimizde çektiğimiz veriyi çekelim.
- axios ile çekeceğimiz linkte ufak bir değişiklik yapacağız: backtick ile linki alıp /users/${id} ile bitireceğiz. gelen respons'u da setUser(res.data) ile yazdık.

- kullanıcılardan birine tıkladığımızda loading yazısını gelmesini istiyoruz. şimdi bunun için bir state tanımlayalım. state başlangıçta true olacak ve axios ile çektiğimiz veriler geldiğinde false'a düşerek kaybolacak. 

- bir sonraki kullanıcıyı göstermesi için bir button oluşturacağız. Önce Link ile yapalım. import edelim ve Link to= kısmına backtick ile /user/$id + 1 diyelim. tabi burada id'yi string göreceği için bizi yanlış yönlendirecek. o yüzden bu ifadeyi parseInt(id) + 1 şeklinde yazmamız gerekecek. yine bir diğer dikkat etmemiz gereken nokta useEffect()'in ikinci parametresi olan arrayin içerisine id yazmalıyız ki çektiğimiz veri tekrar yüklensin.












