# Nodejs

- npm init ile node projemizi başlatıyoruz. bize bir package.json dosyası oluşturdu ve içerisinde az önce bizden doldurmamızı istediği bilgileri yerleştirdi.
- index.js dosyası oluşturalım ve içerisine basit bir console.log("hello node") yazalım. terminale node index.js yazdığımızda görüntüleyeceğiz.
- package.json içerisinde scripts bölümü var. mesela buradaki test'i silelim ve "start" : "node index.js" olarak değiştirelim.
- şimdi terminale start yazalım. 
- örneğin slugify kütüphanesini indirip kullanalım(https://www.npmjs.com/package/slugify). npm i slugify  dependencies içerisine slugify eklendi. ayrıca node modules adında bir klasör oluştu. burada indirdiğimiz kütüphanelerin dosyaları bulunmakta. 
- diyelim ki bu klasörü sildik. npm install yazdığımızda otomatik olarak dependencies içerisindeki kütüphaneler tekrar yüklenecektir.
- slugify'ı dökümandaki gibi import ettik ve npm start ile (scripts'de modifiye etmiştik) çalıştırdık.

# EcmaScript6

- package.json'ad main'in altına  "type": "module", ekledik. şu an npm start ile çalıştırmak istediğimizde hata alacağız. çünkü yukarıda eklediğimiz slugify kütüphanesi ES6'dan önceki sürümlere import edildi. önce bunu değiştirelim.
- kendimiz bir modül yazıp import edeceğiz. my-module.js adında bir dosya oluşturduk. içerisine basit bir toplama işlemi yapan bir fonksiyon yazalım, dışa aktaralım ve bunu index.js'e import edelim.

```js
// my-module.js
const topla = (a,b) => a + b;
const cikar = (a,b) => a - b;

export const text = "text";

// object
export const user = {
    name: "Savas",
    lastname: "Gormus",
};
// array
export const users = [{
    name: "Savas",
    lastname: "Gormus",
},
{
    name: "Basar",
    lastname: "Gormus",
}];
export { hello, topla, cikar }



// index.js

import { hello, topla, cikar, text, user, users } from "./my-module.js";
console.log(topla(2,4));
console.log(cikar(2,4));
hello("savas");
console.log(text);
console.log(user);
console.log(users);
```

- bu şekilde bir string ifade, fonksiyon, array, obje vs istediğimiz herşeyi dışa aktarıp başka bir yere import ederek kullanabiliriz.

# Callback

- setTimeout() fonksiyonu iki tane parametre alır. birincisi yapmasını istediğimiz ikincisi ise ne kadar süre sonra yapacağı.

```js
setTimeout ( () =>{
     console.log('2 saniye sonra "hi" diyeceğim');
 }, 2000);
 ```

 - setInterval() fonksiyonu da iki parametre alır. birincisi yapmak istediğimiz ikincisi ise ne kadar sürede tekrarlayacağı. eğer durdurmazsak (örneğin ikinci parametreyi 1 saniye atadık) sonsuza kadar her saniye fonksiyona atadığımız işlemi gerçekleştirir.

```js
setInterval( () => {
    console.log("ben her saniye çalışacağım");
}, 1000);
 ```

- şimdi sayHi isimli bir fonksiyon yazacağız fakat içerisinde bir fonksiyon daha olacak:

```js
const sayHi = (callback) => {
    callback()
};

sayHi( ()=> {
    console.log("hello");
});
 ```

- https://jsonplaceholder.typicode.com/users fake bir api adresi aldık. fetch() ile bu veriye erişmeye çalışacağız.

- npm i node-fetch ile fetch() kütüphanesini kurduk ve aşağıdaki fonksiyonumuzu çalıştırdık.

```js
import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())  // data.json getir
    .then((users) => console.log(users))  // users bilgisini logla
```

- api'den fetch ile veri geldi ve bu data'yı json olarak parse ettik. daha sonra users bilgisini clg ile aldık. şimdi .then'in içerisinde bir end point alıp yeni bir fetch işlemi yapacağız.

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((data) => data.json())  // data.json getir
    .then((users) => {
        console.log("Users yüklendi", users);
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((data) => data.json())
        .then((posts) => console.log("Post yüklendi", posts));
    });
```

- eğer 2. fetch işlemini dışarıda yapmış olsaydık hangisi önce yüklenirse o ilk gelecekti. bu şekilde sıraya koymuş olduk.

- şimdi bu işlemi async/await ile yazacağız: yaptığımız sıralamaya sadık olarak yüklemeye devam edecek.

```js
async function getData(){
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()
    
    
    console.log("User 1", users);
    console.log("post 1", post1);
    console.log("post 2", post1);
}
getData();

```

 - npm i axios ile axios kütüphanesini yükleyelim.
 - axios bize gelen veriyi json formatına dönüştüreceği için .json()'ı tekrar yazmamıza gerek yok. await fetch ifadesini axios ile değiştirip end pointi vereceğiz. böylece 2 kere await kullanmamıza da gerek kalmayacak.
 - fakat axios bize data göndereceği için bu veriyi yeniden isimlendireceğiz: const {data.user} = await axios.... gibi

```js
//! callback.js
import axios from "axios";

(async () => {
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/1");
    const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
    const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

    console.log("user", user);
    console.log("post1", post1);
    console.log("post2", post2);
})();

