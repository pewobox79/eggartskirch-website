import styles from '@/styles/Globals.module.css'

const Imprint = () => {

    return <div className={ styles.bodyContentWrapper }>
        <h2>Impressum</h2>

        <p>Kirchengemeinde Eggartskirch<br/>
            vertreten durch<br/>
            Josef Vogler<br/>
            Rolgenmoos 10/1<br/>
            88263 Horgenzell</p>

        <h2>Kontakt</h2>
        <p>Telefon: +49 1523 66 323 44<br/>
            E-Mail: info@segenskirche-eggartskirch.de</p>

        <h2>Redaktionell verantwortlich</h2>
        <p>Ulrike Mohr<br/>
            Rolgenmoos 15<br/>
            88263 Horgenzell</p>

        <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.</p>

        <p>Quelle: <a
            href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a>
        </p></div>
}

export default Imprint