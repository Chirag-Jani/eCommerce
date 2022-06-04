import React from "react";

function Product(props) {
  return (
    <div className="container row m-1 pt-5">
      {/* mapping */}
      {props.products.map((product) => {
        return (
          <div
            className="col border border-secondary p-1 m-2 d-flex"
            key={product.id}
          >
            <div className="col d-flex m-3">
              <div className="mx-2">
                <img
                  src={product.urlToImage}
                  style={{ width: "150px", height: "fit-content" }}
                  alt="PImage"
                />
              </div>
              <div>
                <div className="mx-2">
                  <h5>{product.title}</h5>
                  <p>{product.description.slice(0, 50)}...</p>
                  <h5>$ {product.price}</h5>
                  <div className="d-flex">
                    {Array(product.rating)
                      .fill()
                      .map((_, i) => (
                        <p key={i}>⭐</p>
                      ))}
                  </div>
                </div>

                <div>
                  <button
                    className="btn btn-primary"
                    onClick={() => props.addToCart(product)}
                  >
                    Add to Cart
                  </button>
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
