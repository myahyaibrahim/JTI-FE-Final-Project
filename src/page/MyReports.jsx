import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../Configuration";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";
import moment from "moment/moment";

function MyReports() {
  const [title] = useState("My Reports");

  const [reportList, setReportList] = useState([]);

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
      .get(api + "/report", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setReportList(res.data);
      });
  }, []);

  return (
    <div className="content-wrapper">
      {/* Header */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>My Reports</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/MyReports">My Reports</a>
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
                        <th style={{ width: "5%", textAlign: "center" }}>No</th>
                        <th style={{ width: "30%", textAlign: "center" }}>
                          Report Title
                        </th>
                        <th style={{ width: "15%", textAlign: "center" }}>
                          Report Date
                        </th>
                        <th style={{ width: "30%", textAlign: "center" }}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {reportList.map((curr, idx) => (
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
                          {/* Report title */}
                          <td
                            style={{
                              verticalAlign: "middle",
                            }}
                          >
                            {curr.reportTitle}
                          </td>
                          {/* Report Date */}
                          <td
                            style={{
                              verticalAlign: "middle",
                              textAlign: "center",
                            }}
                          >
                            {moment(curr.reportDate).utc().format("YYYY-MM-DD")}
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
                                <Link to={`/ReportDetail/${curr.uuid}`}>
                                  <button
                                    id_parameter={1}
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    <i className="fas fa-eye"></i> See Details
                                  </button>
                                </Link>
                              </div>
                              {/* <div style={{ margin: "0 3px" }}>
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
                              </div> */}
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

export default MyReports;
