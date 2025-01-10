import jsonData from '../static/contentData.json';

export const getContentByPage= (contentType:"homepage" |"dates" |"requests" |"contact")=>{

    return jsonData[contentType]

}