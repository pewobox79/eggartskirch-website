import Headline from "@/components/globals/Headline";
import SubTitle from "@/components/globals/SubTitle";
import BodyContent from "@/components/globals/BodyContent";

const EventPage =({content}:{content: {title: string, subTitle: {text:string}[], body: {text:string}[]}})=>{

    return <>

        <Headline text={content?.title}/>
        <SubTitle data={content?.subTitle}/>
        <BodyContent data={content?.body}/>
    </>
}

export default EventPage