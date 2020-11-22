import React from "react";
import "./steps.scss"
import {BrowserRouter as Router, Link as Link2} from "react-router-dom";



export const Steps = () => {
    return (

        <div className="steps-cointainer" id="steps">
<div className="steps-header">
        <h1>Wystarczą 4 proste kroki</h1>
    <img className="header-img-two" src={"../../images/Decoration.svg"} alt="oddam w dobre rece"/>
    </div>

        <div className="steps-box">
            <div className="steps-box-one">
                <img className="steps-img-two" src={"../../images/Icon-1.svg"} alt="oddam w dobre rece"/>
                <h2>Wybierz rzeczy</h2>
                <hr/>
                <p>Ubrania, zabawki, sprzęt i inne</p>

            </div>

            <div className="steps-box-one">
                <img className="steps-img-two" src={"../../images/Icon-2.svg"} alt="oddam w dobre rece"/>
                <h2>Spakuj je</h2>
                <hr/>
                <p>Ubrania, zabawki, sprzęt i inne</p>

            </div>

            <div className="steps-box-one">
                <img className="steps-img-two" src={"../../images/Icon-3.svg"} alt="oddam w dobre rece"/>
                <h2>Zdecyduj komu chcesz pomóc</h2>
                <hr/>
                <p>Ubrania, zabawki, sprzęt i inne</p>

            </div>

            <div className="steps-box-one">
                <img className="steps-img-two" src={"../../images/Icon-4.svg"} alt="oddam w dobre rece"/>
                <h2>Zamów kuriera</h2>
                <hr/>
                <p>Ubrania, zabawki, sprzęt i inne</p>

            </div>

        </div>
            <div className="steps-box-btn">
                <Router>
                    <Link2 className="steps-btn-one" to="/login"> ODDAJ <br/> RZECZY </Link2>
                </Router>
        </div>
        </div>

    )


}