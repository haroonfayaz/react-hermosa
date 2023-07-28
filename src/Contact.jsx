import React from 'react';

const Contact =()=>{
    return(
        <>
            <div className='background-image'>
                <section class="registration">
                    <div class="register-form">
                        <h1>Work with <span>Us</span></h1>
                        <form action="" onsubmit="return partnerform()" id="myForm">
                            <input type="text" name="companyname" placeholder="Company Name" id="company-name" required autocomplete="off" />
                            <input type="email" name="Companyemail" placeholder="Email-Id" id="company-email" required autocomplete="off"/>
                            <input type="tel" name="contact" placeholder="Phone No." id="pcontact" required autocomplete="off"/>
                            <input type="text" name="place" placeholder="Address" id="address" required autocomplete="off"/>
                            <br/> <br/>
                            <input type="submit" value="Submit" class="submitbtn"/>
                        </form>
                        
                    </div>
                </section>
            </div>
        </>

    );
};
export default Contact;