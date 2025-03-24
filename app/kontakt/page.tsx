import ContactPage from "@/pages/ContactPage";
import {getContentByPage, getPageContent} from "@/utils/helper/contentHelper";

const Contact =async ()=>{

    const pageContent = await getPageContent("KontaktSeite");
    console.log("contact page content", pageContent);

    const location = await getContentByPage("location");
    const owner = await getContentByPage("owner");
    return <ContactPage content={pageContent?.data} location={location} owner={owner}/>
}

export default Contact