import React from 'react';
import p1 from "../src/files/p1.jpg";
import p2 from "../src/files/p2.jpg";
import p3 from "../src/files/p3.jpg";
import p4 from "../src/files/p4.jpg";



const Packdata =[
    {
        image:p1,
        type:"Weekend Getaway",
        price:"Rs.15000",


    },
    {
        image:p2,
        type:"Silver",  
        price:"Rs.35000",
        
    },
    {
        image:p3,
        type:"Gold",
        price:"Rs.65000",
        
    },
    {
        image:p4,
        type:"Platinum",
        price:"Rs.115000",
        
    },

];

const Packdetail =[
    {
        id:1,
        day:"Day 1",
        detail:"lorem  ipsum"

    },
    {
        id:2,
        day:"Day 2",
        detail:"lorem  ipsum"
        
    },
    {
        id:3,
        day:"Day 3",
        detail:"lorem  ipsum"
        
    },
    {
        id:4,
        day:"Day 4",
        detail:"lorem  ipsum"
        
    },

];

export default Packdata;
export {Packdetail};