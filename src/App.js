import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from "./Component/Layout/Navbar";
import Dashboard from "./Component/Dashboard/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route path="/" component={Dashboard} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
