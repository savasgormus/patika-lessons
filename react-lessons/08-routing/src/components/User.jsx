import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

const User = () => {
    const {id} = useParams();
    // react-router-dom'dan import ettik ve id'yi tanımladık.

    useEffect(() => {
      axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data))
      .finally(() => setLoading(false));
      // loading'i yükleme tamamlandığında false yapıyoruz
    }, [id]);
    
    const [user,setUser] = useState({});

    const [loading,setLoading] = useState(true)
    // loading ekranı için stateimizi yazdık
    
    return (
        <div>
            <h1>User Details</h1>
            {loading && <div> Loading.. </div>}
            <p>{JSON.stringify(user)}</p>
            <br />

            <Link to={`/user/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
        </div>
    )
}

export default User