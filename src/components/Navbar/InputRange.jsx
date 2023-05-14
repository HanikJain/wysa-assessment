import React, { useEffect, useState } from 'react'
import styles from './Theme.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { messageActions } from "../../store/messages";
import { useAuth } from "../../store/AuthContext";



export default function InputRange() {
    const data = useSelector((state => state.message.delay));
    const { currentUser } = useAuth();
    const dispatch = useDispatch();
    const [value, setValue] = useState(data);
    const [valueChange, setValueChange] = useState(false)


    useEffect(() => {
        let timer;
        if (valueChange) {
            timer = setTimeout(async () => {
                const url = process.env.REACT_APP_SERVER_URL + "/api/updatedelay";

                console.log(value, "value")
                const response = await fetch(url, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: currentUser.email,
                        delay: value
                    })
                });


                if (!response.ok) {
                    throw new Error("Error updating theme");
                }

                const results = await response.json();
                dispatch(messageActions.setDelay(value));
                setValueChange(false);

            }, 300)
        }

        return () => {
            clearTimeout(timer);
        }

    }, [valueChange, value])

    function changeHandler(e) {
        setValue(e.target.value);
        setValueChange(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Bubble Delay</div>
            <div style={{ margin: "1rem auto" }}>
                <span>300</span>
                <input onChange={changeHandler} type="range" min="300" max="2000" value={value} />
                <span>2000</span>
            </div>

        </div>
    )
}
