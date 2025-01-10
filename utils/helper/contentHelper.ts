import jsonData from '../static/contentData.json';

type ContentTypes = "homepage" | "dates" | "requests" | "contact" | "consent";
export function getContentByPage(contentType: ContentTypes) {

    return jsonData[contentType]

}