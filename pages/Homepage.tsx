'use client'
import Headline from "@/components/globals/Headline";
import EmailContact from "@/components/globals/ContactLink";
import StrapiRenderRichTextHelper from "@/components/globals/StrapiRenderRichTextHelper";


const Homepage =({content}:{content: {title: string, subTitle: {text:string}[], body: []}})=>{
    return <div style={{ paddingBottom: "50px"}}>
            <Headline text={content?.title}/>
            <StrapiRenderRichTextHelper blocks={content?.body}/>
            <EmailContact/>

    </div>
}

export default Homepage