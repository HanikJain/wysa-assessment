import React from 'react'
import styles from './Theme.module.css'
import ThemeSelect from "./ThemeSelect"
import { useSelector } from 'react-redux';


export default function Theme() {
    const data = useSelector((state) => state.theme.data);

    function renderTheme(item) {
        return <ThemeSelect id={item.id} key={item.id} background={item.background} isActive={item.isSelected} />
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Theme</div>
            <div className={styles.container2}>
                {data.map(renderTheme)}
            </div>
        </div>
    )
}

