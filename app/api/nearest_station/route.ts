import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import url from "url";
import { get } from "lodash";

export async function POST(request: NextRequest, response: NextApiResponse) {

    //ip address nearest station x-forwarded-for
    const req = await request.json();
    const lat = get(req, ['coordinates','latitude']) || null;
    const lon = get(req, ['coordinates','longitude']) || null;
    try {
        const stations = await fetch(`${process.env.API_URL}nearest_station?${lat ? `lat=${lat}&lon=${lon}&` : ''}key=${process.env.API_KEY}`);
        const data = await stations.json();
        if(data.status === 'success') {
            return NextResponse.json(data)
        } else throw new Error(data.data.message);
    } catch(err: any) {
        console.error('API-NEAREST-STATION-ERROR->', err)
        return NextResponse.json({success: false, error: err.toString()})
    }
}