import React from 'react';
import Home from './Home';
import {Routes, Route, useRoutes} from 'react-router-dom';
import Navbar from './Navbar';
import Package from './Package';
import Register from './Register';
import About from './About';
import Contact from './Contact';
import Locationdetail from './Locationsdetail';



const App =()=>{
    const routes = useRoutes([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/locations",
            element:<Locationdetail/>
        },
        {
            path:"/package",
            element:<Package/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/about",
            element:<About/>
        },
    ]);
    return(
        <>
        <Navbar/> 
        {routes}      
        </>);
};
export default App;
