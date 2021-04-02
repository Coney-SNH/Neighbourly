import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';



const ReviewCreate = (props) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    // const [description, setDescription] = useState("");
    // const [price, setPrice] = useState(0);
    const [errors, setErrors] = useState({});
    // const [user, setUser] = useState({});
    const { id } = props;


    const onSubmitHandler = (e) => {
        e.preventDefault();
        //make a post request to create a new review
        axios.post(`http://localhost:8000/api/user/${id}/review`, {
            name,
            rating,
            review
            // address,
            // // type,
            // // description,
            // // price
        })
            .then(res => {
                console.log(res);
                if (res.data.message == "error") {
                    setErrors(res.data.errors.errors.reviews.errors)
                } else { navigate("/homepage") }
            })
            .catch(err => console.log(err))
    }

    return (

        <div>
            <Link to={`/homepage`}> Home </Link><br />
            <h1> Create a review for this user</h1>

            <form onSubmit={onSubmitHandler}>

                <p><label htmlFor="name">  Reviewer's Name: </label><br />
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} /><br />
                    <span > {errors.name ? errors.name.message : ''} </span></p>

                <p><label htmlFor="rating" >  User Rating: </label><br />
                    <input type="number" name="rating" onChange={(e) => setRating(e.target.value)} value={rating} /><br />
                    <span> {errors.rating ? errors.rating.message : ''} </span></p>

                <p><label htmlFor="review" >  Review: </label><br />
                    <input type="text" name="review" onChange={(e) => setReview(e.target.value)} value={review} /><br />
                    <span> {errors.review ? errors.review.message : ''} </span></p>

                {/* <textarea name="review" id="review" cols="50" rows="10" placeholder="Please tell us about your experience..."></textarea><br/> */}
                <input type="submit" value="Submit Review" />
            </form>
        </div>

    )
}

export default ReviewCreate;