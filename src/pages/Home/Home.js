import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Home.css';
import Login from '../Login/Login';
import Signup from '../Login/Signup';
import 'react-bootstrap/Navbar';


const Home = () => {
    return(
        <div>       
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to="/home" class="navbar-brand" >ToToNoNO</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/home' class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/' class="nav-link">login</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/signup' class="nav-link">signup</Link>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
            
            <h2>this is Home</h2>
            <ul>
                <li>
                    <Link to='/newComponent'>으악~</Link>
                </li>
            </ul>            
        </div>
         
    )
}

export default Home;