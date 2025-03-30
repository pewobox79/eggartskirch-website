import ContactPage from "@/pages/ContactPage";
import { getPageContent} from "@/utils/helper/contentHelper";

const Contact =async ()=>{

    const pageContent = await getPageContent("KontaktSeite");
    return <ContactPage content={pageContent?.data}/>
}

export default Contact