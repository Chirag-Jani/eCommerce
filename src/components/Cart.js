import React from "react";

function Cart(props) {
  return (
    <div className="container row d-flex m-auto pt-5">
      <h1 className="text-center m-5">Your cart:</h1>
      {props.cartArray.map((product) => {
        if (product.cartQty > 0) {
          return (
            <div
              className="border border-primary my-2 w-50 p-2"
              key={product.id}
            >
              <div className="w-100 align-middle ">
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
                    <p>$ {product.price}</p>
                    <p>{product.rating} ⭐</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                    <div className="mt-4">
                      <button
                        className="btn btn-secondary mx-3"
                        onClick={() => props.removeQty(product)}
                      >
                        -
                      </button>
                      {product.cartQty}{" "}
                      <button
                        className="btn btn-secondary mx-3"
                        onClick={() => props.addQty(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div>
        <h2>Total: $</h2>
      </div>
    </div>
  );
}

export default Cart;
