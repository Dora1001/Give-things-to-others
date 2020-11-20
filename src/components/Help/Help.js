import React from "react";
import "./help.scss"


export const Help = () => {
    return (
        <div className="help-cointainer">
            <h1>Komu pomagamy</h1>
            <img className="help-img-two" src={"../../images/Decoration.svg"} alt="oddam w dobre rece"/>

            <div className="help-btns">
                <button className="help-btn-one"> Fundacjom</button>
                <button className="help-btn-one"> Organizacjom <br/> pozarządowym</button>
                <button className="help-btn-one"> Lokalnym <br/> zbiórkom</button>
            </div>
            <div className="help-txt">
                <span>Lorem ipusm</span>
            </div>
            <div className="help-tab">
                <div className="help-tab-one">
                    <div className="help-tab-one-left">
                        Fundacja "Dbam o zdrowie"
                        <p>Lorem ipsum</p>
                    </div>

                    <div className="help-tab-one-right">
                        ubrania, jedzenie, sprzęt

                    </div>

                </div>
                <hr/>
                <div className="help-tab-one">
                    <div className="help-tab-one-left">
                        Fundacja "Dbam o zdrowie"
                        <p>Lorem ipsum</p>

                    </div>

                    <div className="help-tab-one-right">
                        ubrania, jedzenie, sprzęt

                    </div>


                </div>
                <hr/>
                <div className="help-tab-one">
                    <div className="help-tab-one-left">
                        Fundacja "Dbam o zdrowie"
                        <p>Lorem ipsum</p>
                    </div>

                    <div className="help-tab-one-right">
                        ubrania, jedzenie, sprzęt

                    </div>


                </div>

                <div className="help-box-nr">
                    <button className="help-btn-nr">1</button>
                    <button className="help-btn-nr">2</button>
                    <button className="help-btn-nr">3</button>

                </div>

            </div>


        </div>
    )

}