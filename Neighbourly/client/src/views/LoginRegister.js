import React, { useState, Component } from 'react';
import { navigate } from '@reach/router';
// import Map from './Map';
import MapOne from './MapOne';
// import GoogleFileMap from './GoogleFileMap';
// import MapForm from './MapForm';

import {
    FormControl,
    InputLabel,
    OutlinedInput,
    Checkbox,
    Select,
    Button
} from '@material-ui/core';
import axios from "axios";
const styles = {
    paper: {
        width: "10rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "50%"
    }
}
export default  (props)=> {
    // *****************
    const{user, Users}=props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // const [userName, setUserName]= useState("");
    const [email, setEmail] = useState("");
    const [logEmail, setLogEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [logPassword, setLogPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

// ***********************************Login********************************************
        function validateForm() {
            return email.length > 0 && password.length > 0;
        };

        function handleSubmit(event) {
            event.preventDefault();
            axios.post('http://localhost:8000/api/user/login',{
                logEmail,
                logPassword
            })
                .then(response => {
                    console.log(response);
                    if (response.data.errors) {
                        setErrors(response.data.errors.errors)
                    } else { navigate("/homepage") }
                })
                .catch(err => console.log(err))
        }
// ******************************************************************************
    {console.log("**************************")}
    const onSubmitHandler = e => {
        e.preventDefault();
            axios.post('http://localhost:8000/api/user', {
                firstName,
                lastName,
              // userName,
                email,
                address,
                password,
                confirmPassword
            })
            .then(response=> {
                if (response.data.message === "error"){
                    console.log("There is an error");
                } else {
                    console.log(response)
                    console.log({ msg: "success!", user: response})
                    navigate("/homepage")
                }
            })
            .catch(err => console.log(err))
        };
        // ********************************************************** Google MAP API******************************
        
        return (
            <div  elevation={1} style={styles.paper}>
        {/* *************************** */}
{/* <Map/> */}
<div style={{margin: '5px', width: '150%', marginTop:'10px', height: '100%', padding:'2px'}}>
<MapOne 
            google={props.google}
            center={{ lat: 47.628933, lng: -122.343181}}
            height='300px'
            zoom={15}/>
            </div>

        {/* <MapForm google={props.google}
            center={{ lat: 47.628934, lng: -122.343181 }}
            height='300px'
            zoom={15}/> */}
        {/* <GoogleFileMap /> */}
        {/* <MapOne /> */}
        {/* *************************** */}

        <h2>Register{JSON.stringify(firstName)}</h2>
        <form onSubmit = {onSubmitHandler}>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>First Name</InputLabel>
                <OutlinedInput type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}/>
            </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Last Name</InputLabel>
                <OutlinedInput type="text" name="lastName" onChange={(e) => setLastName(e.target.value)}
                        value={lastName}/>
                </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>E-mail</InputLabel>
                <OutlinedInput type="text" name="email" onChange={(e) => setEmail(e.target.value)}
                    value={email} />
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput type="password" name="password" onChange={(e) => setPassword(e.target.value)}
                        value={password} />
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel> Confirm Password</InputLabel>
                <OutlinedInput type="password" name="Confirmpassword" onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Address</InputLabel>
                <OutlinedInput type="text" name="address" onChange={(e) => setAddress(e.target.value)} value={address} />
            </FormControl>
            <Button type="submit" variant="contained" color="primary">Register
            </Button>
        </form>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Email</InputLabel>
                <OutlinedInput type="email" name="email" onChange={(e) => setLogEmail(e.target.value)} value={logEmail}/>
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput type="password" name="password" onChange={(e) => setLogPassword(e.target.value)}value={logPassword}/>
            </FormControl>
            <FormControl>
                <Checkbox label='I agree to the Terms and Conditions'/>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
        </form>
    </div>
    )
}

