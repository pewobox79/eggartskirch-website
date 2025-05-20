import EventPage from "@/pagesComponents/EventPage";
import {getPageContent} from "@/utils/helper/contentHelper";

const Calendar =async ()=>{


    const pageContent = await getPageContent("Termine")
    return <EventPage content={pageContent?.data} />
}

export default Calendar