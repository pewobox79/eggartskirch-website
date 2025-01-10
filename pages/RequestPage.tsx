import Headline from "@/components/globals/Headline";
import BodyContent from "@/components/globals/BodyContent";
import EmailContact from "@/components/globals/EmailContact";

const RequestPage =({content}:{content: {title: string, subTitle: {text:string}[], body: {text:string}[]}})=>{

    return <>

        <Headline text={content?.title}/>
        <BodyContent data={content?.body}/>
        <EmailContact/>
    </>

}

export default RequestPage