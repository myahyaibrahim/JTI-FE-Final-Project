import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { api } from "../Configuration";
import { Link } from "react-router-dom";

const DashboardExample = () => {
  
  const totalDevices = 0;

//  const userLogin = sessionStorage.getItem("id");
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get(api + "/monitor", {withCredentials: true})
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[])

  
  console.log(data)

  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard v3</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  <span className="info-box-icon">3<i className="" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Devices </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  <span className="info-box-icon"><i className="" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Devices Active</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  <span className="info-box-icon"><i className="" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Devices Non-Active</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  <span className="info-box-icon"><i className="" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Deleted Device</span>
                  </div>
                </div>
              </div>

            </div>            
            <div className="row">   
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Devices</h3>
                    <div className="card-tools">
                      {/* <ul className="pagination pagination-sm float-right">
                        <li className="page-item"><a className="page-link" href="#">«</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">»</a></li>
                      </ul> */}
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Valve Status</th>
                          <th>Status</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.map((monitoring, index) => {
                            
                            return <tr key ={index}>
                              <td>{index + 1}</td>
                              <td>{monitoring.deviceName}</td>
                              <td>{monitoring.valveStatus === true ? "Open" : "Closed"}</td>                              
                              <td>
                              {monitoring.status === true &&
                              <button className="btn btn-success btn-sm" disabled>
                                  Active
                              </button>
                              }
                              {monitoring.status === false &&
                              <button className="btn btn-danger btn-sm" disabled>
                                  Off
                              </button>
                              }
                              </td>

                              <td>
                              <Link to="/DetailDevice"
                                state={monitoring}                                
                              >
                                <button className="btn btn-primary btn-block">
                                  Detail
                                </button>
                              </Link>
                              </td>
                            </tr>

                          })
                        }

{/* 
                        <tr>
                          <td>1.</td>
                          <td>Update software</td>
                          <td>
                            <div className="progress progress-xs">
                              <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
                            </div>
                          </td>
                          <td><span className="badge bg-danger">55%</span></td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>Clean database</td>
                          <td>
                            <div className="progress progress-xs">
                              <div className="progress-bar bg-warning" style={{width: '70%'}} />
                            </div>
                          </td>
                          <td><span className="badge bg-warning">70%</span></td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>Cron job running</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div className="progress-bar bg-primary" style={{width: '30%'}} />
                            </div>
                          </td>
                          <td><span className="badge bg-primary">30%</span></td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>Fix and squish bugs</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div className="progress-bar bg-success" style={{width: '90%'}} />
                            </div>
                          </td>
                          <td><span className="badge bg-success">90%</span></td>
                        </tr>
                         */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardExample;
