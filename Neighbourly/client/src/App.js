import { Link } from '@reach/router';
import { Router } from '@reach/router';
import React, { useState } from 'react';
import Main from './views/Main';
//Create
import Create from './views/User/UserCreate';
import CreateTool from './views/Tool/ToolCreate';
// import CreateReview from './views/Review/ReviewCreate';
//Detail
import Detail from './views/User/UserDetail';
// import Detail from './views/Tool/ToolDetail';
// import Detail from './views/ReviewDetail';
//Edit
import Edit from './views/User/UserEdit';
// import Edit from './views/Tool/ToolEdit';
// import Edit from './views/Review/ReviewEdit';
//Stripe imports
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import './App.css';

const promise = loadStripe("pk_test_51IalToAQmXzgarKriNlG0enhbeYqakTPb3e8GyHE6mbNLEIZMACg8k5J0Ul8GPk9nFEsbuyBAUzhCMF5AELLp0CZ003isiZgwB");

function App(props) {
    const [allusers, setAllUsers] = useState([]);

    return ( <div className = "App">
        <h1 > Neighborly </h1>
        <Router>
        <Main path = "/" />
        <Create path = "/user/new" />
        <CreateTool path = "/user/:id/new_tool" />
        {/* <CreateReview path = "/user/new_review" /> */}

        <Edit path = "/user/:id/edit" />
        {/* <EditTool path = "/user/:id/edit_review" />
        <EditReview path = "/user/:id/edit_review" /> */}

        <Detail path = "/users/:id" />
        {/* <DetailTool path = "/users/:id/detail_tool" />
        <DetailReview path = "/users/:id/detail_review" /> */}

        <Elements stripe={promise} >
            <CheckoutForm path="/users/:id/checkout" />
        </Elements>


        </Router>
        </div>
    );
}

export default App;