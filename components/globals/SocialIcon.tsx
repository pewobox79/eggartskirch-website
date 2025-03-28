'use client'
import Image from "next/image";

import instaIcon from '@/assets/icons/segenskirche-bei-instagram-icon.png'
import Link from "next/link";

const SocialIcon = ({iconType="insta"}: { iconType?: "insta" | "facebook" | "pinterest" }) => {

    let socialIconObject = {
        src: "",
        alt: "",
        link: ""
    }

    switch (iconType) {
        case "insta":
            socialIconObject = {
                src: instaIcon.src,
                alt: "Segenskirche auf Instagram",
                link: "https://www.instagram.com/segenskirche_eggartskirch?igsh=Y2Q3bmpoZGtmYjdu"
            }
            break;
        default:
            return
    }


    return <Link href={ socialIconObject.link } target={ "_blank" } title={ socialIconObject.alt } className={ "socialIconStyle" }><Image
        src={ socialIconObject.src } alt={ socialIconObject.alt } width={ 20 } height={ 20   }
        /></Link>
}

export default SocialIcon