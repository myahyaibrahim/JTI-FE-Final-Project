import React, { useContext, useEffect, useState } from "react";
import { StatusContext } from "../StatusContext";

export default function Login() {
  const [title] = useState("Login");
  const valueContext = useContext(StatusContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  useEffect(() => {
    if (localStorage.getItem("username") === null) {
      valueContext.setStatusValue({
        ...valueContext.statusValue,
        navDisplay: "none",
      });
    }

    valueContext.setStatusValue({
      ...valueContext.statusValue,
      navDisplay: "none",
    });

    // Set page title
    document.title = title;
  }, [title]);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const onSignInButtonClicked = (event) => {
    event.preventDefault();

    console.log(loginData);

    localStorage.setItem("email", loginData["email"]);
    // Enable Navigation bar
    valueContext.setStatusValue({
      ...valueContext.statusValue,
      navDisplay: "block",
    });
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Water </b>Monitoring System
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">
              Sign in to start monitoring your water
            </p>
            <form action="../../index3.html" method="post">
              {/* email form */}
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              {/* password form */}
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              {/* Remember me & Sign in Button section */}
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={onSignInButtonClicked}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">
                Register a new account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
