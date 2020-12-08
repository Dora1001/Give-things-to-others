import React from "react";


import {Header} from "../../components/Header/Header";
import {Counter} from "../../components/Counter/Counter";
import {Steps} from "../../components/Steps/Steps";
import {AboutUs} from "../../components/AboutUs/AboutUs";
import {Help} from "../../components/Help/Help";
import {Contact} from "../../components/Contact/ContactForm";


export const Home = () => {
    return (
        <div className="Home">
            <Header/>
            <Counter/>
            <Steps/>
            <AboutUs/>
            <Help/>
            <Contact/>
        </div>
    );

}


