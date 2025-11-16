"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function AppBar()
{
    const { data: session, status } = useSession();

    if(status === "loading")
    {
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    if(status === "unauthenticated" || !session)
    {
        return(
            <div>
                <button onClick={()=>{
                signIn();
            }}>Signin</button>
            </div>
        )
    }
    
    return(
        <div>
            <p>Welcome, {session.user?.username || session.user?.name || 'User'}!</p>
            <p>User ID: {session.user?.id}</p>
             <button onClick={()=>{
                signOut();
            }}>Logout</button>
        </div>
    )
}