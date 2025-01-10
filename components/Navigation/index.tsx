import NavItem from "@/components/Navigation/components/NavItem";
import styles from "@/styles/Navigation.module.css"
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/segenskirche_eggartskirch_logo_mobile.png"
import {navData} from "@/utils/static/navData";
const Navigation =()=>{

    const ListOfLinks = navData.map((navItem, index) =>{
        if(index === 0) return
        return <NavItem key={navItem.id} title={navItem.title.toUpperCase()} link={navItem.link}/>
    })

    return <div className={styles.navigationWrapper}>
        <nav className={styles.navInner}>
            <Link href={"/"}><Image src={logo} alt={"logo"} width={55} height={55} className={styles.logoMobile}/></Link>
            {ListOfLinks}
        </nav>

    </div>
}

export default Navigation;