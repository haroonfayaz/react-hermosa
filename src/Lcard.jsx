import React from 'react';
import { Link } from 'react-router-dom';




const Lcard=(props)=>{
    return(
        <>
         <section className="locations" id="locations">       
            <div className="location-content">
                <Link to="/locations" >
                    <div className="col-content">
                        <img src={props.imgsrc} alt=""/>
                        <h5>{props.title}</h5>
                        <p>{props.place}</p>
                    </div>
                </Link>            
            </div>
         </section>
        </>
    );
};



const Nlcard =(props)=>{
    return(
        <>
            <div className="location-detail" id="pahalgam">
                    <h1>{props.place}</h1>
                    <div className="stars">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>
                    <p>{props.desc}</p>
                    <div className="location-img">
                        <img src={props.imgsrc} alt=""/>
                    </div>
            </div>
        </>
    );
};


export default Lcard;
export {Nlcard };