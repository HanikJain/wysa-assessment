import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../store/AuthContext";
import styles from "./Navbar.module.css"
import Theme from "./Theme"
import InputRange from "./InputRange.jsx"

import { RiArrowDropDownLine } from 'react-icons/ri';

export default function Navbar() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    function clickHandler(e) {
        e.preventDefault();
        setShowMenu((prev) => !prev);
    }

    function logoutHandler() {
        logout();
        navigate("/login");
    }


    const MENU =
        <div style={{ transform: showMenu ? "scale(1)" : "scale(0)" }} className={styles.menu} >
            <Theme />
            <hr style={{ backgroundColor: "gray", margin: "8px auto", height: "2px" }} />
            <InputRange />
            <hr style={{ backgroundColor: "gray", margin: "8px auto", height: "2px" }} />
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <button onClick={logoutHandler} className={styles.Button}>
                    Logout
                </button>

            </div>
        </div>

    return (
        <div className={styles.container}>
            <div className={styles.settings}>
                <div onClick={clickHandler} style={{ display: 'flex', alignItems: "center", cursor: "pointer" }}>
                    <span>Settings</span>
                    <span style={{ transform: showMenu ? "rotate(180deg)" : "rotate(0deg)" }} className={styles.icon}><RiArrowDropDownLine /></span>
                </div>
                {MENU}
            </div>
        </div>
    )
}
