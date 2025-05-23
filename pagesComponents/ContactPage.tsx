import Headline from "@/components/globals/Headline";
import StrapiRenderRichTextHelper from "@/components/globals/StrapiRenderRichTextHelper";

const ContactPage =({content}:{content: {title: string, subTitle: {text:string}[], body:[]}})=>{
    return <>

        <Headline text={content?.title}/>
        <StrapiRenderRichTextHelper blocks={content?.body}/>

    </>
}

export default ContactPage