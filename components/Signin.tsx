"use client";

import axios from "axios";
import { useState } from "react";

export default function SigninComponent(){
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    const handle=async()=>{
        const res=await axios.post("http://localhost:3000/api/signin",{
            username,
            password
        })

        console.log(res);
        
    }
    return(
        <div className="min-h-screen w-screen flex justify-center items-center">
            <div className="w-108  border-2 rounded-3xl">
                 <div className="flex justify-center items-center p-2">
                <h1 className="text-3xl"> Sign in </h1>
                 </div>
                <div className="flex flex-col m-10">
                    <div className="m-4">
                        <label>Username: </label>
                        <input onChange={(e)=>{
                            setUsername(e.target.value)
                        }} type="text" placeholder="Enter username" />

                    </div>
                    <div className="m-4">
                        <label>Password: </label>
                        <input onChange={(e)=>{
                            setPassword(e.target.value)
                        }} type="text" placeholder="Enter paswword" />

                    </div>

                    <div className="m-4">
                        <button onClick={handle} className="text-center w-full border-2 border-amber-300 rounded-md hover:cursor-pointer">Submit</button>
                    </div>

                </div> 
            </div> 

        </div>
    )
}