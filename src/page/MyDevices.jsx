import React from "react";
import { Link } from "react-router-dom";

function MyDevices() {
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
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{ width: "10%", textAlign: "center" }}>
                          No
                        </th>
                        <th style={{ width: "35%", textAlign: "center" }}>
                          Device name
                        </th>
                        <th style={{ width: "20%", textAlign: "center" }}>
                          Status
                        </th>
                        <th style={{ width: "35%", textAlign: "center" }}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          1.
                        </td>
                        <td
                          style={{
                            verticalAlign: "middle",
                          }}
                        >
                          Device 1
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          Active
                        </td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                            }}
                          >
                            <div style={{ margin: "0 3px" }}>
                              <Link to={`/`}>
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
                              <Link to={`/`}>
                                <button
                                  id_parameter={1}
                                  type="submit"
                                  className="btn btn-danger"
                                >
                                  <i className="fas fa-trash"></i> Delete
                                </button>
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      {/* {cocoaParameter.map((curr, idx) => (
                        <tr key={idx}>
                          <td>{idx + 1}.</td>
                          <td>{curr.parameter_name.replaceAll("_", " ")}</td>
                          <td>{curr.parameter_description}</td>
                          <td>
                            <Link to={`/detailparameter/${curr.id_parameter}`}>
                              <button
                                id_parameter={curr.id_parameter}
                                type="submit"
                                className="btn btn-primary"
                              >
                                <i className="fas fa-pencil-alt"></i> Edit
                              </button>
                            </Link>
                          </td>
                        </tr>
                      ))} */}
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

export default MyDevices;
