import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import url from "url";
import { get } from "lodash";

export async function GET(request: NextApiRequest, response: NextApiResponse) {

    //const reqQuery = url.parse(request.url as string, true).query;
    //process.env.API_KEY
    try {
        const states = await fetch(`${process.env.API_URL}states?key=${process.env.API_KEY}`);
        const data = await states.json();
        if(data.status === 'success') {
            return NextResponse.json(data)
        } else throw new Error('STATES API ERROR');
    } catch(err) {
        console.error('API-STATES-ERROR->', err)
        return NextResponse.json({success: false, error: err})
    }
}