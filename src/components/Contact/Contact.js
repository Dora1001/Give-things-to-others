import React from "react";
import "./contact.scss"


export const Contact = () => {
    return (

        <div className="contact-cointainer" id="contact">
            <div className="contact-box-img">
                <img className="contact-img-one" src={"../../images/Background-Contact-Form.jpg"} alt="oddam w dobre rece"/>
            </div>

            <div className="contact-box-txt">

                <h1>Skontaktuj się z nami</h1>
                <img className="contact-img-two" src={"../../images/Decoration.svg"} alt="oddam w dobre rece"/>

                <form>
<div className="contact-form-names">
                    <label className="contact-form-label">Wpisz swoje imie
                        <input type="text" name="name" />
                    </label>
                    <label className="contact-form-label">Wpisz swój email
                        <input type="text" name="email" />
                    </label>
</div>

                    <label className="contact-form-label-txt">Wpisz swoją wiadomość
                        <textarea type="text"/>
                    </label>

                    <button className="contact-btn" type="submit" value="Wyślij">WYŚLIJ</button>
                </form>


            </div>
        </div>

    )

}