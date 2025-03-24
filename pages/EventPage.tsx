import Headline from "@/components/globals/Headline";

import StrapiRenderRichTextHelper from "@/components/globals/StrapiRenderRichTextHelper";

const EventPage =({ content}:{content:{title: string, subTitle: string,body: []}})=>{

    return <>

        <Headline text={content?.title}/>
        {/*<SubTitle data={content?.subTitle}/>*/}
        <StrapiRenderRichTextHelper blocks={content?.body}/>
    </>
}

export default EventPage