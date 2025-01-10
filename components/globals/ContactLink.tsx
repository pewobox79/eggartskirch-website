import styles from '@/styles/Globals.module.css'

const ContactLink =({href="mailto:info@segenskirche-eggartskirch.de?subject=Anfrage über Website", text="Schreiben Sie uns", type = "button", target="_self"}:{href?: string, text?:string, type?:"link" |"button", target?:"_blank" |"_self"})=>{


    const myStyle = type === "link" ? styles.textLink : styles.contactButton
    return <a href={ href } className={ `${myStyle}` } target={target}>
        {text}
    </a>
}

export default ContactLink