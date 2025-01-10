import styles from '@/styles/Globals.module.css'

const ContactLink =({href="mailto:info@segenskirche-eggartskirch.de?subject=Anfrage über Website", text="Schreiben Sie uns", type = "button"}:{href?: string, text?:string, type?:"link" |"button"})=>{


    const myStyle = type === "link" ? styles.textLink : styles.contactButton
    return <a href={ href } className={ `${myStyle}` }>
        {text}
    </a>
}

export default ContactLink