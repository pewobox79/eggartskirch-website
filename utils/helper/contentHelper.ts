import jsonData from '../static/contentData.json';

type ContentTypes = "homepage" | "dates" | "requests" | "contact" | "consent" | "location" | "owner";
export function getContentByPage(contentType: ContentTypes) {

    return jsonData[contentType]

}


export async function getPageContent(pageType:"Homepage"|"Impressum" |"Datenschutz" |"KontaktSeite" |"AnfrageSeite"|"Termine"){

    const config ={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pageType:pageType
        })
    }
    try{

        const response = await fetch(`http://localhost:3000/api/pages/`, config);
        console.log("api response", response);


        if(!response.ok) {
            return Response.json({msg: `failed to get ${pageType} content`})
        }
        return await response.json();


    }catch(err){

        console.error(err);
    }



}