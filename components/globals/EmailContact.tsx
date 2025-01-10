import styles from '@/styles/Globals.module.css'

const EmailContact =()=>{

    return <a href={ "mailto:info@segenskirche-eggartskirch.de?subject=Anfrage über Website" } className={ styles.contactButton }>
            Schreiben Sie uns
    </a>
}

export default EmailContact