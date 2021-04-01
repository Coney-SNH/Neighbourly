import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const ToolCreate = (props) => {
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({});
    const { id }=props;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        //make a post request to create a new tool`
        axios.post(`http://localhost:8000/api/user/${id}/tool`, {
            type,
            description,
            price,
            startDate,
            endDate
        })
            .then(res => {
                console.log(res);
                if (res.data.errors) {
                    setErrors(res.data.errors)
                } else { navigate(`/user/${props._id}`) }
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h3> Create a tool for rental! </h3>
            <Link to={`/homepage`} > back to home </Link><br />
            <form onSubmit={onSubmitHandler} >

                <p><label htmlFor="Type">  Type: </label><br />
                <input type="text" name="type" onChange={(e) => setType(e.target.value)} value={type} />
                <span > {errors.type ? errors.type.message : ''} </span></p>
                
                <p><label htmlFor="Description" >  Description: </label><br />
                <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description} /><br />
                <span> {errors.description ? errors.description.message : ''} </span></p>
                
                <p><label htmlFor="price"> Price: </label><br />
                <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} value={price} />
                <span > {errors.price ? errors.price.message : ''} </span></p>
                
                <p><label htmlFor="startDate"> When will the tool be available: </label><br />
                <input type="date" name="startDate" onChange={(e) => setStartDate(e.target.value)} value={startDate} />
                <span > {errors.startDate ? errors.startDate.message : ''} </span></p>
                
                <p><label htmlFor="endDate"> When will you need the tool back by: </label><br />
                <input type="date" name="endDate" onChange={(e) => setEndDate(e.target.value)} value={endDate} />
                <span > {errors.endDate ? errors.endDate.message : ''} </span></p>
                
                <input type="submit" value="Add New Tool" />
            </form>
        </div>
    )
}

export default ToolCreate;