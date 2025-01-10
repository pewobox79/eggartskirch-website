import styles from '@/styles/Header.module.css'
import Navigation from "@/components/Navigation";
import Image from "next/image";
import logo from "@/assets/logo/segenskirche_eggartskirch_logo.png"

const Header =()=>{

    return <header className={styles.headerWrapper}>
        <div className={styles.headerInner}>
            <div className={styles.headerImage}>
                <Image src={logo} alt={"logo"} width={200} height={200}/>
            </div>
        <Navigation/>
        </div>
    </header>
}

export default Header;