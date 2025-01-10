import ContactPage from "@/pages/ContactPage";
import {getContentByPage} from "@/utils/helper/contentHelper";

const Contact =async ()=>{

    const content = await getContentByPage("contact");
    return <ContactPage content={content}/>
}

export default Contact