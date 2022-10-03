import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
    // state'imizi tanımlıyoruz
    const [loading, setLoading] = useState(true);
    // yüklenirken loading yazısı gelmesini istiyoruz.

    useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .finally(() => setLoading(false))
    }, [])
    // useEffect ile mount anında fake api'den veriyi çektik.

    return (
      <>
        <h1>Users</h1>

        {loading && <div>Loading...</div>}

        <ul>
          {users.map((user)=> (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}> {user.name} </Link>
            </li>
          ) )}
        </ul>
      </>
    );
  }
export default Users