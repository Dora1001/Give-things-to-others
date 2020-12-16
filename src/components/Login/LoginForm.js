import React from 'react';
import "./loginForm.scss"
import {Link as Link2} from "react-router-dom";


export const Form = (props) => {
    const {
        email, setEmail, password, setPassword, handleLogin,
        emailError, passwordError
    } = props;


    return (


        <section id="link-login" className="login">
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
                            <Link2 to="/" className="header-nav-link" > Start</Link2>
                        </li>
                        <li>
                            <Link2 to="/" className="header-nav-link" > O co chodzi?</Link2>
                        </li>

                        <li>
                            <Link2 to="/" className="header-nav-link" > O nas</Link2>
                        </li>

                        <li>
                            <Link2 to="/" className="header-nav-link" > Fundacja i organizacje</Link2>
                        </li>

                        <li>
                            <Link2 to="/" className="header-nav-link" > Kontakt</Link2>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className="login-header"> <h1>Zaloguj się</h1>
                <img className="help-img-two" src={"../../images/Decoration.svg"} alt="oddam w dobre rece"/>
            </div>

            <div className="login-container">
                <div className="login-cointainer-form">
                <label>Email</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Hasło</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
                </div>
            </div>
                <div className="btnContainer">

                        <>

                            <Link2 className="form-login-btn-reg" to="/register">Załóż konto</Link2>


                            <button className="form-login-btn" onClick={handleLogin}>Zaloguj się</button>

                        </>


            </div>

        </section>

    );
};


export default Form;