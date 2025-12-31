import "./style.css"
export default function StyledCard(){
    const products=
    {
        name:"book",price:"200",description:"SelfLove"
    }


    return(
        <>
        <h1 className="head">Prodcut-List</h1>
        
        
            
            
                <div className="card">
                    <img src="/self-love.png" alt="" width={300} />
                <h1>product-name:{products.name} </h1>
                <h1>product-price:{products.price}</h1>
                <p>product-description:{products.description}</p>
                </div>

         
        
        
        </>
    )
}