import { NextRequest, NextResponse } from "next/server";




export async function GET(req: NextRequest, {params}:any){
    // console.log(params)
    const r=await params;
    console.log(r.authRoutes)

    return NextResponse.json({
        message :"HJii there"
    })
}


export  function POST(){


    
    return NextResponse.json({
        message :"HJii there"
    })
}