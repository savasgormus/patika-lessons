# Props

- app.js içerisine bir users componenti ekledik. bu componente bir property ekliyoruz. örneğin name verdik. şimdi bu propsu users componentinde kullanalım.
- fonksiyonumuz parametre kısmına props alıyor ve clg ile görmek istediğimizde bize bir object veriyor.
- kapsayıcı div içerisinde biz bu objeyi(props) parçalarına ayırıp kullanabiliriz.

```jsx
const User = (props) => {
    console.log(props);
  return (
    <div>
        Welcome {props.name} {props.lastname}  </div>
  )
}
export default User
``` 

- şimdi bu örneği biraz değiştirelim. componentimiz için isLoggedIn propertysi ekleyelim. eğer false ise "please log in", true ise verdiğimiz değerler gelsin:
- burada basit bir ternary if ifadesi ile işin içerisinden çıkabiliriz.

```jsx
import React from 'react'

const User = (props) => {
    console.log(props);
  return (
    <div>
        {props.isLoggedIn ? `welcome ${props.name} ${props.lastname}` : "please log in"}
    </div>
  )
}

export default User
```

- her seferinde props.name,props.lastname vs yazmak yerine fonksiyonun parametresine ({name, lastname, isLoggedIn}) girerek aşağıda kullandığımız bütün props ifadelerinden kurtulabiliriz yani şu şekilde de kullanabiliriz:

```jsx
import React from 'react'

const User = ({name, lastname, isLoggedIn}) => {
  return (
    <div>
        <h1>
        {isLoggedIn ? `Welcome ${name} ${lastname}` : "please log in"}
        </h1>
    </div>
  )
}

export default User
``` 

# Döngülerde "key" Prop'u

- şimdi elimizdeki componente prop olarak bir array vereceğiz ve componentin altında listelemeye çalışacağız.

```jsx
 {
  friends.map((friend, index) => 
    <div key={index}>
      <p>{friend}</p>
    </div>
    )
 }
```

- console'da hata almamak için key, id ile yazdırabiliriz.

```jsx
const User = ({name, lastname, isLoggedIn, age, friends}) => {
  return (
    <div>
        <h1>
        {isLoggedIn ? `Welcome ${name} ${lastname} (${age})` : "please log in"}
        </h1>

        {
           friends.map((friend) =>(
                <div key={friend.id}>
                    {friend.id} - {friend.name}
                </div>
            )
           )
        }
    </div>
  )
}
```

# Prop Types

- import PropTypes from 'prop-types'; ile import ediyoruz. componentimize gelecek olan prop'un türünü burada belirtiyoruz ki (örneğin string olark ifade ettik) farklı bir tür geldiğinde (örneğin integer) konsolda bize prop türünün hatalı olduğunu gösteriyor.

```jsx
import PropTypes from 'prop-types';
User.propTypes = {
    name : PropTypes.string
}
```

- oneofType: gelecek olan prop için belirttiğimiz değerlerden herhangi biri olabilir. örneğin age için string de olur number da olur.

- shape: gelecek olan ARRAY içerisindeki her öğenin proptype'ını belirtmek için kullanıyoruz. örneğin adres için title string, zip ise number olmalı.

```jsx

User.propTypes = {
    name : PropTypes.string,
    // name prop'unu string olarak belirtiyoruz. farklı bir değer verdiğimizde uyarı verecek
    lastname : PropTypes.string,
    isLoggedIn: PropTypes.bool.isRequired,
    // böylece bu kısım zorunlu yani bu prop'u yazmak zorundayız.
    
    age: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number
    ]),
    // string de olabilir number da olabilir.

    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
    // gelen array içerisinde title string, zip ise number olmalı.
}
```

- eğer gönderilen prop'a bir değer verilmediyse default bir değer atayabiliriz.

```jsx
User.defaultProps = {
    isLoggedIn : false
}
```

- yani app.js'de bu prop'un bir değeri yoksa otomatik olarak false olarak bize dönecek.