import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../Configuration";
import { Alert } from "reactstrap";

function Setting() {
  const [title] = useState("Settings");

  const [status, setStatus] = useState({
    display: "none",
    type: "",
    message: "",
  });

  const [accountData, setAccountData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });

  useEffect(() => {
    // Fetch device informatiom/configuration from database
    axios
      .get(api + "/users/" + localStorage.getItem("uuid"), {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setAccountData({
          ...accountData,
          name: res.data.name,
          email: res.data.email,
          password: res.data.password,
          username: res.data.username,
        });
      });

    // Set page title
    document.title = title;
  }, []);

  const handleChange = (e) => {
    setAccountData({
      ...accountData,
      [e.target.name]: e.target.value,
    });
  };

  const onSaveButtonClicked = (event) => {
    event.preventDefault();
    console.log(accountData);

    axios
      .patch(api + "/users/" + localStorage.getItem("uuid"), accountData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setStatus({
          display: "block",
          type: "success",
          message: res.data.msg,
        });
        localStorage.setItem("name", accountData.name);
        localStorage.setItem("email", accountData.email);
        localStorage.setItem("username", accountData.username);
      })
      .catch((err) => {
        console.log(err);
        setStatus({
          display: "block",
          type: "danger",
          message: err.response.data.msg,
        });
      });

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Edit Profile</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href={"/EditProfile"}>Edit Profile</a>
                </li>
              </ol>
            </div>
          </div>

          <Alert
            color={status.type}
            style={{ display: status.display, marginBottom: "0px" }}
          >
            {status.message}
          </Alert>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Profile Information</h3>
                </div>
                <form>
                  <div className="card-body">
                    {/* Full name */}
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Full name"
                        name="name"
                        onChange={handleChange}
                        value={accountData.name}
                      />
                    </div>
                    {/* Username */}
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                        value={accountData.username}
                      />
                    </div>
                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={accountData.email}
                      />
                    </div>
                    {/* Password */}
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter new Password"
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div
          className="container-fluid"
          style={{
            display: "flex",
            alignItems: "right",
            justifyContent: "right",
          }}
        >
          <button
            type="submit"
            className="btn btn-primary"
            onClick={onSaveButtonClicked}
            style={{ marginBottom: "10px" }}
          >
            Save changes
          </button>
        </div>
      </section>
    </div>
  );
}

export default Setting;
