import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./Component/Layout/Navbar";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
            </div>
        </BrowserRouter>
    );
}

export default App;
