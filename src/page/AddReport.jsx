import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert } from "reactstrap";
import { api } from "../Configuration";
import { Navigate } from "react-router-dom";

function AddReport() {
  const [title] = useState("Add Device");

  const [selectedDeviceUUID, setSelectedDeviceUUID] = useState("");

  const [deviceList, setDeviceList] = useState([]);

  const [reportData, setReportData] = useState({
    reportTitle: "",
    reportDescription: "",
    address: "",
    cityRegency: "",
    province: "",
    reportedTotalDissolvedSolids: 0.0,
    reportedTurbidity: 0.0,
    reportedTemperature: 0.0,
    reportedColor: 0.0,
    reportedElectricalConductivity: 0.0,
    reportedPh: 0.0,
    reportedTotalColiforms: 0.0,
    reportedMetal: 0.0,
  });

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
        setDeviceList(res.data);
      });
  }, []);

  const handleChange = (e) => {
    setReportData({
      ...reportData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeDevice = (e) => {
    setSelectedDeviceUUID(e.target.value);
    // Fetch parameter value from device
    axios
      .get(api + "/monitor/" + e.target.value, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setReportData({
          ...reportData,
          reportedTotalDissolvedSolids: res.data.totalDissolvedSolids,
          reportedTurbidity: res.data.turbidity,
          reportedTemperature: res.data.temperature,
          reportedColor: res.data.color,
          reportedElectricalConductivity: res.data.electricalConductivity,
          reportedPh: res.data.ph,
          reportedTotalColiforms: res.data.totalColiforms,
          reportedMetal: res.data.metal,
        });
      });
  };

  const onAddReportButtonClicked = (event) => {
    console.log("Make report button");
    console.log(reportData);

    axios
      .post(api + "/report", reportData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        if (res.request.status === 201) {
          console.log(res);
          setStatus({
            display: "block",
            type: "success",
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
                <h1>Make a New Report</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/MakeReport">Make a New Report</a>
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
                    <h3 className="card-title">General Report Information</h3>
                  </div>
                  <form>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="reportTitle">Report title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="reportTitle"
                          placeholder="Report title"
                          name="reportTitle"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea
                          className="form-control"
                          rows={3}
                          id="address"
                          placeholder="Address"
                          name="address"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <div>
                              <label htmlFor="cityRegency">City/Regency</label>
                              <input
                                type="text"
                                className="form-control"
                                id="cityRegency"
                                placeholder="City/Regency"
                                name="cityRegency"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <div>
                              <label htmlFor="province">Province</label>
                              <input
                                type="text"
                                className="form-control"
                                id="province"
                                placeholder="Province"
                                name="province"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="reportDescription">
                          Report description
                        </label>
                        <textarea
                          className="form-control"
                          rows={3}
                          id="reportDescription"
                          placeholder="Report description"
                          name="reportDescription"
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
                    <h3 className="card-title">Water Quality Data</h3>
                  </div>
                  <form>
                    <div className="card-body">
                      <div className="form-group">
                        <div>
                          <label htmlFor="selectedDeviceUUID">
                            Select device you want water quality data from
                          </label>
                          <select
                            className="form-control"
                            name="selectedDeviceUUID"
                            onChange={handleChangeDevice}
                          >
                            {deviceList.map((currentDevice, idx) => (
                              <option key={idx} value={currentDevice.uuid}>
                                {currentDevice.deviceName}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Parameter Data</label>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th style={{ width: "10%", textAlign: "center" }}>
                                No
                              </th>
                              <th style={{ textAlign: "center" }}>Parameter</th>
                              <th style={{ width: "20%", textAlign: "center" }}>
                                Value
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ textAlign: "center" }}>1</td>
                              <td>Total Dissolved Solids</td>
                              <td style={{ textAlign: "center" }}>
                                {reportData.reportedTotalDissolvedSolids}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ textAlign: "center" }}>2</td>
                              <td>Turbidity</td>
                              <td style={{ textAlign: "center" }}>
                                {reportData.reportedTurbidity}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ textAlign: "center" }}>3</td>
                              <td>Temperature</td>
                              <td style={{ textAlign: "center" }}>
                                {reportData.reportedTemperature}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ textAlign: "center" }}>4</td>
                              <td>Color</td>
                              <td style={{ textAlign: "center" }}>
                                {reportData.reportedColor}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ textAlign: "center" }}>5</td>
                              <td>Electrical Conductivity</td>
                              <td style={{ textAlign: "center" }}>
                                {reportData.reportedElectricalConductivity}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ textAlign: "center" }}>5</td>
                              <td>ph</td>
                              <td style={{ textAlign: "center" }}>
                                {reportData.reportedPh}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ textAlign: "center" }}>5</td>
                              <td>Total Coliforms</td>
                              <td style={{ textAlign: "center" }}>
                                {reportData.reportedTotalColiforms}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ textAlign: "center" }}>5</td>
                              <td>Metal</td>
                              <td style={{ textAlign: "center" }}>
                                {reportData.reportedMetal}
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
              onClick={onAddReportButtonClicked}
              style={{ marginBottom: "10px" }}
            >
              Add device
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default AddReport;
