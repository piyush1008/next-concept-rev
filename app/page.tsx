import Image from "next/image";

import axios from "axios";
import { prisma } from "./db";
import { PassThrough } from "stream";
import AppBar from "@/components/Appbar";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

async function getUser()
{
  const result=await prisma.user.findFirst()
  return {
    username:result?.username,
  }
}


export default async function Home() {
  // const user=await getUser();
  // return (  
  //   <div>
  //     {user.username}
  //   </div>

  // );


  return (
    <div>
      <AppBar />
    </div>
  )
}
