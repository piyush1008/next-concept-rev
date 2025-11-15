import { Children } from "react";


export default function layout({children}:{
    children: React.ReactNode
})
{
    return(
        <div className="border-b text-center">
            20% for the next three days
            {children}
        </div>
    )
}