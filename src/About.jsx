import React from 'react';
import Footer from './Footer';
import why from "./files/why.jpg";
import purpose from "./files/purpose.png";
import vision from "./files/vision.jpg";
import Tag from "./Tag";


const About =()=>{
    return(
        <>
            <div className='container mt-5'>
                <div className="about-detail">
                    <h3> Our Purpose</h3>
                    <div className='about-side'>
                    <p> We've always aimed to give people a platform where they can have the best travel experience, where they don't have to worry about the lodging, the food, the transportation, or even whether they'll be able to make the most of a place because with our carefully curated itineraries, they get everything at their disposal making the experience easy and hassle-free.</p>
                    <div className="about_img">
                        <img src={purpose} alt="purpose"/>
                    </div>
                </div> 
                </div>
                <div className="about-detail">
                    <h3>Why Choose Hermosa Trips</h3>
                    <div className='about-side'>

                    <p> 
                    The top travel company in Kashmir, Hermosa Trips India, is known for its excellent customer care and premium vacation packages. We provide tour packages to both individual and corporate customers at great costs and are dependable, quick, and reasonable. Our extensive selection of Kashmir vacation packages is made to suit all kinds of visitors, from luxury tourists seeking a more opulent getaway to cost-conscious individuals or families seeking a cheap yet exciting experience. We offer the ideal package for you, whether you're planning a romantic break, a family vacation, or just some much-needed rest and relaxation.</p>
                   
                <div className="about_img">
                        <img src={why} alt="why"/>
                    </div> 
                    </div> 
                    </div> 


                <div className="about-detail">
                    <h3>What We See </h3>
                    <div className='about-side'>

                    <p>To be India's most reliable travel community. We seek to establish a company where ethical travel and adventure may coexist.To encourage eco-tourism and share the socio-economic advantages of travel with the nearby community.So get in touch with us right away if you're ready for a totally unique travel experience! Hermosa Trips  is connected to more than 100+ active travel agencies worldwide and provides them with unbroken services using cutting-edge Technology.</p>
                    <div className="about_img">
                        <img src={vision} alt="vision"/>
                    </div>
                    </div> 

                </div>             
            </div>   
            
           <Tag/>
            <Footer/>    
        </>

    );
};
export default About;