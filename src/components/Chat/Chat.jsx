import React, { useCallback, useRef, useEffect } from 'react'
import styles from "./Chat.module.css"
import ChatItem from "./ChatItem"
import { useSelector } from 'react-redux'
import useMessage from '../../hooks/useMessage'

export default function Chat() {
    const messageData = useSelector((state) => state.message.data);
    const themeData = useSelector((state) => state.theme.data);
    const { update } = useMessage();
    const scrollDiv = useRef();

    const getStyle = useCallback((data) => {
        for (let item of data) {
            if (item.isSelected) {
                return {
                    background: item.bubbleBackground,
                    color: item.bubbleColor,
                }

            }
        }

        return {
            background: "#fffffff",
            color: "#000000",
        }

    }, [])

    const style = getStyle(themeData);

    useEffect(() => {
        scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
    }, [messageData])


    const renderMessages = (item) => {
        return <ChatItem style={style} data={item} key={item.id} id={item.id} />
    }

    function handleInputKeyPress(e) {
        if (e.key === 'Enter' && e.target.value !== '') {
            update(e.target.value)
            e.target.value = '';
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.container2}>
                {messageData.map(renderMessages)}
                <div style={{ height: "10px", width: "99%" }} ref={scrollDiv}></div>
            </div>
            <div>
                <input className={styles.inputBox} type="text" onKeyPress={handleInputKeyPress} />
            </div>
        </div>
    )
}
