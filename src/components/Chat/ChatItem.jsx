import styles from "./Chat.module.css"
import React from 'react'
import { useSelector } from "react-redux";

function calculateDelay(base, id) {
    let a = "0." + id;
    let num = (parseFloat(a) * 1000);
    let delay = (parseInt(num) + parseInt(base)) / 1000;

    return delay.toString() + "s";
}

export default function ChatItem(props) {
    const data = props.data;
    const baseDelay = useSelector((state) => state.message.delay)

    let style = { ...props.style, float: "left", animationDuration: calculateDelay(baseDelay, props.id) }

    if (data.speaks === "ME") {
        style.float = "right"
        style.marginRight = "1rem"
        style.animationName = "chatItemRL"
    }

    if (data.type === 'text') {
        return (
            <div style={{ width: "100%", height: "auto" }}>
                <div style={style} className={styles.chatItem}>
                    {data.data}
                </div>
            </div>

        )
    } else {
        return (
            <div style={style} className={styles.chatItem}>
                <img style={{ maxWidth: "200px", width: "100%", height: "auto" }} src={data.data} alt="" />
            </div>
        )
    }
}
