import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (e) => {
    let searchText = e.target.value;
    console.log(searchText);
    setSearchInput(searchText);
  };
  const searchItem = (e) => {
    // preventing reload
    e.preventDefault();

    // printing searchInput
    console.log("Search Initiated. " + searchInput);

    // printing list of all the products
    console.log(props.listOfProducts);

    // finding product by title and by searchinput
    let proudctIsthere = props.listOfProducts.find(
      (o) => o.title.toLowerCase() === searchInput.toLowerCase()
    );

    // printing the product
    if (proudctIsthere) {
      console.log("Product found");
    } else {
      console.log("Product is not found.");
    }

    // resettig searchInput text
    setSearchInput("");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container row m-auto d-flex justify-content-evenly">
          <div className="nav-item col ">
            <Link className="navbar-brand  ps-5 ms-2" to="/">
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
                value={searchInput}
                onChange={handleSearchInput}
              />
              <button className="btn btn-outline-success" onClick={searchItem}>
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
                    Log in
                  </Link>
                )}
              </div>
              <div>
                <Link to="/profile">
                  <h5 className="text-white my-2 p-3">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-person-circle mx-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg> */}
                    {props.currUser.email}
                  </h5>
                </Link>
              </div>
              {/* cart */}
              <div className="d-flex nav-link p-3 mx-3">
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
