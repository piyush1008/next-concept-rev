import { prisma } from "@/app/db";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server"



export async function GET(){

    const result=await prisma.user.findMany();
    console.log(result)

    return Response.json({
        users:result
    })
}
export async function POST(req: NextRequest, res:NextResponse){
    const {username, password}=await req.json();

    const result=await prisma.user.findFirst({
        where:{
            username,
            password
        }
    })
    console.log(result)
    return NextResponse.json({
        message:"user is signed UP"
    })

}