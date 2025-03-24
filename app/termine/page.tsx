import EventPage from "@/pages/EventPage";
import {getPageContent} from "@/utils/helper/contentHelper";

const Calendar =async ()=>{


    const pageContent = await getPageContent("Termine")
    return <EventPage content={pageContent?.data} />
}

export default Calendar