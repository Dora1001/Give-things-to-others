import React, {useState, useEffect} from "react";
import fire from "./fire";
// import './login.scss';
import Form from "./LoginForm";
import {OddajRzeczy} from "../Oddaj/Oddaj-rzeczy";
// import Signup from "../Signup/signup";

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
        fire
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
        fire
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
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
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
                <OddajRzeczy handleLogout={handleLogout} />
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


