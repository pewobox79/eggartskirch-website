import styles from '@/styles/Globals.module.css'

const EmailContact =()=>{

    return <div className={styles.contactButton}>
        <a href={"mailto:info@segenskirche-eggartskirch.de?subject=Anfrage"}>Schreiben Sie uns</a>
    </div>
}

export default EmailContact