import RequestPage from "@/pages/RequestPage";
import {getContentByPage} from "@/utils/helper/contentHelper";

const Booking =async ()=>{

    const content = await getContentByPage("requests");
    return <RequestPage content={content}/>
}

export default Booking