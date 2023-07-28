import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { NavLink } from 'react-router-dom';

const Navbar =()=>{
    return(
             <>
                <nav className="navbar navbar-expand-lg bg-primary">
                    <div className="container-fluid ">
                        <NavLink className="navbar-brand " to="/">Hermosa Trips</NavLink>
                       
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-2">
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="locations">Locations</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="package">Package</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="about">About</NavLink>
                            </li>
                        </ul>
                       
                        </div>
                    </div>
                </nav>
             </>
    );
};
export default Navbar;
