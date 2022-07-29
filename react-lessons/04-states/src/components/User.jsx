import React from 'react'
import PropTypes from 'prop-types';

const User = ({name, lastname, isLoggedIn, age, friends, address}) => {

    // isLoggedIn false durumunda sadece bize bu alanı gösterecek.
    if (!isLoggedIn) {
        return(
            <div>
            <p>Giriş yapınız</p>
            </div>    
    )}

    // true yaptığımızda aşağıdaki bilgiler görüntülenecek.
  return (
    <div>
        <h1>
        {/* {isLoggedIn ? `Welcome ${name} ${lastname} (${age})` : "please log in"} 
        bu işlemi yukarıda tanımlayacağız*/}
        
        {`Welcome ${name} ${lastname} (${age})`}
        </h1>

        {address.title} {address.zip}

            <br />

        {friends &&
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

User.defaultProps = {
    isLoggedIn : false
}

export default User