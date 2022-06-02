import React from "react";
import { Link } from "react-router-dom";

function Cart(props) {
  return (
    <div className="container row d-flex m-auto pt-5">
      <h1 className="text-center m-5">Your cart:</h1>

      {props.userLoggedIn ? (
        props.cartArray.map((product) => {
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
                    <h5>$ {product.price}</h5>
                    <div className="d-flex">
                      {Array(product.rating)
                        .fill()
                        .map(() => (
                          <p>⭐</p>
                        ))}
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                    <div className="mt-4">
                      <button
                        className="btn btn-secondary mx-3 "
                        onClick={() => props.removeQty(product, product.id)}
                      >
                        -
                      </button>
                      {product.cartQty}{" "}
                      <button
                        className="btn btn-secondary mx-3"
                        onClick={() => props.addQty(product, product.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h2 className="my-2">
            <Link to="/login" className="link-danger">
              Login
            </Link>{" "}
            /{" "}
            <Link to="/register" className="link-danger">
              Register
            </Link>{" "}
            to access cart
          </h2>
        </div>
      )}
      <div>
        <h2>
          Total: $
          {props.userLoggedIn
            ? props.cartArray
                .reduce((accumulator, product) => {
                  return accumulator + product.price * product.cartQty;
                }, 0)
                .toFixed(2)
            : 0}
        </h2>
      </div>
    </div>
  );
}

export default Cart;
