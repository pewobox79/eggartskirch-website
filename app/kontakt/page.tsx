import ContactPage from "@/pagesComponents/ContactPage";
import { getPageContent} from "@/utils/helper/contentHelper";

export const dynamic = "force-dynamic";

const Contact =async ()=>{

    const pageContent = await getPageContent("KontaktSeite");
    return <ContactPage content={pageContent?.data}/>
}

export default Contact