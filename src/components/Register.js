import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [userCollection, setUserCollection] = useState([]);

  useEffect(() => {
    localStorage.setItem("UserCollection", JSON.stringify(userCollection));
  }, [userCollection]);

  const userInput = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setUserDetails({ [e.target.name]: e.target.value });
  };

  const register = () => {
    // adding new user to the userlist
    console.log(userDetails.fname);
    console.log(userDetails.lname);
    console.log(userDetails.email);
    console.log(userDetails.password);

    // updating local storage
    // localStorage.setItem("Registered Users", JSON.stringify(userDetails));

    // resetting input fields
    setUserDetails({
      email: "",
      password: "",
      fname: "",
      lname: "",
    });
    console.log("Registered.");
  };

  return (
    <div className="container mt-5 pt-5">
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <h2 className="my-5">Register new user:</h2>
                {/* Full Name input */}
                <div className="form-outline mb-4 row">
                  <div className="col">
                    <input
                      type="email"
                      id="firstNameInput"
                      className="form-control form-control-lg"
                      placeholder="Enter First Name"
                      onChange={userInput}
                      name="fname"
                      autoComplete="off"
                      value={userDetails.fname}
                    />
                    <label className="form-label mt-2" htmlFor="firstNameInput">
                      First Name
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      id="lastNameInput"
                      className="form-control form-control-lg"
                      placeholder="Enter Last Name"
                      onChange={userInput}
                      name="lname"
                      autoComplete="off"
                      value={userDetails.lname}
                    />
                    <label className="form-label mt-2" htmlFor="lastNameInput">
                      Last Name
                    </label>
                  </div>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="emailInput"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    onChange={userInput}
                    name="email"
                    autoComplete="off"
                    value={userDetails.email}
                  />
                  <label className="form-label mt-2" htmlFor="emailInput">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="passwordInput"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    onChange={userInput}
                    name="password"
                    autoComplete="off"
                    value={userDetails.password}
                  />
                  <label className="form-label mt-2" htmlFor="passwordInput">
                    Password
                  </label>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={() => register()}
                  >
                    Register
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account?{" "}
                    <Link to="/login" className="link-danger">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
