import React from 'react';
import Lcard from './Lcard';
import Locdata from './Locdata';




const Locations=(props)=>{
    return(
        <>
         <section className="locations" id="locations">
            <div className="package-title">
                <h2>Locations</h2>
            </div>
            <div class="location-content">

                    {Locdata.map((val,ind)=>{
                        return  <Lcard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            place={val.place}
                        />
                        
                    })}
            </div>

         </section>
        </>
    );
};
export default Locations;