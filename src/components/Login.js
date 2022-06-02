import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const getLocalStorageData = () => {
    let registeredUsers = JSON.parse(localStorage.getItem("UserCollection"));
    if (registeredUsers) {
      return registeredUsers;
    } else {
      return [];
    }
  };

  // setAvalAccounts has been removed from the below state
  const [avalAccounts] = useState(getLocalStorageData());

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const userInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails((prev) => {
      if (name === "password") {
        return {
          email: prev.email,
          password: value,
        };
      } else {
        return {
          email: value,
          password: prev.password,
        };
      }
    });
  };

  const navigate = useNavigate();
  const login = () => {
    avalAccounts.find((user) => {
      if (
        user.email === userDetails.email &&
        user.password === userDetails.password
      ) {
        console.log("User found");
        navigate("/");
        props.setUserLoggedIn(true);
        props.setCurrUser(userDetails);
        localStorage.setItem("CurrUser", JSON.stringify(userDetails));
        setUserDetails({
          email: "",
          password: "",
        });
      } else {
        console.log("User not found");
      }
    });
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
                <h2 className="my-5">Login</h2>
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
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={login}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/register" className="link-danger">
                      Register
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
