import React, {useState} from "react";
// import React from 'react';
import { useForm } from 'react-hook-form';
import "./contact.scss"
import {db} from "../../layouts/App/firebase";


export const Contact = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    return (

        <div className="contact-cointainer" id="contact">
            <div className="contact-box-img">
                <img className="contact-img-one" src={"../../images/Background-Contact-Form.jpg"}
                     alt="oddam w dobre rece"/>
            </div>

            <div className="contact-box-txt">

                <h1>Skontaktuj się z nami</h1>
                <img className="contact-img-two" src={"../../images/Decoration.svg"} alt="oddam w dobre rece"/>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="contact-form-names">
                        <label className="contact-form-label">Wpisz swoje imie
                            <input placeholder="Imię" name="name" ref={register({required: true})}
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && ( <p>podane imie jest nieprawidłowe</p>)}

                        </label>

                        <label className="contact-form-label">Wpisz swój email
                            <input placeholder="Email" name="email" ref={register({required: true})}
                                   value={email}
                                   onChange={(e) => setName(e.target.value)}
                            />
                            {errors.email && ( <p>podany email jest nieprawidłowy</p>)}
                        </label>
                    </div>

                    <label className="contact-form-label-txt">Wpisz swoją wiadomość
                        <textarea placeholder="Wiadomość" name="message" ref={register({required: true, minLength: 120})}
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                        />
                        {errors.message && errors.name.type === "required" && ( <p>Wiadomość musi mieć conajmniej 120 znaków</p>)}
                        {errors.message && errors.name.type === "minLength" && ( <p>Wiadomość musi mieć conajmniej 120 znaków</p>)}
                    </label>

                    <button className="contact-btn" type="submit" value="Wyślij">WYŚLIJ</button>
                </form>


            </div>
        </div>

    )

}


