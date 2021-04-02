import { Router } from '@reach/router';
import React from 'react';
import './App.css';

import Main from './views/Main';
import Connect from './views/Connect';
import Payments from './views/Payments';
import LoginRegister from './views/LoginRegister';
import CheckoutForm2 from './views/CheckoutForm2';

// Create
import UserCreate from './views/User/UserCreate';
import ToolCreate from './views/Tool/ToolCreate';
import ReviewCreate from './views/Review/ReviewCreate';
//Detail
import UserDetail from './views/User/UserDetail';
import ToolDetail from './views/Tool/ToolDetail';
import ReviewDetail from './views/Review/ReviewDetail';
//Edit
import UserEdit from './views/User/UserEdit';
import ToolEdit from './views/Tool/ToolEdit';
import ReviewEdit from './views/Review/ReviewEdit';


function App(props) {
    return ( 
    < div className = "App">
        <h1> Neighborly </h1> 
        {/* <Link to = { `/homepage` } > Back to Home </Link> <br/> */}
        <Router >
            <LoginRegister path = "/"/>
            <Main path = "/homepage"/>
            <UserCreate path = "/user/new" />
            <ToolCreate path="/user/:id/new_tool"/>
            <ReviewCreate path="/user/:id/new_review"/>

            <UserEdit path = "/user/:id/edit" />
            <ToolEdit path = "/user/:id/tool/edit" />
            <ReviewEdit path = "/user/:id/review/edit" />

            <UserDetail path = "/user/:id" />
            <ToolDetail path = "/user/:id/tool"/>
            <ReviewDetail path = "/user/:id/review/:id"/>

            <Connect path = "/user/:id/connect"/>
            <Payments path= "/user/:id/payments"/>
            <CheckoutForm2 path = "/user/:_id/tool/:tool_id/checkout"/>
        </Router>
        </div>
    );
}

export default App;