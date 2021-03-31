import Create from './views/Create';
import Main from './views/Main';
import UserDetail from './views/UserDetail';
import ToolDetail from './views/ToolDetail';
import Connect from './views/Connect';
import Payments from './views/Payments';
import LoginRegister from './views/LoginRegister';
import { Link } from '@reach/router';
import { Router } from '@reach/router';
import React, { useState } from 'react';
import Edit from './views/Edit';
import './App.css';

function App(props) {
    const [allusers, setAllUsers] = useState([]);

    return ( < div className = "App">
        <h1> Neighborly </h1> 
        <Link to = { `/` } > back to home </Link> <br/>
        <Router >
        <LoginRegister path = "/"/>
        <Main path = "/homepage"/>
        <Create path = "/user/new" />
        <Edit path = "/user/:id/edit" />
        <UserDetail path = "/users/:id" />
        <ToolDetail path = "/tool/:id"/>
        <Connect path = "/user/:id/connect"/>
        <Payments path = "/user/:id/checkout"/>
        </Router>
        </div>
    );
}

export default App;