import jsonData from '../static/contentData.json';

type ContentTypes = "homepage" | "dates" | "requests" | "contact" | "consent" | "location" | "owner";
export function getContentByPage(contentType: ContentTypes) {

    return jsonData[contentType]

}