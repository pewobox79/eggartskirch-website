import React from "react";
import styles from '@/styles/Globals.module.css'

const Headline =({text, style}:{text:string, style?:React.CSSProperties})=>{

    return <div className={styles.headlineWrapper} style={style}>
        <h3>{ text }</h3>
    </div>
}

export default Headline;