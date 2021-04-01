// Create
import Create from './views/Create';
import CreateTool from './views/Tool/ToolCreate';
import Main from './views/Main';
import Detail from './views/Detail';
import ToolDetail from './views/ToolDetail';
import Connect from './views/Connect';
import Payments from './views/Payments';
import LoginRegister from './views/LoginRegister';
import { Link } from '@reach/router';
import { Router } from '@reach/router';
import React, { useState, useEffect } from 'react';
import Edit from './views/Edit';
import './App.css';
import CheckoutForm2 from './views/CheckoutForm2';

function App(props) {
    const [allusers, setAllUsers] = useState([]);

    return ( 
    < div className = "App">
        <h1> Neighborly </h1> 
        <Link to = { `/` } > Back to Home </Link> <br/>
        <Router >
            <LoginRegister path = "/"/>
            <Main path = "/homepage"/>
            <Create path = "/user/new" />
            <CreateTool path="/user/:id/new_tool"/>
            <Edit path = "/user/:id/edit" />
            <Detail path = "/user/:id" />
            <ToolDetail path = "/tool/:id"/>
            <Connect path = "/user/:id/connect"/>
            <CheckoutForm2 path = "/user/:id/checkout"/>
            <CheckoutForm2 path="checkout"/>
        </Router>
        </div>
    );
}

export default App;