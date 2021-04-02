import React, { useEffect, useState } from 'react';
import Axios from 'axios';
<<<<<<< HEAD
import { navigate, Link } from '@reach/router';
=======
import { navigate } from '@reach/router';
>>>>>>> 82bbbb06ab144f97050a06dd2e09e92051a02782
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
<<<<<<< HEAD
            <a href="/">Logout</a>
<<<<<<< HEAD
            < h3 > These users are looking for share tools</h3>
            <Link to="/user/new" > Add a user to the list </Link>
=======
            < h1 > These users are looking for share tools</h1>
            {/* <Link to="/user/new" > Add a user to the list </Link> */}
>>>>>>> 46e34793ec7b91549f7aab478cb46157fc6e11a6
            <br/>
            <br/>
            <Table className="table table-danger col-8 mx-auto">
                <TableHead>
                    <TableRow>
                        <TableCell> Full Name </TableCell>
                        <TableCell > Type </TableCell>
                        <TableCell > Actions </TableCell>
=======
            <Button variant="outlined" onClick={e => navigate(`/`)}>Logout</Button>
            {/* < h1 > These users are looking for share tools</h1> */}
            {/* <Link to="/user/new" > Add a user to the list </Link> */}
            <h3 style={{textAlign: 'left'}}>Manage Your Tools:</h3>
            <center><Table className="table table-danger col-8 mx-auto">
                <TableHead>
                    <TableRow>
                        <TableCell> Placeholder </TableCell>
                        <TableCell> Placeholder </TableCell>
                        <TableCell> Placeholder </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                </TableBody>
            </Table></center>
            <h3 style={{textAlign: 'left'}}>Available Tools:</h3>
            <center><Table className="table table-danger col-8 mx-auto">
                <TableHead>
                    <TableRow>
                        <TableCell> Full Name </TableCell>
                        <TableCell> Type </TableCell>
                        <TableCell> Actions </TableCell>
>>>>>>> 82bbbb06ab144f97050a06dd2e09e92051a02782
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
<<<<<<< HEAD
                                <Button onClick={e => navigate(`/user/${user._id}`)}> Details </Button>
                                <span> | </span>
                                <Button onClick={e => navigate(`/user/${user._id}/edit`)}> Edit </Button>
                                <span> | </span>
                                <Button onClick={e => navigate(`/user/${user._id}/new_tool`)}> Add Tool </Button>
=======
                                <Button style={{marginRight: '5px'}} variant="outlined" color="primary" onClick={e => navigate(`/user/${user._id}`)}> Details </Button>
                                <Button style={{marginRight: '5px'}} variant="outlined" color="primary" onClick={e => navigate(`/user/${user._id}/edit`)}> Edit </Button>
                                <Button style={{marginRight: '5px'}} variant="outlined" color="primary" onClick={e => navigate(`/user/${user._id}/connect`)}> Connect </Button>
                                <Button variant="outlined" color="primary" onClick={e => navigate(`/user/${user._id}/new_tool`)}> Add Tool </Button>
>>>>>>> 82bbbb06ab144f97050a06dd2e09e92051a02782
                            </TableCell>
                        </TableRow>)
                })
                }
                </TableBody>
<<<<<<< HEAD
            </Table>
=======
            </Table></center>
>>>>>>> 82bbbb06ab144f97050a06dd2e09e92051a02782
        </div>
    )
}