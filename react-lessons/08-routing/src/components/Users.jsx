import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
    }, [])
    
    return (
      <>
        <main>
          <h2>Welcome to the Users page!</h2>
          <p>You can do this, I believe in you.</p>
          <ul>
            <li>
              <Link to="/user/1">User 1</Link>
            </li>
            <li>
              <Link to="/user/2">User 2</Link>
            </li>
            <li>
              <Link to="/user/3">User 3</Link>
            </li>
          </ul>
        </main>
      </>
    );
  }
export default Users