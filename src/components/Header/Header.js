import React from "react";
import "./header.scss"

export const Header = () => {
    return (
        <header className="header">
            <div className="header-img">
                <img className="header-img-one" src={"../../images/Home-Hero-Image.jpg"} alt="oddam w dobre rece"/>
            </div>
            <div className="header-content">
                <nav className="header-nav">
                    <ul>
                        <li>
                            Start
                        </li>
                        <li>
                            O co chodzi?
                        </li>

                        <li>
                            O nas
                        </li>

                        <li>
                            Fundacja i organizacje
                        </li>

                        <li>
                            Kontakt
                        </li>
                    </ul>
                </nav>
                <div className="header-title">
                    <h1>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                </div>
            </div>


        </header>

    )


}


