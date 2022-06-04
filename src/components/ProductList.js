import React from "react";
import Product from "./Product";

function ProductList(props) {
  return (
    <div className="container my-5 pt-5">
      <Product addToCart={props.addToCart} products={props.products} />
    </div>
  );
}

export default ProductList;
