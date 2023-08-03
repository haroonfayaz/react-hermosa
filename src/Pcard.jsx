import React from 'react';
import { Link } from 'react-router-dom';



const Pcard =(props)=>{
    return(
        <>
              <div className="box">
                    <div className="image">
                        <img src={props.image} alt=""/>
                        <h3>{props.price}</h3>
                    </div>

                
                        <div className="dest-content">
                            <div className="package1">
                                <h4>{props.type}</h4>
                                <Link to="/package">
                                    <button className='pack_submit'>View Details</button>
                                    </Link>                                
                            </div>
                        </div>
                </div>
        </>
    );
};
export default Pcard;
