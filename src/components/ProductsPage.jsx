import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"



function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [showInStock, setShowInStock] = useState(false)

function filteredProducts(searchInput){
  console.log(searchInput)
  if(searchInput===''){
    setProducts(jsonData)
  }
else{

  const copyProducts=[...products]
  const filteredArray=copyProducts.filter(product=>{
    return product.name.toLowerCase().includes(searchInput.toLowerCase())})
    setProducts(filteredArray)
  }

}


function toggleInStock(searchInput){
  const copyProducts = [...products];
  if(searchInput) {
    const inStockArray = copyProducts.filter((product) => {
      return product.inStock === true})
            // console.log(inStockArray)
      setProducts(inStockArray)}
      else {
        setProducts(jsonData)
      }
  
}


  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar  filteredProducts={filteredProducts} toggleInStock={toggleInStock}/>
      <ProductTable products={products} />

    </div>
  );
}

export default ProductsPage