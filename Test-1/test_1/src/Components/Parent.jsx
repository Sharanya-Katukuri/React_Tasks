export default function Parent(){
    return(
        <>
        <h1 style={{textAlign:"center"}}>This is Parent Component</h1>
        <Child/>
        </>
    )

}
export function Child(){
    return(
        <h2 style={{textAlign:"center"}}>This is Child Component</h2>
    )
}