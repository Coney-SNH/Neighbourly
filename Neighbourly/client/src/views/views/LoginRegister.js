import React, { useState } from 'react';
import {
    Paper,
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
    const{user}=props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName]= useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const onSubmitHandler = e => {
        e.preventDefault();
        // User.create(e)
            axios.post('http://localhost:8000/api/user', {
                firstName,
                lastName,
                userName,
                email,
                address,
                password,
                confirmPassword
            })
            .then(response=> {
                if (response.data.message === "error"){
                    console.log("There is an error");
                } else {
                    console.log({ msg: "success!", user: user })
                }
            })
            .catch(err => console.log(err))
    };
{console.log("**************************")}
return (
    <div  elevation={1} style={styles.paper}>
        <h2>Login</h2>
        <form>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>User Name</InputLabel>
                <OutlinedInput type="text" name="firstName"/>
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>E-mail</InputLabel>
                <OutlinedInput type="email" name="email"/>
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput type="password" name="password"/>
            </FormControl>
            <FormControl>
                <Checkbox label='I agree to the Terms and Conditions'/>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
        </form>
        
        <h2>Register</h2>
        <form onChange = {onSubmitHandler}>
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
            <FormControl variant="outlined">
                <InputLabel>User Name</InputLabel>
                <OutlinedInput type="text" name="userName" onChange={(e) => setUserName(e.target.value)}
                    value={userName} />
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
                <OutlinedInput type="text" name="address" />
            </FormControl>
            <Button type="submit" variant="contained" color="primary">Register
            </Button>
        </form>
        {console.log(firstName)}
    </div>
  )
}

