import React from "react";
import "./oddaj-rzeczy.scss"
import {Link as Link2} from "react-router-dom";

export const OddajHeader = ({handleLogout}) => {
    return (
        <header className="header" id="start">
            <div className="header-img">
                <img className="header-img-one" src={"../../images/Form-Hero-Image.jpg"} alt="oddam w dobre rece"/>
            </div>
            <div className="header-content">
                <nav className="header-nav">
                    <ul>
                        <li><a className="oddaj-nav-link-login">Oddaj rzeczy</a></li>
                        <li><a className="header-nav-link-login" onClick={handleLogout}>Log out</a></li>

                    </ul>
                    <ul>
                        <li>
                            <Link2 to="/" className="header-nav-link"> Start </Link2>
                        </li>
                        <li>
                            <Link2 to="/"  className="header-nav-link"> O co chodzi? </Link2>
                        </li>

                        <li>
                            <Link2 to="/"  className="header-nav-link"> O nas </Link2>
                        </li>

                        <li>
                            <Link2 to="/" className="header-nav-link"> Fundacja i organizacje</Link2>
                        </li>

                        <li>
                            <Link2 to="contact" className="header-nav-link"> Kontakt</Link2>
                        </li>
                    </ul>
                </nav>
                <div className="header-title">
                    <h1>Zacznij pomagać!
                        <br/> Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>

                    <img className="header-img-two" src={"../../images/Decoration.svg"} alt="oddam w dobre rece"/>

                </div>
                <div className="oddaj-steps">
                    <div className="oddaj-step-one"><p>1</p><p>Wybierz<br/> rzeczy</p></div>
                    <div className="oddaj-step-two"><p>2</p><p>Spakuj<br/> w worki</p></div>
                    <div className="oddaj-step-three"><p>3</p><p>Wybierz<br/> fundację</p></div>
                    <div className="oddaj-step-four"><p>4</p><p>Zamów<br/> kuriera</p></div>
                </div>

            </div>


        </header>

    )


}