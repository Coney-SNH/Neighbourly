import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const { id } = props;
    const [user, setUser] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/` + id)
            .then(res => {
                setUser(res.data.user);
                setFirstName(res.data.user.firstName);
                setLastName(res.data.user.lastname);
                setType(res.data.user.type);
                setDescription(res.data.user.description);
                setPrice(res.data.user.price);
                setLoaded(true);
            })
            .catch(err => console.log(err.message))
    }, []);

    const deleteUser = (userId) => {
        axios.delete(`http://localhost:8000/api/user/` + userId)
            .then(res => {
                navigate('/homepage')
            })
    }
    return (
        <div>
            <h2>Details for {firstName}{lastName}</h2>
            <Link to={`/homepage`}> Home </Link><br />

            <label htmlFor="First Name" >First Name: {firstName}</label>
            <br />

            <label htmlFor="Last Name" > Last Name: {lastName}</label>
            <br />

            <label htmlFor="Address" > Address: {address}</label>
            <br />

            <label htmlFor="Type">  Type: {type}</label>
            <br />

            <label htmlFor="Description" >  Description: {description}</label><br />
            <br />

            <label htmlFor="price"> Price: {price}</label><br />
            <br />

            <button onClick={(e) => deleteUser(user._id)}> Delete {firstName} </button>

        </div>
    )
}