import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import url from "url";
import { get } from "lodash";

export async function GET(request: NextApiRequest, response: NextApiResponse) {

    //const reqQuery = url.parse(request.url as string, true).query;
    //process.env.API_KEY
    try {
        const countries = await fetch(`${process.env.API_URL}countries?key=${process.env.API_KEY}`);
        const data = await countries.json();
        if(data.status === 'success') {
            return NextResponse.json(data)
        } else throw new Error(data.data.message);
    } catch(err: any) {
        console.error('API-COUNTRIES-ERROR->', err)
        return NextResponse.json({success: false, error: err.toString()})
    }
}