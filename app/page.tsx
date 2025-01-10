
import Homepage from "@/pages/Homepage";
import { getContentByPage} from "@/utils/helper/contentHelper";

export default async function Home() {

  const content = await getContentByPage("homepage")

  return <Homepage content={content}/>
}
