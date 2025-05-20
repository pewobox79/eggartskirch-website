import RequestPage from "@/pagesComponents/RequestPage";
import { getPageContent} from "@/utils/helper/contentHelper";

const Booking =async ()=>{

    const pageContent = await getPageContent("AnfrageSeite");
    return <RequestPage title={pageContent?.data?.title} body={pageContent?.data?.body}/>
}

export default Booking