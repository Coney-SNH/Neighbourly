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
    const [tools, setTools]= useState({});
    const [reviews, setReviews]=useState({});
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/` + id)
            .then(res => {
                console.log(res.data)
                setUser(res.data.user);
                setFirstName(res.data.user.firstName);
                setLastName(res.data.user.lastName);
                setAddress(res.data.user.address);
                setType(res.data.user.type);
                setDescription(res.data.user.description);
                setPrice(res.data.user.price);
                setTools(res.data.user.tools);
                setReviews(res.data.user.reviews);
                setLoading(false);
            })
            .catch(err => console.log(err.message))
    }, []);

    const deleteUser = (userId) => {
        axios.delete(`http://localhost:8000/api/user/` + userId)
            .then(res => {
                navigate('/homepage')
            })
    }
    const reviewUser = (userId) => {
        axios.post(`http://localhost:8000/api/user/$id/review` )
            .then(res => {
                navigate(`/user/${userId}/new_review`) //create a review for user
            })
    }
    console.log(tools)

    if(loading){
        return(
            <p>Loading....</p>
        )
    }
    return (
        <div>
            <h2>Details for {firstName} {lastName}</h2>
            <Link to={`/homepage`}> Home </Link><br />

            <p><label htmlFor="First Name" >First Name: {firstName}</label></p>
            
            <p><label htmlFor="Last Name" > Last Name: {lastName}</label></p>
            
            <p><label htmlFor="Address" > Address: {address}</label></p><br />
            <table>
                <thead>
                    <tr>
                        <th>Tool Type  |</th>
                        <th>Tool Description  |</th>
                        <th>Tool Price  |</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.tools.map((tool, i) => {
                            return (
                                <tr key={i}>
                                    <td>{tool.type}</td>
                                    <td>{tool.description}</td>
                                    <td>{tool.price}</td>
                                    <td>
                                        <Link to={`/user/${user._id}/tool/${tool._id}/checkout`}><button>Rent Tool</button> </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <br/>
            <br/>
            <center><table>
                <thead>
                    <tr>
                        <th> Reviewer |</th>
                        <th>  User Rating  |</th>
                        <th> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.reviews.map((review, i) => {
                            return (
                                <tr key={i}>
                                    <td>{review.name}</td>
                                    <td><center>{review.rating}</center></td>
                                    {/* <td>{review.review}</td> */}
                                    <td>
                                        <Link to={`/user/${user._id}/review/${review._id}/`}><button>Read Review</button> </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table></center>



            <br/>
            <br/>
            <button onClick={(e) => reviewUser(user._id)}> Write a review for {firstName} </button> <br/> <br/>

            <button onClick={(e) => deleteUser(user._id)}> Delete {firstName} </button>

        </div>
    )
}