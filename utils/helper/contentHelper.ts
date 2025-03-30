import jsonData from '../static/contentData.json';

type ContentTypes = "homepage" | "dates" | "requests" | "contact" | "consent" | "location" | "owner";
export function getContentByPage(contentType: ContentTypes) {

    return jsonData[contentType]

}

const URL = process.env.NEXT_PUBLIC_STRAPI_URL

export async function getPageContent(pageType:"Homepage"|"Impressum" |"Datenschutz" |"KontaktSeite" |"AnfrageSeite"|"Termine"){


    let slug
    switch (pageType) {
        case "Homepage":
            slug = `${ URL }/api/homepage?populate=*`
            break;
        case "Impressum":
            slug = `${ URL }/api/impressum?populate=*`
            break;
        case "Datenschutz":
            slug = `${ URL }/api/datenschutz?populate=*`
            break;
        case "KontaktSeite":
            slug = `${ URL }/api/kontakt-seite?populate=*`
            break;
        case "AnfrageSeite":
            slug = `${ URL }/api/anfrage-seite?populate=*`
            break;
        case "Termine":
            slug = `${ URL }/api/termine?populate=*`
            break;
        default:
            return
    }
    const config ={
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_BEARER}`
        },
        next:{revalidate: 0}
    }
    try{

        const response = await fetch(`${slug}`, config);
        console.log("api response", response);


        if(!response.ok) {
            return Response.json({msg: `failed to get ${pageType} content`})
        }
        return await response.json();


    }catch(err){

        console.error(err);
    }



}