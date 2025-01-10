import styles from '@/styles/Globals.module.css'

const Headline =({text}:{text:string})=>{

    return <div className={styles.headlineWrapper}>
        <h3>{ text }</h3>
    </div>
}

export default Headline;