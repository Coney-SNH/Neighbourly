import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    // const [type, setType] = useState("");
    // const [description, setDescription] = useState("");
    // const [price, setPrice] = useState(0);
    const { id } = props;
    const [user, setUser] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/` + id)
            .then(res => {
                console.log(res.data)
                setUser(res.data.user);
                setFirstName(res.data.user.firstName);
                setLastName(res.data.user.lastName);
                setAddress(res.data.user.address);
                // setType(res.data.user.type);
                // setDescription(res.data.user.description);
                // setPrice(res.data.user.price);
                setLoaded(true);
            })
            .catch(err => console.log(err.message))
    }, []);

    const deleteUser = (userId) => {
        axios.delete(`http://localhost:8000/api/user/` + userId)
            .then(res => {
                navigate('/')
            })
    }
    const reviewUser = (userId) => {
        axios.post(`http://localhost:8000/api/user/$id/review` )
            .then(res => {
                navigate('/') //create a review for user
            })
    }
    return (
        <div>
            <h2>Details for {firstName}{lastName}</h2>
            <Link to={`/`}> Home </Link><br />

            <p><label htmlFor="First Name" >First Name: {firstName}</label></p>
            
            <p><label htmlFor="Last Name" > Last Name: {lastName}</label></p>
            
            <p><label htmlFor="Address" > Address: {address}</label></p><br />
            
            {/* <label htmlFor="Type">  Type: {user?.tools?.map((tool, index)=>
            <p key={ index }>{tool.type}</p>)}</label>
            <br />

            <label htmlFor="Description" >  Description: {user?.tools?.map((tool, index)=>
            <p key={ index }>{tool.description}</p>)}</label><br />
            <br />

            <label htmlFor="price"> Price: {user?.tools?.map((tool, index)=>
            <p key={ index }>{tool.price}</p>)}</label><br/>
            <br /> */}
            <button onClick={(e) => reviewUser(user._id)}> Write a review for {firstName} </button> <br/> <br/>

            <button onClick={(e) => deleteUser(user._id)}> Delete {firstName} </button>

        </div>
    )
}