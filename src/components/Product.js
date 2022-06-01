import React from "react";

function Product(props) {
  return (
    <div className="container row d-flex pt-5">
      {/* mapping */}
      {props.products.map((product) => {
        return (
          <div className="border border-primary my-2 w-50" key={product.id}>
            <div className="w-100 align-middle">
              <div className="d-flex m-3">
                <div className="mx-2">
                  <img
                    src={product.urlToImage}
                    style={{ width: "fit-content", height: "300px" }}
                    alt="PImage"
                  />
                </div>
                <div className="mx-2">
                  <h5>{product.title}</h5>
                  <p>{product.description.slice(0, 50)}...</p>
                  <h5>$ {product.price}</h5>
                  <div className="d-flex">
                    {Array(product.rating)
                      .fill()
                      .map((_, i) => (
                        <p>⭐</p>
                      ))}
                  </div>

                  <div>
                    <button
                      className="btn btn-primary mx-1"
                      onClick={() => props.addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
