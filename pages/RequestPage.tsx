import Headline from "@/components/globals/Headline";
import ContactLink from "@/components/globals/ContactLink";
import StrapiRenderRichTextHelper from "@/components/globals/StrapiRenderRichTextHelper";
import SocialIcon from "@/components/globals/SocialIcon";

const RequestPage =({title, body}:{title: string, body:[]})=>{




    return <>
        <Headline text={title}/>
        <StrapiRenderRichTextHelper blocks={body}/>
        <div className={"contactButtonsWrapper"}><ContactLink/> <SocialIcon iconType={"insta"}/></div>
    </>

}

export default RequestPage