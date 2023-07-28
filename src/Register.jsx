import React from 'react';

const Register =()=>{
    return(
        <>
          <div className='background-image'>
                <section class="registration">
                    <div class="register-form">
                        <h1>Register <span>Here</span></h1>
                        <form action="" onsubmit="return validateform()" id="myForm">
                            <input type="text" name="name" placeholder="Name" id="name" required autocomplete="off" />
                            <input type="email" name="email" placeholder="Email-Id" id="email" required autocomplete="off"/>
                            <input type="tel" name="contact" placeholder="Phone No." id="contact" required autocomplete="off"/>
                            <input type="date" name="travel_date" id="travel_date" required autocomplete="off"/>
                            <input type="text" name="city" placeholder="City" id="city" required autocomplete="off"/>
                            <input type="number" name="adult" placeholder="Adult" id="adult" required autocomplete="off"/>
                            <input type="number" name="children" placeholder="Children" id="children" min="0"/>
                            <br/> <br/>
                            <input type="submit" value="Submit" class="submitbtn"/>
                        </form>
                        
                    </div>
                </section>
                </div>  
        </>

    );
};
export default Register;