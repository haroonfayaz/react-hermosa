import React from 'react';
import Footer from './Footer';
import Locations from './Locations';
import Package from './Package';


const Home =()=>{
    return(
        <>
        <div className='background-image'>

            <div className="banner">
            
            <div className="content" id="home"> 
                <div className="fixed">
                
            </div>
            <div className="scrolling-text">
            <p> For any queries please call : 6005651530</p>
            </div>

                <div className="title">
                
                    <h1>Hermosa Trips</h1>
                    <p>Plan your trip to paradise with the most affordable packages!</p>
                    <a href="./register.html" className="button">Register Now!</a>
                </div>
                </div>
            </div>
        </div>
        <Locations/>
        <Package/>
        <Footer/>
        </>
        );
};
export default Home;