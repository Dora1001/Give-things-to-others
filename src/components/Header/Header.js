import React from "react";
import "./header.scss"
import {Link} from 'react-scroll'


import {BrowserRouter as Router, Link as Link2} from "react-router-dom";

export const Header = () => {
    return (
        <header className="header" id="start">
            <div className="header-img">
                <img className="header-img-one" src={"../../images/Home-Hero-Image.jpg"} alt="oddam w dobre rece"/>
            </div>
            <div className="header-content">
                <nav className="header-nav">
                    <ul>
                        <li>
                            <Link2 className="header-nav-link-login" to="/login"> Zaloguj</Link2>

                        </li>
                        <li><Link2 className="header-nav-link-login"  to="/register">Załóż konto</Link2></li>

                    </ul>
                    <ul>
                        <li>
                            <Link to="start" className="header-nav-link" smooth={true} duration={1000}> Start</Link>
                        </li>
                        <li>
                            <Link to="steps" className="header-nav-link" smooth={true} duration={1000}> O co chodzi?</Link>
                        </li>

                        <li>
                            <Link to="about" className="header-nav-link" smooth={true} duration={1000}> O nas</Link>
                        </li>

                        <li>
                            <Link to="help" className="header-nav-link" smooth={true} duration={1000}> Fundacja i organizacje</Link>
                        </li>

                        <li>
                            <Link to="contact" className="header-nav-link" smooth={true} duration={1000}> Kontakt</Link>
                        </li>
                    </ul>
                </nav>
                <div className="header-title">
                    <h1>Zacznij pomagać!
                       <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>

                    <img className="header-img-two" src={"../../images/Decoration.svg"} alt="oddam w dobre rece"/>

                </div>
                <div className="header-btns">

                        <Link2 className="header-btn-one" to="/login"> ODDAJ <br/> RZECZY </Link2>

                    <Router>
                        <Link2 className="header-btn-one" to="/login">ZORGANIZUJ<br/>ZBIÓRKĘ</Link2>
                    </Router>

                </div>

            </div>


        </header>

    )


}


