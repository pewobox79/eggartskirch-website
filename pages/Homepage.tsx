'use client'
import Headline from "@/components/globals/Headline";
import SubTitle from "@/components/globals/SubTitle";
import BodyContent from "@/components/globals/BodyContent";


const Homepage =({content}:{content: {title: string, subTitle: {text:string}[], body: {text:string}[]}})=>{
console.log("homepage", content)
    return <>
            <Headline text={content?.title}/>
            <SubTitle data={content?.subTitle}/>
            <BodyContent data={content?.body}/>

    </>
}

export default Homepage