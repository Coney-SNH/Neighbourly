import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const [allusers, setAllUsers] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/user`)
            .then(res => {
                console.log("**********", res)
                setAllUsers(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return ( 
        <div >
        < h1 > These users are looking for a good home</h1> 
        <Link to = "/user/new" > add a user to the shelter </Link>
        <table className = "table table-danger col-8 mx-auto">
        <tr>
        <th>  Full Name </th> 
        <th > Type </th> 
        <th > Actions </th> 
        </tr> 
        {allusers.map((user, index) => {
                return 
                    <tr key = { index.id }>
                    <td> {user.firstName} {user.lastName} </td>
                    <td > { user.type } </td>
                    <td > < Link to = { `/users/${user._id}` } > < button> Details </button></Link > | < Link to = { `/user/${user._id}/edit` } > < button > Edit </button></Link >
                    </td> 
                    </tr>
            })
        } 
        </table> 
        </div>
    )
}