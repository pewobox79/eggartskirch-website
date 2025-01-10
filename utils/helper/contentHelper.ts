import jsonData from '../static/contentData.json';

export const getContentByPage=async (contentType:"homepage" |"dates" |"requests" |"contact")=>{

    return jsonData[contentType]

}