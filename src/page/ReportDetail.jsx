import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { api } from "../Configuration";
import { Alert } from "reactstrap";

function ReportDetail() {
  const [title] = useState("Report Detail");

  const params = useParams();

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

  useEffect(() => {
    // Set page title
    document.title = title;

    // Fetch report detail
    axios
      .get(api + "/report/" + params.uuid, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setReportData({
          ...reportData,
          reportTitle: res.data.reportTitle,
          reportDescription: res.data.reportDescription,
          address: res.data.address,
          cityRegency: res.data.cityRegency,
          province: res.data.province,
          reportedTotalDissolvedSolids: res.data.reportedTotalDissolvedSolids,
          reportedTurbidity: res.data.reportedTurbidity,
          reportedTemperature: res.data.reportedTemperature,
          reportedColor: res.data.reportedColor,
          reportedElectricalConductivity:
            res.data.reportedElectricalConductivity,
          reportedPh: res.data.reportedPh,
          reportedTotalColiforms: res.data.reportedTotalColiforms,
          reportedMetal: res.data.reportedMetal,
        });
      });
  }, []);

  const handleChange = (e) => {
    setReportData({
      ...reportData,
      [e.target.name]: e.target.value,
    });
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
                <h1>Report Detail</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href={"/ReportDetail/" + params.uuid}>Report Detail</a>
                  </li>
                </ol>
              </div>
            </div>

            {/* <Alert
                color={status.type}
                style={{ display: status.display, marginBottom: "0px" }}
              >
                {status.message}
              </Alert> */}
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
                          value={reportData.reportTitle}
                          disabled
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
                          value={reportData.address}
                          disabled
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
                                value={reportData.cityRegency}
                                disabled
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
                                value={reportData.province}
                                disabled
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
                          value={reportData.reportDescription}
                          disabled
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
                      {/* <div className="form-group">
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
                        </div> */}

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

        {/* <section className="content">
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
          </section> */}
      </div>
    );
  }
}

export default ReportDetail;
