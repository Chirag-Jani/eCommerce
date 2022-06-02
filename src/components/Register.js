import React, { useEffect, useState } from "react";
import { Link, Router } from "react-router-dom";

function Register() {
  // it will get data from local storage and will set userCollection (it is down there in the usestate)
  const getLocalStorageData = () => {
    let registeredUsers = JSON.parse(localStorage.getItem("UserCollection"));
    if (registeredUsers) {
      return registeredUsers;
    } else {
      return [];
    }
  };

  // state to handle user input
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // array of objects for registered users
  const [userCollection, setUserCollection] = useState(getLocalStorageData());

  // it will be called each time userCollection is updated
  useEffect(() => {
    localStorage.setItem("UserCollection", JSON.stringify(userCollection));
  }, [userCollection]);

  // handling function to handle user input
  const userInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // setting state for user input
    setUserDetails((prev) => {
      if (name === "firstName") {
        return {
          firstName: value,
          lastName: prev.lastName,
          email: prev.email,
          password: prev.password,
        };
      } else if (name === "lastName") {
        return {
          firstName: prev.firstName,
          lastName: value,
          email: prev.email,
          password: prev.password,
        };
      } else if (name === "email") {
        return {
          firstName: prev.firstName,
          lastName: prev.lastName,
          email: value,
          password: prev.password,
        };
      } else {
        return {
          firstName: prev.firstName,
          lastName: prev.lastName,
          email: prev.email,
          password: value,
        };
      }
    });
  };

  const register = () => {
    // adding new user to the userlist
    const email = userDetails.email;
    const check = userCollection.find((user) => user.email === email);
    // check for the user with same email
    if (check) {
      alert("User with the same email already exist.");
    }
    // if there is no user with the same email, it will add it to the list
    else {
      setUserCollection([...userCollection, userDetails]);
      // updating local storage
      localStorage.setItem("UserCollection", JSON.stringify(userCollection));
    }
    // resetting input fields
    setUserDetails({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    // Now redirect user to the homepage after registeration
  };

  return (
    <div className="container pt-5">
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
                <h2 className="mt-5 mb-4">Register new user:</h2>
                {/* Full Name input */}
                <div className="form-outline mb-3">
                  <input
                    type="text"
                    id="firstNameInput"
                    className="form-control form-control-lg"
                    placeholder="Enter First Name"
                    onChange={userInput}
                    name="firstName"
                    autoComplete="off"
                    value={userDetails.firstName}
                  />
                  <label className="form-label mt-2" htmlFor="firstNameInput">
                    First Name
                  </label>
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="text"
                    id="lastNameInput"
                    className="form-control form-control-lg"
                    placeholder="Enter Last Name"
                    onChange={userInput}
                    name="lastName"
                    autoComplete="off"
                    value={userDetails.lastName}
                  />
                  <label className="form-label mt-2" htmlFor="lastNameInput">
                    Last Name
                  </label>
                </div>
                {/* Email input */}
                <div className="form-outline mb-3">
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
                    onClick={register}
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

export default Register;
