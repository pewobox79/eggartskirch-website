import Link from "next/link";

const Footer =()=>{

    const date = new Date();
    const year = date.getFullYear();
    return <footer>
        <div className={"copyright"}>

            <Link href={"/impressum"}>Impressum</Link>

            <p className={"copyrightText"}>&copy; { year } Seelsorgeeinheit Ravensburg West. All Rights Reserved.</p>
            <Link href={"/datenschutz"}>Datenschutzerklärung</Link></div>

    </footer>
}
export default Footer