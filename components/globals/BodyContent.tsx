import {CSSProperties} from "react";
import styles from '@/styles/Globals.module.css'
const BodyContent =({data, style}:{data: {text:string}[], style?: CSSProperties})=>{

    const bodyContent = data?.map(body => {
        return <p key={body.text}>{body.text}</p>
    })

    return <div className={styles.bodyContentWrapper} style={style}>
        {bodyContent}
    </div>
}
export default BodyContent