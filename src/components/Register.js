import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Register(props) {
  // destructring props to get register funciton
  const { register } = props;

  // to navigate to home after loggin in
  const navigate = useNavigate();

  // this will be called on register click
  const registration = () => {
    register();
    if (props.userLoggedIn) {
      navigate("/");
    }
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
                <h2 className="mt-5 mb-4 pt-5">Register new user:</h2>
                {/* Full Name input */}
                <div className="form-outline mb-3">
                  <input
                    type="text"
                    id="firstNameInput"
                    className="form-control form-control-lg"
                    placeholder="Enter First Name"
                    onChange={props.userInputRegistration}
                    name="firstName"
                    autoComplete="off"
                    value={props.userDetailsRegistration.firstName}
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
                    onChange={props.userInputRegistration}
                    name="lastName"
                    autoComplete="off"
                    value={props.userDetailsRegistration.lastName}
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
                    onChange={props.userInputRegistration}
                    name="email"
                    autoComplete="off"
                    value={props.userDetailsRegistration.email}
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
                    onChange={props.userInputRegistration}
                    name="password"
                    autoComplete="off"
                    value={props.userDetailsRegistration.password}
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
                    onClick={registration}
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
