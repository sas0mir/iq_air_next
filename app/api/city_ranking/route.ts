import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import url from "url";
import { get } from "lodash";

export async function POST(request: NextRequest, response: NextApiResponse) {

    const req = await request.json();
    try {
        const states = await fetch(`${process.env.API_URL}city_ranking?key=${process.env.API_KEY}`);
        const data = await states.json();
        if(data.status === 'success') {
            return NextResponse.json(data)
        } else throw new Error(data.data.message);
    } catch(err: any) {
        console.error('API-RANKING-ERROR->', err)
        return NextResponse.json({success: false, error: err.toString()})
    }
}