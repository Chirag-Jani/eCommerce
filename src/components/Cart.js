import React from "react";
import { Link } from "react-router-dom";

function Cart(props) {
  return (
    <div className="container row d-flex m-auto pt-5">
      <h1 className="text-center m-5 pt-5">Hello {props.currUser.email}</h1>
      {props.userLoggedIn ? (
        props.cartArray.map((product) => {
          return (
            <div
              className="col border border-secondary p-1 m-2 d-flex"
              key={product.id}
            >
              <div className="w-fit col d-flex m-3">
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
                      className="btn btn-danger"
                      onClick={() => props.removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                    <div className="mt-4  d-flex">
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
      <div className="mt-5">
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
