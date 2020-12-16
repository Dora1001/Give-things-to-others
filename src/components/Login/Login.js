import React, {useState, useEffect} from "react";
import db from "../../layouts/App/firebase";
import Form from "./LoginForm";
import {Oddaj} from "../Oddaj/Oddaj-rzeczy";


export const Login = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);


    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        db
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(({code, message}) => {
// eslint-disable-next-line default-case
                switch (code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disable':
                    case 'auth/user-not-found':
                        setEmailError(message);
                        break;
                    case 'auth/user-wrong-password':
                        setPasswordError(message);
                        break;
                }
            });
    };

    const handleSignup = () => {
        clearErrors();
        db
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                // eslint-disable-next-line default-case
                switch (err.code) {
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':
                        setEmailError(err.message);
                        break;
                    case 'auth/user-weak-password':
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleLogout = () => {
        db.auth().signOut();
    };

    const authListener = () => {
        db.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser('');
            }

        });

    };

    useEffect(() => {
        authListener();
    }, )

    return (
        <div className="login">
            {user ? (
                <Oddaj handleLogout={handleLogout} />
            ) : (
                <Form email={email}
                      setEmail={setEmail}
                      password={password}
                      setPassword={setPassword}
                      handleLogin={handleLogin}
                      handleSignUp={handleSignup}
                      hasAccount={hasAccount}
                      setHasAccount={setHasAccount}
                      emailError={emailError}
                      passwordError={passwordError}
                />
            )}
        </div>
    );
}


