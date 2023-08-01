import React from 'react';
import t1 from "./files/t1.jpeg";
import t2 from "./files/t2.jpeg";
import t4 from "./files/t4.jpeg";
import t5 from "./files/t5.jpeg";
import t6 from "./files/t6.jpeg";



const Labels =[
    {
        img:t1,
    },
    {
        img:t2,
    },
    {
        img:t4,
    }, 
    {
        img:t5,
    }, 
    {
        img:t6,
    },
];

const Tag =(props)=>{
    return(
        <>
   
<section className="container">
    <div className="text">
        <h2>Approved By</h2>
    </div>
    <div className="rowitems">
        <div className="container-box">
        <div className="container-image">
           <img src={t1} alt="Flight Services"/>
        </div>
           
        </div>
    
        <div className="container-box">
        <div className="container-image">
           <img src={t2} alt="Food Services"/>
        </div>
        </div>

        <div className="container-box">
        <div className="container-image">
            <img src={t4} alt="Travel Services"/>
        </div>
            
        </div>

        <div className="container-box">
        <div className="container-image">
            <img src={t5} alt="Hotel Services"/>
        </div>
            
        </div>
        <div className="container-box">
        <div className="container-image">
            <img src={t6} alt="Hotel Services"/>
        </div>
            
        </div>

    </div>


</section>
        </>
        
    );
};
export default Tag;