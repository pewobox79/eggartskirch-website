import EventPage from "@/pages/EventPage";
import {getContentByPage} from "@/utils/helper/contentHelper";

const Calendar =async ()=>{


    const content = await getContentByPage("dates")
    return <EventPage content={content} />
}

export default Calendar