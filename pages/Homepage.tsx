'use client'
import Headline from "@/components/globals/Headline";
import SubTitle from "@/components/globals/SubTitle";
import BodyContent from "@/components/globals/BodyContent";
import EmailContact from "@/components/globals/EmailContact";


const Homepage =({content}:{content: {title: string, subTitle: {text:string}[], body: {text:string}[]}})=>{
    return <div style={{ paddingBottom: "50px"}}>
            <Headline text={content?.title}/>
            <SubTitle data={content?.subTitle}/>
            <BodyContent data={content?.body}/>
            <EmailContact/>

    </div>
}

export default Homepage