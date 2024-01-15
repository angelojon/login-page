import { NextRequest } from "next/server"

export async function GET(request: Request) {
    
    return new Response('')
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    console.log(body);

    return new Response(JSON.stringify(body));
}