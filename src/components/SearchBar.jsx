function SearchBar({filteredProducts, toggleInStock}){
    
    function showChange(e){
        const searchInput=e.target.value
        filteredProducts(searchInput)
    }
    
    function show(e){
    const stock = e.target.checked
    toggleInStock(stock)

}
    
        return(
            <div>
                <label>Search</label>
                <br />
                <input type="text" onChange={showChange}/>
                <br />
               <div>
                    <input type="checkbox"  onChange={show}/>
                    <br />
                <label>Only Show Products in Stock</label>
                </div>
                
                
            </div>
        )
    
    }
    
    export default SearchBar