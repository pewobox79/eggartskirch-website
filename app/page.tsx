
import Homepage from "@/pages/Homepage";
import { getPageContent} from "@/utils/helper/contentHelper";

export default async function Home() {

  const pageContent = await getPageContent("Homepage");

  return <Homepage content={pageContent ? pageContent.data: {title:"", subTitle: [], body: []}}/>
}
