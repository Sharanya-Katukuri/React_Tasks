export default function StudentList(){
    const students=["Arya","Rahul","Aisha","Kiran"]
    return(
        <>
        <h1 style={{textAlign:"center", margin:"10px",padding:"10px"}}>List Of Students</h1>
        <ul type="None" style={{textAlign:"center"}}>{
            students.map((name,index)=>(
                
                <div>
                    
                <li style={{color:"blue",fontSize:"20px"}}>{name}</li>
                {/* <li style={{color:"blue",fontSize:"15px"}}>index:{index}</li> */}
                </div>
            ))
            }

        </ul>
        </>
    )
}