import React from 'react'
import styles from "./Theme.module.css"
import useSelectTheme from '../../hooks/useSelectTheme'

export default function ThemeSelect(props) {
    const { update } = useSelectTheme();

    const style = {
        background: props.background,
    }

    function clickHandler(e) {
        update(e.target.id);
    }


    return (
        <div
            onClick={clickHandler}
            style={{ border: props.isActive && "2px solid #000000ad" }}
            className={styles.themeSelect}
            id={props.id}
        >
            <div id={props.id} style={style} className={styles.themeDiv}></div>
        </div>
    );
}

