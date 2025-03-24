import styles from "@/styles/Globals.module.css";
import {getPageContent} from "@/utils/helper/contentHelper";
import StrapiRenderRichTextHelper from "@/components/globals/StrapiRenderRichTextHelper";
import Headline from "@/components/globals/Headline";

const Datenschutz =async ()=>{
    const pageContent = await getPageContent("Datenschutz");
    return <div className={ styles.bodyContentWrapper }>
        <Headline text={pageContent?.data?.title}/>
        <StrapiRenderRichTextHelper blocks={pageContent?.data?.body}/>
    </div>
}

export default Datenschutz