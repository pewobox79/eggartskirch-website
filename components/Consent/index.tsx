'use client'
import styles from '@/styles/Consent.module.css'
import Headline from "@/components/globals/Headline";
import {useEffect, useState} from "react";
import {useModalOpen} from "@/utils/store/useModalOpen";
import BodyContent from "@/components/globals/BodyContent";
import {getContentByPage} from "@/utils/helper/contentHelper";
import ContactLink from "@/components/globals/ContactLink";
import {useLocalStorage} from "@/hooks/useLocalStorage";

const Consent = () => {
    const modal = useModalOpen();
    const [value, setValueToStorage] = useLocalStorage("segenskirche_consent")

    const [content, setContent] = useState({body: [{text: ""}]});
    useEffect(() => {

        if( value?.accepted){
            modal.setConsentClose()

        }else{
            modal.setConsentOpen()
        }

       const data = getContentByPage("consent");
        setContent(data)



    }, [])

    function handleClose() {
        modal.setConsentClose()
    }

    function handleAccept() {
        setValueToStorage( {accepted: true})
        handleClose()
    }

    return <div className={ styles.consentWrapper } style={ {display: modal.status.consent ? "flex" : "none"} }>

        <div className={ styles.consentInner }>

            <Headline text={ "Consent" } style={ {textAlign: "center"} }/>
            <BodyContent data={ content?.body } style={ {textAlign: "center"} }/>
            <ContactLink href={ "/datenschutz" } text={ "Datenschutzerklärung" } type={ "link" }/>


            < div className={ styles.consentButtons }>
                <div className={ styles.actionButtons } onClick={ handleAccept }>Verstanden</div>

            </div>
        </div>

    </div>


}

export default Consent