import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert } from "reactstrap";

function EditDevice() {
  const [title] = useState("Add Device");

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

  const onSaveButtonClicked = (event) => {
    event.preventDefault();
    console.log("save button");
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Add New Device</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/AddDevice">Add New Device</a>
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
                      />
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
                        >
                          <option value={"Drinkable water"}>
                            Drinkable water
                          </option>
                          <option value={"Bathing water"}>Bathing water</option>
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

export default EditDevice;
