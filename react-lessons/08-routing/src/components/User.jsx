import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    
    const {id} = useParams();
    // react-router-dom'dan import ettik ve id'yi tanımladık.
    return (
        <div>
            <h1>User Details</h1>
            id: {id}
        </div>
    )
}

export default User