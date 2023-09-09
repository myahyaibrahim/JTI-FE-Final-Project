import React, { useContext, useEffect, useState } from "react";
import { StatusContext } from "../StatusContext";
import axios from "axios";
import { api } from "../Configuration";
import { Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [title] = useState("Login");
  const navigate = useNavigate();
  const valueContext = useContext(StatusContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    display: "none",
    type: "",
    message: "",
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

    axios
      .post(api + "/login", loginData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.request.status === 200) {
          // Enable navbar
          valueContext.setStatusValue({
            ...valueContext.statusValue,
            navDisplay: "block",
          });
          // Upload username to session storage
          sessionStorage.setItem("id", res.data.id);
          sessionStorage.setItem("uuid", res.data.uuid);
          sessionStorage.setItem("name", res.data.name);
          sessionStorage.setItem("email", res.data.email);
          sessionStorage.setItem("username", res.data.username);

          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        setStatus({
          display: "block",
          type: "danger",
          message: err.response.data.msg,
        });
      });

    // Enable Navigation bar
    // valueContext.setStatusValue({
    //   ...valueContext.statusValue,
    //   navDisplay: "block",
    // });
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
            <Alert color={status.type} style={{ display: status.display }}>
              {status.message}
            </Alert>
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
              {/* <div className="row">
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
              </div> */}
            </form>
            <div className="input-group mb-3">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={onSignInButtonClicked}
              >
                Sign in
              </button>
            </div>
            {/* <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p> */}
            <p className="mb-0">
              <a href="/register" className="text-center">
                Register a new account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
