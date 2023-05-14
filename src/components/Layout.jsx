import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';

export default function Layout(props) {
    const data = useSelector((state) => state.theme.data);

    const getStyle = useCallback((data) => {
        for (let item of data) {
            if (item.isSelected) {
                return {
                    background: item.background,
                    height: "100%",
                    width: "100%",
                }

            }
        }

        return {
            background: "linear-gradient( 94.3deg,  rgba(26,33,64,1) 10.9%, rgba(81,84,115,1) 87.1% )",
            height: "100%",
            width: "100%",
        }

    }, [])

    const style = getStyle(data);

    return (
        <div style={style} >
            {props.children}
        </div>
    )
}
