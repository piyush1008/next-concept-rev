import AppBar from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";
import { redirect } from "next/navigation";



export  default async function (){
     

    const session=await getServerSession(NEXT_AUTH);

    if(!session)
    {
        redirect("/api/auth/signin" )
    }
    return (
        <div>
            <AppBar />
            user components
            {JSON.stringify(session)}
        </div>
    )
}