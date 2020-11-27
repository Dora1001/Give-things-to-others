import React from 'react';
import {BrowserRouter as Router, Link as Link2} from "react-router-dom";


export const Register = (props) => {
    const {
        email, setEmail, password, setPassword, handleLogin,
        handleSignUp, setHasAccount, hasAccount, emailError, passwordError
    } = props;

    return (

        <section id="link-login" className="login">
            <div className="login-header"> <h1>Załóż konto</h1>
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
                    <label>Powtórz Hasło</label>
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <p className="errorMsg">{passwordError}</p>
                </div>
            </div>
            <div className="btnContainer">

                    <>
                        <Router>
                            <Link2 className="form-login-btn-reg" to="/login">Zaloguj się</Link2>
                        </Router>

                        <button className="form-login-btn" onClick={handleSignUp}>Załóż konto</button>

                    </>



            </div>

        </section>

    );
};


