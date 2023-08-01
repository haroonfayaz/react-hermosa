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
			<nav ref={navRef} className='nav'>
				<NavLink to="/" className='a'>Home</NavLink>
				<NavLink to="/locations" className='a'>Locations</NavLink>
				<NavLink to="/package"className='a'>Package</NavLink>
                <NavLink to="/register" className='a'>Register</NavLink>
                <NavLink to="/contact" className='a'>Contact US</NavLink>

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
