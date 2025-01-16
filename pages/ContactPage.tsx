import Headline from "@/components/globals/Headline";
import SubTitle from "@/components/globals/SubTitle";
import BodyContent from "@/components/globals/BodyContent";
import Spacer from "@/components/globals/Spacer";

const ContactPage =({content, location, owner}:{content: {title: string, subTitle: {text:string}[], body: {text:string}[]},owner: {title: string, subTitle: {text:string}[], body: {text:string}[]},location: {title: string, subTitle: {text:string}[], body: {text:string}[]}})=>{

    return <>

        <Headline text={content?.title}/>
        <SubTitle data={content?.subTitle}/>
        <BodyContent data={content?.body}/>
        <Spacer/>
        <BodyContent data={location?.body}/>
        <Spacer/>
        <BodyContent data={owner?.body}/>
        <Spacer/>

    </>
}

export default ContactPage