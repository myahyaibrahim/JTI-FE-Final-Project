import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { api } from "../Configuration";
import { Alert } from "reactstrap";

function MyDevices() {
  const [title] = useState("My Device");

  const [deviceList, setDeviceList] = useState([]);

  const [status, setStatus] = useState({
    display: "none",
    type: "",
    message: "",
  });

  useEffect(() => {
    // Set page title
    document.title = title;

    // Fetch list of devices
    axios
      .get(api + "/deviceList", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setDeviceList(res.data);
      });
  }, []);

  const deleteDeviceButton = (event, deviceName, uuid) => {
    event.preventDefault();
    console.log("delete button");

    console.log(deviceName);
    console.log(uuid);

    axios
      .delete(api + "/monitor", {
        data: {
          uuid: uuid,
          deviceName: deviceName,
        },
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        if (res.request.status === 200) {
          console.log(res);
          setStatus({
            display: "block",
            type: "success",
            message: res.data.msg,
          });
          // Remove the deleted device from the list
          setDeviceList(
            deviceList.filter(function (device) {
              return device.uuid !== uuid && device.deviceName !== deviceName;
            })
          );
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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (localStorage.getItem("uuid") === null) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return (
      <div className="content-wrapper">
        {/* Header */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>My Devices</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/MyDevice">My Devices</a>
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

        {/* Body content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Device List</h3>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ width: "5%", textAlign: "center" }}>
                            No
                          </th>
                          <th style={{ width: "30%", textAlign: "center" }}>
                            Device name
                          </th>
                          <th style={{ width: "15%", textAlign: "center" }}>
                            Device Status
                          </th>
                          <th style={{ width: "15%", textAlign: "center" }}>
                            Valve Status
                          </th>
                          <th style={{ width: "30%", textAlign: "center" }}>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {deviceList.map((curr, idx) => (
                          <tr key={idx}>
                            {/* No */}
                            <td
                              style={{
                                textAlign: "center",
                                verticalAlign: "middle",
                              }}
                            >
                              {idx + 1}.
                            </td>
                            {/* Device name */}
                            <td
                              style={{
                                verticalAlign: "middle",
                              }}
                            >
                              {curr.deviceName}
                            </td>
                            {/* Device status */}
                            <td
                              style={{
                                textAlign: "center",
                                verticalAlign: "middle",
                              }}
                            >
                              {curr.status === true ? "Active" : "Inactive"}
                            </td>
                            {/* Valve status */}
                            <td
                              style={{
                                textAlign: "center",
                                verticalAlign: "middle",
                              }}
                            >
                              {curr.valveStatus === true ? "Open" : "Closed"}
                            </td>
                            {/* Action column */}
                            <td>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "center",
                                }}
                              >
                                <div style={{ margin: "0 3px" }}>
                                  <Link to={`/EditDevice/${curr.uuid}`}>
                                    <button
                                      id_parameter={1}
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      <i className="fas fa-pencil-alt"></i> Edit
                                    </button>
                                  </Link>
                                </div>
                                <div style={{ margin: "0 3px" }}>
                                  <button
                                    id_parameter={1}
                                    type="submit"
                                    className="btn btn-danger"
                                    onClick={(event) =>
                                      deleteDeviceButton(
                                        event,
                                        curr.deviceName,
                                        curr.uuid
                                      )
                                    }
                                  >
                                    <i className="fas fa-trash"></i> Delete
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MyDevices;
