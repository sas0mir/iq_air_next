import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import url from "url";
import { get } from "lodash";

export async function POST(request: NextRequest, response: NextApiResponse) {

    const req = await request.json();
    try {
        const states = await fetch(`${process.env.API_URL}station?station=${req.station}&city=${req.city}&state=${req.state}&country=${req.country}$key=${process.env.API_KEY}`);
        const data = await states.json();
        if(data.status === 'success') {
            return NextResponse.json(data)
        } else throw new Error(data.data.message);
    } catch(err: any) {
        console.error('API-STATION-ERROR->', err)
        return NextResponse.json({success: false, error: err.toString()})
    }
}