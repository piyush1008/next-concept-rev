

export default async function ({params}:any){
   
    const {courseId}=await params; //this will be an array
    console.log(courseId)
    return (
        <div>
            Course page
        </div>
    )
}