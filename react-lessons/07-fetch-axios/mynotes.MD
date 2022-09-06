## Fetch
- https://jsonplaceholder.typicode.com/users
- users componentimiz mount edildiği anda ben jsonplaceholder'dan alacağımız örnek veriye olan isteği başlatmak istiyoruz. bu yüzden oluşturduğumuz componente ilk önce useEffect'i import edeceğiz.

- neden useEffect kullandık? çünkü componentimizi ilk yüklediğimizde sadece 1 kere fetch işlemi yapmak istiyoruz. eğer useEffect dışında bu fetch işlemini yaparsak component her render edildiğinde fetch işlemi gerçekleşir ve performans düşüklüğüne sebep olur.

-  useEffect( ()=>{},[] ) useEffecti kullandık ve bir arrow fonksiyon ile yazıyoruz. daha sonra dependency array'ini boş bıkarıyoruz. genel yapımız bu şekilde.
- arrow fonksiyonumuza fetch() içerisine ilgili endpoint'i yazdık ve daha sonra .then ile bir response aldık. tekrar .then ile bunu json formatına çeviriyoruz ve aldığımız response'un içerisindeki users'ı clg ile yazdırıyoruz:

```jsx
useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then(users => console.log(users)
        )
    },[] )
```

 - şimdi veriyi çektik fakat bunu konsolda değil ekranda görmek istiyoruz. bunun için de useState'i import edeceğiz.
- const[users, setUsers] = useState([]) ile içi boş bir array olan useState oluşturduk.
- componentimizde de map işlemi ile gerekli değişikliği yapacağız. tabi bu değişikliği ekrana yanıstmak için ilk önce yukarıdaki useEffect'teki clg kısmını usestate'den gelen setUsers olarak değiştirmeliyiz.

```jsx
{
    users.map(user => 
    <div key={user.id}>{user.name}</div> 
    )
}
```

- şimdi veri yüklenirken bir loading ifadesi koyalım. tekrar bir state oluşturacağız. sayfa açılır açılmaz loading olmasını istediğimiz için:  const[isLoading, setIsLoading] = useState(true) şeklinde tanımladık.
- tekrar component içerisine bunu ekledik. fakat şöyle bir durum var. sayfa açıldığında div içerisinde bir Loading yazısı göreceğiz. veri çekilecek ekrana yansıyacak ve loading yazısı kalmaya devam edecek. işte burada yine useEffectimize döneceğiz ve 2. then kısmında setUsers'dan sonra setIsloading'i ekleyip başlangıçta true olan değeri false haline getireceğiz.

```jsx
useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then(data => {
            setUsers(data)
            setIsLoading(false)
        })
        .catch((e) => console.log(e))
    },[] )
``` 
- bir diğer alternatif ise catch'den sonra .finally(()=> setIsLoading(false)) yaparak da bu sonuca ulaşabiliriz.

```jsx
useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => setUsers(data))
        .catch(e => console.log(e))
        .finally(setIsLoading(false))
    }, [])
```


## Axios

- native fetch ile yaptığımız bütün bu işlemleri axios kütüphanesi ile de yapabiliriz. aralarında büyük farklar olmamasına rağmen axios daha hızlı çalıştığı ve yazımı daha basit olduğu için tercih edebileceğimiz bir yöntem.

- örneğin axios kullandığımızda gelen datayı obje olarak gönderdiği için '.then((data) => setUsers(data))' komutu ile json formatına çevirmemize gerek yok.
- ayrıca axios daha çok browser desteğine sahip olduğu için daha çok kullanımı vardır.

- yarn add axios ile kurulumu yapıyoruz ve  import axios from 'axios' ile import işlemimizi gerçekleştiriyoruz..


- fetch yerine axios yazıyoruz ve stringify ifadesini kaldırıyoruz. geri kalanı tamamen aynı.

```jsx
 useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then((res) => setUsers(res.data))
        .catch(e => console.log(e))
        .finally(setIsLoading(false))
    }, [])
```

- fetch ile data => setUsers(data) ile çekiyorduk fakat axios bize bir response ve içerisinde bir data gönderdi. o yüzden res.data ile response'u çektik. eğer diğer örnekteki gibi data => setUsers(data) ile çekmeye çalışsaydık hiçbir şey görüntülemeyzdik.




