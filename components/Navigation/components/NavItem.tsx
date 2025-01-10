'use client'
import Link from "next/link";
import styles from "@/styles/Navigation.module.css"
import {usePathname} from "next/navigation";

type NavItemType ={
    title: string,
    link: string,
}
const NavItem =({title="Home", link="/"}:NavItemType)=>{

    const path = usePathname()
    console.log("path:", path);

    const myStyle =`${styles.navItem} ${path === link ? styles.activeNavItem: ""}`

    return<Link href={link} className={myStyle}>{ title }</Link>
}

export default NavItem;