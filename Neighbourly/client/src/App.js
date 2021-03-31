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

import './App.css';

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



        </Router>
        </div>
    );
}

export default App;