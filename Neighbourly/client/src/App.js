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
import img from './Neighbourly.PNG';

function App(props) {
    const [allusers, setAllUsers] = useState([]);

    return ( 
    < div className = "App">
        <div>
            <img src={img} style={{width: '50px', height: '50px', display: 'inline-block'}}/>
            <h1 style={{display: 'inline-block'}}>Neighborly</h1> 
        </div>
        {/* <Link to = { `/homepage` } > Back to Home </Link> <br/> */}
        <Router >
            <LoginRegister path = "/"/>
            <Main path = "/homepage"/>
            <Create path = "/user/new" />
            <CreateTool path="/user/:_id/new_tool"/>
            <Edit path = "/user/:id/edit" />
            <Detail path = "/user/:id" />
            <ToolDetail path = "/tool/:id"/>
            <Connect path = "/user/:id/connect"/>
            <CheckoutForm2 path = "/user/:id/checkout"/>
            <CheckoutForm2 path= "checkout"/>
        </Router>
        </div>
    );
}

export default App;