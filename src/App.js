import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from "./Component/Layout/Navbar";
import Dashboard from "./Component/Dashboard/Dashboard";
import ProjectDetails from "./Component/Project/ProjectDetails";
import SignIn from "./Component/Auth/SignIn";
import SignUp from "./Component/Auth/SignUp";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/project/:id" component={ProjectDetails}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
