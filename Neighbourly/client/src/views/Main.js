import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { navigate, Link } from '@reach/router';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';

export default props => {
    const [allusers, setAllUsers] = useState([]);
    const [tools, setTools] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/user`)
            .then(res => {
                console.log("**********", res)
                setAllUsers(res.data.results)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, []);

    if(loading){
        return(
            <p>Loading....</p>
        )
    }

    return (
        <div >
            <a href="/">Logout</a>
            < h3 > These users are looking for share tools</h3>
            <Link to="/user/new" > Add a user to the list </Link>
            <br/>
            <br/>
            <Table className="table table-danger col-8 mx-auto">
                <TableHead>
                    <TableRow>
                        <TableCell> Full Name </TableCell>
                        <TableCell > Type </TableCell>
                        <TableCell > Actions </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                allusers.map((user, index) => {
                    return (
                        <TableRow key={index}>
                            <TableCell> {user.firstName} {user.lastName} </TableCell>
                            <TableCell> {user?.tools?.type} </TableCell>
                            <TableCell>
                                <Button onClick={e => navigate(`/user/${user._id}`)}> Details </Button>
                                <span> | </span>
                                <Button onClick={e => navigate(`/user/${user._id}/edit`)}> Edit </Button>
                                <span> | </span>
                                <Button onClick={e => navigate(`/user/${user._id}/new_tool`)}> Add Tool </Button>
                            </TableCell>
                        </TableRow>)
                })
                }
                </TableBody>
            </Table>
        </div>
    )
}