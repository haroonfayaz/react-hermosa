import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import { useRef } from "react";

const Navbar =()=>{
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    return(
             <>
        	<header>
			<h3>Hermosa Trips</h3>
			<nav ref={navRef}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/locations">Locations</NavLink>
				<NavLink to="/package">Package</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/contact">Contact US</NavLink>

				<NavLink to="/about">About Us</NavLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
             </>
    );
};
export default Navbar;
