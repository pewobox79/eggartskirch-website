'use client'
import Image from "next/image";

import instaIcon from '@/assets/icons/SKE_Instagram.png'
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
                link: "https://www.instagram.com"
            }
            break;
        default:
            return
    }


    return <Link href={ socialIconObject.link } target={ "_blank" } title={ socialIconObject.alt }><Image
        src={ socialIconObject.src } alt={ socialIconObject.alt } width={ 30 } height={ 25 }
        className={ "socialIconStyle" }/></Link>
}

export default SocialIcon