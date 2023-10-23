function ProductRow({products}){
    // const {name,price,inStock,id}=products
    
        return(
            <div>
                <table className="tables">
                    <tr>
                        <th>Name</th>
                        <th>
                            Price
                        </th>
                    </tr>
                    {/* map through the products array and create a new row for each product */}
                    {products.map(product=>{
                        return(
                            <tr key={product.id}>
                            {product.inStock?<td>{product.name}</td>:<td style={{color:"red"}}>{product.name}</td>}
                                <td>{product.price}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    
    
    }
    
    export default ProductRow