```


# Promises

- resolve ve reject isminde 2 paramatre alıyor. örneğin fetch ile bir veri getirdik. ardından then() ile devamını istiyoruz. fetch ile gelen bir promise'dir. bir promise resolve yani başarılı olduğunda then()'e düşer ve işlemimize devam ederiz. reject olduğunda ise catch()'e düşer ve hata kontrolü yapmamızı sağlar.

- bir örnek yapalım. bir promise oluşturacağız ve eğer içerisine 1 gelirse resolve döndürecek 2 gelirse reject döndürecek.

```js
//callback

const getComments = (number) => {
    return new Promise((resolve, reject)=>{
        if (number == 1) {
            resolve("başarılı") 
        } else {
            reject("başarısız")
        }
    } )
};
getComments(2)
    .then((data)=> console.log(data))
    .catch((data)=>console.log(data))
``` 

```js
const getComments = () => {
    return new Promise(async(resolve, reject) =>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/users/1");

        resolve(data);
    });
};

getUsers()
    .then((data)=> console.log(data))
``` 

- örneğin istediğimiz postu çekelim:

```js
const getPosts = (post_id) => {
    return new Promise(async(resolve, reject) =>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
    
            resolve(data);
        });
    };

getPosts(2)
    .then((data) => console.log(data))
```

- şimdi bu 2 fonksiyonu sıraya koyalım. önce user sonra posts gelsin.

```js
(async() => {
    await getUsers()
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    
    await getPosts(1)
        .then((data)=> console.log(data))
        .catch((error) => console.log(error))
})();
```
- then/catch'den kurtulmak için farklı bir yol izleyeceğiz. try/catch blokları içerisine alacağız. üstteki promise içeren fonksiyonlarımıza reject ekledik ve resolve'u yoruma aldık.

```js
(
    async() => {
        try {
            const users = await getUsers();
            const post = await getPosts(1);
            
            console.log(users);
            console.log(post);
        } catch (error) {
            console.log(error);
        }
    }
)();
```

# Array Functions

- push / map / find / filter / some /every / includes

- push ile arrayin sonuna yeni bir eleman ekliyoruz.
- array içerisinde tek tek dönüyor. en çok kullandığımız özelliklerden birisi. içerisine bir callback fonksiyonu yazıyoruz. for döngüsü yerine kullanıyoruz.
- find array içerisinde verdiğimiz koşullarla arama yapar. koşullara uyan bir sonuç bulamaz ise undefined verir. bulduğu ilk elemeanı getirir.
- filter birden fazla sonuç almak istediğimizde.
- some herhangi birisi uyuyor ise true uymuyor ise false döner.
- every ise arrayin bütün elemanlarının şarta uymasını bekliyor.
- includes içinde geçiyor mu geçmiyor mu bunu control ediyor. true ya da false verir.

# Bölüm sonu kazanımları

- dependencies kısmında yüklediğimiz kütüphaneler var. eğer node_modules dosyamız silinirse kolaylıkla burada bulunan kütüphaneleri indirebiliri.z
- npm start diyerek scriptlerimizi aktive edebiliriz.
- import gibi keywordleri kullanmak için neler yapmamız gerektiğini öğrendik. mymodules diye bir dosya oluşturduk ve burada modüllerimiz yazıp dışa aktarak index.js'de kullandık.
- callback konusunda fetch ve axios kütüphaneleri ile dışarıdan veri alıp sergilemeyi gördük. async/await ile asenkron işlemlerimizi içiçe yazmadan sırayla yazmayı gördük. anonim async fonksiyonu yazmayı gördük. axiosun fetche göre avantajlarını konuştuk. 
- promise yapılarını gördük ve then chain ile nasıl fonksiyonu kuracağımızı öğrendik. gelen promise'in resolve ya da reject durumunda neler yapacağını uyguladık. then chain yerine try/catch bloğunda bu işlemi nasıl yapacağımızı gördük.
- array fonksiyonlarını tekrar ettik. push, map, find, filter, some, every, includes

# Ödev

-  Bu fonksiyon **"async"** olarak tanımlanmalı ve default olarak dışa aktarılmalıdır. Fonksiyonun içindeki asenkron fonksiyonlar **"await"** ile tanımlanmalıdır.
-  Fonksiyon **Number** tipinde tek parametre alır. Bu parametre **user id**'yi belirtir.
-  Fonksiyonun görevi aşağıdaki endpoint'e giderek parametrede verilen user id ile ilgili kullanıcının verilerini çekmek olmalı. İstekleri **"axios"** kütüphanesini kullanarak yapmanız gerekiyor. İsteği yaparken aşağıdaki endpointin sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.

	 [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

-  Yine aynı fonksiyonun içerisinde ve yine aynı user id için bir de "posts" isteği yapılmalıdır.İsteği yaparken aşağıdaki endpoint'in sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.

	[https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=1)

-  Artık elimizde kullanıcı bilgileri ve bu kullanıcının post'ları var. Bu iki veriyi birleştirip return edin. Birleştirme sonucunda elinizde aşağıdaki gibi bir obje bulunması gerekiyor.

	```
	{
		id: 1,
		name: "Leanne Graham",
		username: "Bret",
		email: "Sincere@april.biz",
		address: {
			street: "Kulas Light",
			suite: "Apt. 556",
			city: "Gwenborough",
			zipcode: "92998-3874",
			geo: {
				lat: "-37.3159",
				lng: "81.1496"
			}
		},
		phone: "1-770-736-8031 x56442",
		website: "hildegard.org",
		company: {
			name: "Romaguera-Crona",
			catchPhrase: "Multi-layered client-server neural-net",
			bs: "harness real-time e-markets"
		},
		posts: [{
			userId: 1,
			id: 1,
			title: "sunt aut facere repellat",
			body: "quia et suscipit suscipit recusandae"
		}]
	}
	```


