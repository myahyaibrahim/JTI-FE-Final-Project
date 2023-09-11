import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { api } from "../Configuration";
import { Link } from "react-router-dom";
import  _  from 'lodash';

const DashboardExample = () => {
  
  const totalDevices = 0;

//  const userLogin = sessionStorage.getItem("id");
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get(api + "/monitor", {withCredentials: true})
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[])


//  console.log(data)

///////////////hitung jumlah device yang aktif
  let countStatusActive=0, count1;
  count1 = data.filter(item => item.status === true );
  countStatusActive = count1.length;
  
///////////////hitung jumlah device yang tidak aktif
  let countStatusDeactive=0, count2;
  count2 = data.filter(item => item.status === false );
  countStatusDeactive = count2.length;

///////////////hitung jumlah device yang ada
  let countDevice=0, count0;
  count0 = data.filter(item => item.id != null );
  countDevice = count0.length;

///////////////hitung jumlah device yang valve open
  let countValve=0, count3;
  count3 = data.filter(item => item.valveStatus === true );
  countValve = count3.length;

  /////////////////////////////total water usage semua device///////////////////////////////////////
  let sumWaterUsage = data.reduce(function(prev, current) {
    return prev + +current.waterUsage
  }, 0);

  /////////////////////////////total water Limit semua device///////////////////////////////////////
  let sumWaterLimit = data.reduce(function(prev, current) {
    return prev + +current.waterLimit
  }, 0);

  /////////////////////////////mean ph semua device///////////////////////////////////////
  let meanPh = data.reduce(function(prev, current) {
    
    return prev + +current.ph 
  }, 0);

  console.log(meanPh)
  /////////////////////////////mean temperature semua device///////////////////////////////////////

  /////////////////////////////mean metal semua device///////////////////////////////////////
    
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
                  <span className="info-box-icon"><i className="" />{countDevice}</span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Devices </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-gradient-success">
                  <span className="info-box-icon"><i className="" />{countStatusActive}</span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Devices Active</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-danger">
                  <span className="info-box-icon"><i className="" />{countStatusDeactive}</span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Devices Non-Active</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  <span className="info-box-icon"><i className="" />{countValve}</span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Valve Open</span>
                  </div>
                </div>
              </div>
            </div>  
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  {/* <span className="info-box-icon"><i class="fa-solid fa-droplet"></i></span> */}
                  <div className="info-box-content">
                  <span className="info-box-text">Water Usage / Water Limit </span>
                  <span class="info-box-number">{sumWaterUsage} / {sumWaterLimit}</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  <span className="info-box-icon"><i className="" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Average ph</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  <span className="info-box-icon"><i className="" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Average Temperature</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="info-box bg-info">
                  <span className="info-box-icon"><i className="" /></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Average Metal</span>
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
                          <th>Status</th>
                          <th>Valve Status</th>
                          <th>Water Usage</th>

                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.map((monitoring, index) => {
                            
                            return <tr key ={index}>
                              <td>{index + 1}</td>
                              <td>{monitoring.deviceName}</td>
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
                              <td>{monitoring.valveStatus === true ? "Open" : "Closed"}</td>                              
                              <td>{monitoring.waterUsage} / {monitoring.waterLimit}</td>                              

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
