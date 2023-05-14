import React, { Fragment, useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [isError, setIsError] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();



    const loginHandler = useCallback(async () => {
        setIsLoading(true)
        try {
            if (!email.trim().includes("@")) {
                setEmailInvalid(true)
            } else if (password.trim() === "") {
                setPasswordInvalid(true)
            } else {
                const response = await login(email, password);
                if (response) {
                    navigate("/");
                }

            }


        } catch (error) {
            setIsError(true);
            console.log(error)
        }
        setIsLoading(false);
    }, [email, password]);



    return (
        <div className={styles.loginContainer}>
            <div className={styles.container}>
                <h2>
                    Sign In
                </h2>
                <div className={styles.container2}>

                    <label htmlFor="email">Email</label>
                    <input
                        onChange={(e) => { setEmail(e.target.value); setEmailInvalid(false); setIsError(false); }}
                        id="email"
                        type="email"
                        value={email}
                        className={styles.inputBox}
                    />
                    <p className={styles.inValid}>{emailInvalid && "Email Invalid"}</p>

                    <label htmlFor="email">Password</label>
                    <input
                        label="Password"
                        onChange={(e) => { setPassword(e.target.value); setPasswordInvalid(false); setIsError(false); }}
                        id="passowrd"
                        type="password"
                        value={password}
                        className={styles.inputBox}
                    />
                    <p className={styles.inValid}>{passwordInvalid && "Password Invalid"}</p>

                </div>

                <button onClick={isLoading ? () => { } : loginHandler} className={styles.Button}>
                    {isLoading ? "Loading..." : isError ? "Failed " : 'Login'}

                </button>
            </div>
        </div>

    );
}


