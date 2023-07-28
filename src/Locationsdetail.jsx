import React from 'react';
import { Nlcard } from './Lcard';
import Nldata from "./Locdata";
import Footer  from './Footer' ;

const Locationdetail =(props)=>{
    return (
        <>
<section className="location-section">
            <div className="location-heading">
                <h1>Discover The <span>Beautiful Paradise</span></h1>
            </div>
                {
                    Nldata.map((val,ind)=>{
                        return <Nlcard
                            key={ind}
                            imgsrc={val.imgsrc}
                            place ={val.title}
                            desc ={val.desc}
                        />
                    })
                }
      
    </section>  
    <Footer/>      
    </>
    );
};
export default Locationdetail;