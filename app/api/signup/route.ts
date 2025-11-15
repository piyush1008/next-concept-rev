
import { prisma } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";



export function GET(){
    return Response.json({
        "username":"piyush",
        "email":"piyush@gmail.com"
    })
}


export async function POST(req:NextRequest,res:NextResponse){
    const {username, password}=await req.json();
    const result=await prisma.user.create({
        data:{
            username,
            password
        }
    })

    console.log(result.id)

    return NextResponse.json({
        message:"user is signed UP"
    })
}

