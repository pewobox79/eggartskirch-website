import styles from '@/styles/Globals.module.css'

const EmailContact =()=>{

    return <a href={ "mailto:info@segenskirche-eggartskirch.de?subject=Anfrage" }>
        <div className={ styles.contactButton }>
            Schreiben Sie uns

</div></a>
}

export default EmailContact