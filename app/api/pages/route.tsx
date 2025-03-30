const CMSURL = process.env.NEXT_PUBLIC_STRAPI_URL;


export async function POST(req: Request) {
    const body = await req.json();

    let typeSlug: string
    switch (body.pageType) {
        case "Impressum":
            typeSlug = "impressum";
            break;
        case "Datenschutz":
            typeSlug = "datenschutz";
            break;
        case "KontaktSeite":
            typeSlug = "kontakt-seite";
            break;
        case "AnfrageSeite":
            typeSlug = "anfrage-seite";
            break;
        case "Termine":
            typeSlug = "termine";
            break;
        default:
            typeSlug = "homepage"
    }

    try {

        const response = await fetch(`${ CMSURL }/api/${ typeSlug }`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_BEARER}`,
            },
            next:{revalidate: 0}

        });
        if (!response.ok) {
            return Response.json({msg: `failed to post data to strapi`})
        }

        const data = await response.json()
        return Response.json(data);
    } catch (err) {
        console.log("error", err)

    }


}