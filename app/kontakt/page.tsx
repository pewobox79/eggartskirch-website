import ContactPage from "@/pages/ContactPage";
import {getContentByPage} from "@/utils/helper/contentHelper";

const Contact =async ()=>{

    const content = await getContentByPage("contact");
    const location = await getContentByPage("location");
    const owner = await getContentByPage("owner");
    return <ContactPage content={content} location={location} owner={owner}/>
}

export default Contact