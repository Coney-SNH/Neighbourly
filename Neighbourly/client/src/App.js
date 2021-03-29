import Create from './views/Create';
import Main from './views/Main';
import Detail from './views/Detail';
import { Link } from '@reach/router';
import { Router } from '@reach/router';
import React, { useState } from 'react';
import Edit from './views/Edit';
import './App.css';

function App(props) {
    const [allusers, setAllUsers] = useState([]);

    return ( <div className = "App">
        <h1 > Neighborly </h1>
        <Router>
        <Main path = "/" />
        <Create path = "/user/new" />
        <Edit path = "/user/:id/edit" />
        <Detail path = "/users/:id" />
        </Router>
        </div>
    );
}

export default App;