"use server"
import axios from "axios";
import { prisma } from "../db";


export async function signup(username: string, password: string)
{
    const result=await prisma.user.create({
        data:{
            username,
            password
        }
    })
    console.log(result)

    return true;
}