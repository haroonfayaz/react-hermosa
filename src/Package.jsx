import React from 'react';
import Pcard from './Pcard';
import Packdata from './Packdata';

const Package =()=>{
    return(
        <>
        <section className="package" id="package">
                        <div className="package-title">
                            <h2>Packages</h2>
                        </div>

                        <div className="package-content">
                            
                        {Packdata.map((val,ind)=>{
                        return  <Pcard
                            key={ind}
                            image ={val.image}
                            price ={val.price}
                            type ={val.type}
                            
                        />
                        
                    })}
                            
                          

                        </div>

        </section>
        </>

    );
};
export default Package;