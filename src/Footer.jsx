import React from 'react';
import { NavLink } from 'react-router-dom';
import './Socialicons.css'; 

const Footer =()=>{
    return(
        <>
            <section className="footer" id ="about">
                <div className="foot">
                    <div className="footer-content">
                        
                        <div className="footlinks">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><NavLink to="./index.html">Home</NavLink></li>
                                <li><NavLink to="./register.html">Register</NavLink></li>
                                <li><NavLink to="./about.html">About Us</NavLink></li>
                                <li><NavLink to="./contact.html">Contact Us</NavLink></li>
                            </ul>
                        </div>
                        <div className="footlinks">
                            <h4>Address</h4>
                            <ul>
                                <li>Budoo Bagh,Khanyar</li>
                                <li>Srinagar,Jammu And Kashmir</li>
                                <li>190003</li>
                            </ul>
                        </div>
                        <div className="footlinks">
                            <h4>Phone </h4>
                            <ul>
                                <li>M : 6005651530</li>
                                <li>T : 0194-4030147</li>
                                <li>Email:hermosatrips@gmail.com</li>
                            </ul>
                        </div>

                        <div className="footlinks">
                            <h4>Connect</h4>
                            <div className="social">
                                <NavLink to="https://www.facebook.com/profile.php?id=100094492004593&mibextid=ZbWKwL" target="_blank"><i className='bx bxl-facebook'></i></NavLink>
                                <NavLink to="https://instagram.com/hermosatrips?igshid=MzRlODBiNWFlZA==" target="_blank"><i className='bx bxl-instagram' ></i></NavLink>
                                <NavLink to="https://wa.me/6005651530" target="_blank"><i className='bx bxl-whatsapp'></i></NavLink>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="end">
                    <p>Copyright © Hermosa Trips All Rights Reserved.<br/>Website developed by 🐫</p>
                </div>
            </section>
        </>
    );
};
export default Footer;