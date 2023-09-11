import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Alert } from "reactstrap";
import { api } from "../Configuration";

function EditDevice() {
  const [title] = useState("Add Device");

  const [isChecked, setIsChecked] = useState(false);

  const params = useParams();

  const [deviceData, setDeviceData] = useState({
    deviceName: "",
    description: "",
    deviceSerialNumber: "",
    updateInterval: 30,
    status: true,
    waterLimit: 0,
    waterUsageTimer: 0,
    valveStatus: true,
    waterTolerance: "Drinkable water",
  });

  const [status, setStatus] = useState({
    display: "none",
    type: "",
    message: "",
  });

  useEffect(() => {
    console.log("UUID Device");
    console.log(params);
    // Fetch device informatiom/configuration from database
    axios
      .get(api + "/monitorConfiguration/" + params.uuid, {
        withCredentials: true,
      })
      .then((res) => {
        setDeviceData({
          ...deviceData,
          deviceName: res.data.deviceName,
          description: res.data.description,
          deviceSerialNumber: res.data.deviceSerialNumber,
          updateInterval: res.data.updateInterval,
          status: res.data.status,
          waterLimit: res.data.waterLimit,
          waterUsageTimer: res.data.waterUsageTimer,
          valveStatus: res.data.valveStatus,
          waterTolerance: res.data.waterTolerance,
        });
      });

    // Set page title
    document.title = title;
  }, []);

  const handleChange = (e) => {
    setDeviceData({
      ...deviceData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeNumber = (e) => {
    setDeviceData({
      ...deviceData,
      [e.target.name]: +e.target.value,
    });
  };

  const handleChangeCheckbox = (e, currentStatus) => {
    setDeviceData({
      ...deviceData,
      [e.target.name]: !currentStatus,
    });
  };

  console.log(deviceData);

  const onSaveButtonClicked = (event) => {
    event.preventDefault();
    console.log(deviceData);

    axios
      .patch(api + "/monitor/" + params.uuid, deviceData, {
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
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Edit Device</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href={"/EditDevice/" + params.uuid}>Edit Device</a>
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
                    <h3 className="card-title">General Information</h3>
                  </div>
                  <form>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="deviceName">Device name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="deviceName"
                          placeholder="Device name"
                          name="deviceName"
                          onChange={handleChange}
                          value={deviceData.deviceName}
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <div>
                              <label htmlFor="deviceSerialNumber">
                                Device serial number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="deviceSerialNumber"
                                placeholder="Enter device serial number"
                                name="deviceSerialNumber"
                                onChange={handleChange}
                                value={deviceData.deviceSerialNumber}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <div>
                              <label htmlFor="updateInterval">
                                Set update interval
                              </label>
                              <select
                                className="form-control"
                                name="updateInterval"
                                onChange={handleChangeNumber}
                                value={deviceData.updateInterval}
                              >
                                <option value={30}>30 minutes</option>
                                <option value={60}>1 hour</option>
                                <option value={180}>3 hours</option>
                                <option value={360}>6 hours</option>
                                <option value={720}>12 hours</option>
                                <option value={1440}>24 hours</option>
                                <option value={4320}>3 days</option>
                                <option value={10080}>1 week</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="deviceDescription">
                          Device description
                        </label>
                        <textarea
                          className="form-control"
                          rows={3}
                          id="deviceDescription"
                          placeholder="Device description"
                          name="description"
                          onChange={handleChange}
                          value={deviceData.description}
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Turn device on/off</label>
                            <div className="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="status"
                                checked={deviceData.status}
                                name="status"
                                onChange={(event) =>
                                  handleChangeCheckbox(event, deviceData.status)
                                }
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="status"
                                style={{ fontWeight: "normal" }}
                              >
                                {deviceData.status === true
                                  ? "Active (On)"
                                  : "Inactive (Off)"}
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Open/close valve</label>
                            <div className="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="valveStatus"
                                checked={deviceData.valveStatus}
                                name="valveStatus"
                                onChange={(event) =>
                                  handleChangeCheckbox(
                                    event,
                                    deviceData.valveStatus
                                  )
                                }
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="valveStatus"
                                style={{ fontWeight: "normal" }}
                              >
                                {deviceData.valveStatus === true
                                  ? "Open"
                                  : "Close"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Water usage & quality section */}
            <div className="row">
              <div className="col-md-12">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">
                      Water Usage & Quality Monitoring
                    </h3>
                  </div>
                  <form>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <div>
                              <label htmlFor="waterAllocation">
                                Water allocation
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="waterAllocation"
                                placeholder="Water allocation per month"
                                name="waterLimit"
                                onChange={handleChangeNumber}
                                value={deviceData.waterLimit}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <div>
                              <label htmlFor="waterUsageTimer">
                                Water usage timer
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="waterUsageTimer"
                                placeholder="Water usage timer in minutes"
                                name="waterUsageTimer"
                                onChange={handleChangeNumber}
                                value={deviceData.waterUsageTimer}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div>
                          <label htmlFor="waterTolerance">
                            Set water quality tolerance
                          </label>
                          <select
                            className="form-control"
                            name="waterTolerance"
                            onChange={handleChange}
                            value={deviceData.waterTolerance}
                          >
                            <option value={"Drinkable water"}>
                              Drinkable water
                            </option>
                            <option value={"Bathing water"}>
                              Bathing water
                            </option>
                            <option value={"Bad risk quality water"}>
                              Bad risk quality water
                            </option>
                          </select>
                        </div>
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
}

export default EditDevice;
