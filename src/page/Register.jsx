import React, { useContext, useEffect, useState } from "react";
import { StatusContext } from "../StatusContext";
import axios from "axios";
import { api } from "../Configuration";
import { Alert } from "reactstrap";

function Register() {
  const [title] = useState("Register");
  const valueContext = useContext(StatusContext);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
    username: "",
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
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const onRegisterButtonClicked = (event) => {
    event.preventDefault();
    console.log(registerData);

    axios
      .post(api + "/users", registerData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        console.log(res.request.status);
        console.log(res.data);
        if (res.request.status === 201) {
          //   Pop up confirmation
          setStatus({
            display: "block",
            type: "success",
            message: res.data.msg,
          });

          // Upload username to local storage
          //   sessionStorage.setItem("username", registerData["username"]);
        } else {
          // Error
          setStatus({
            display: "block",
            type: "danger",
            message: res.data.msg,
          });
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
  };

  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="register-logo">
          <a href="../../index2.html">
            <b>Water </b>Monitoring System
          </a>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new account</p>
            <Alert color={status.type} style={{ display: status.display }}>
              {status.message}
            </Alert>
            <form action="../../index.html" method="post">
              {/* Full name */}
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  name="name"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              {/* Username */}
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa fa-id-card" />
                  </div>
                </div>
              </div>
              {/* Email */}
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
              {/* Password */}
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
              {/* Retype password */}
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Retype password"
                  name="confPassword"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
            </form>
            {/* Register button */}
            <div className="input-group mb-3">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={onRegisterButtonClicked}
              >
                Register
              </button>
            </div>
            {/* Login redirect */}
            <a href="/login" className="text-center">
              I already have an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
