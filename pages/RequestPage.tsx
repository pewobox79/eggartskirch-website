import Headline from "@/components/globals/Headline";
import BodyContent from "@/components/globals/BodyContent";
import ContactLink from "@/components/globals/ContactLink";

const RequestPage =({content}:{content: {title: string, subTitle?: {text:string}[], body: {text:string}[]}})=>{

    return <>

        <Headline text={content?.title}/>
        <BodyContent data={content?.body}/>
        <ContactLink/>
    </>

}

export default RequestPage