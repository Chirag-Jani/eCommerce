import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container row m-auto d-flex justify-content-around">
          <div className="nav-item col">
            <Link className="navbar-brand  px-4" to="/">
              Shoper's Point
            </Link>
            <button
              className="navbar-toggler my-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className="collapse navbar-collapse col"
            id="navbarSupportedContent"
          >
            <div className="nav-item col">
              <Link className="text-white nav-link px-4" to="/">
                Home
              </Link>
            </div>
            <form className="d-flex">
              <input
                className="form-control w-100 mx-4"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {/* Login  */}
            <div className="nav-item text-white m-auto d-flex flex-sm-column flex-column flex-md-row">
              <div className="p-3">
                {props.userLoggedIn ? (
                  <div>
                    <button
                      className="btn text-white btn-primary ms-3"
                      onClick={props.logout}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to="/login" className="btn text-white btn-primary ms-2">
                    Log in / Sign up
                  </Link>
                )}
              </div>
              <div>
                <h5 className="text-white m-2 ms-3 p-3">
                  Hello {props.currUser.email}
                </h5>
              </div>
              {/* cart */}
              <div className="d-flex nav-link p-3 me-4">
                <Link className="mx-2 d-flex text-decoration-none" to="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-cart4"
                    viewBox="0 0 16 16"
                    color="white"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                  <h4 className="text-white mx-2">
                    {props.userLoggedIn ? props.cartItems : 0}
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
