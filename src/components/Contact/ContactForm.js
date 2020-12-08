import React, {useState} from "react";
import "./contact.scss"
import db from "../../layouts/App/firebase";


export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [messageError, setMessageError] = useState(null);

    const handleSubmit = (e) => {
        let isError = false

        e.preventDefault();

        if (name.length <= 2 || name.length === 0) {
            setNameError("Imię jest za krótkie");
            isError = true;
        }
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email)) {
            setEmailError("Email jest nieprawidłowy");
            isError = true;
        }
        if (!message) {
            setMessageError("Wiadomość jest wymagana");


        } else if (message.length <= 2) {
            setMessageError("Wiadomość jest za krótka")


        } else if (!isError) {

            db.collection("contacts").add({
                name: name,
                email: email,
                message: message,

            })
                .then(() => {

                    alert('Wiadomość została wysłana');
                })
                .catch((error) => {
                    alert("Błąd");
                });
        }
    }


    return (

        <div className="contact-cointainer" id="contact">
            <div className="contact-box-img">
                <img className="contact-img-one" src={"../../images/Background-Contact-Form.jpg"}
                     alt="oddam w dobre rece"/>
            </div>

            <div className="contact-box-txt">

                <h1>Skontaktuj się z nami</h1>
                <img className="contact-img-two" src={"../../images/Decoration.svg"} alt="oddam w dobre rece"/>

                <form onSubmit={handleSubmit}>
                    <div className="contact-form-names">
                        <label className="contact-form-label">Wpisz swoje imie
                            <input placeholder="Imię" name="name" style={{
                                borderBottom: nameError ? "1px solid red" : "1px solid black",
                            }} onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-input"
                                   title="Name"/>
                            {nameError && <p style={{color: "red"}}>{nameError}</p>}


                        </label>

                        <label className="contact-form-label">Wpisz swój email
                            <input placeholder="Email" name="email" style={{
                                borderBottom: emailError ? "1px solid red" : "1px solid black",
                            }} onChange={(e) => setEmail(e.target.value)} value={email} type="text"
                                   className="form-input"
                            />
                            {emailError && <p style={{color: "red"}}>{emailError}</p>}
                        </label>
                    </div>

                    <label className="contact-form-label-txt">Wpisz swoją wiadomość
                        <textarea placeholder="Wiadomość" name="message" style={{
                            borderBottom: messageError ? "1px solid red" : "1px solid black",
                        }} onChange={(e) => setMessage(e.target.value)} value={message}
                                  className="form-input"> </textarea>
                        {messageError && <p style={{color: "red"}}>{messageError}</p>}
                    </label>

                    <button className="contact-btn" type="submit" value="Wyślij">WYŚLIJ</button>
                </form>


            </div>
        </div>

    )
};
