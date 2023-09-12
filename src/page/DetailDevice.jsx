import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardExample from "./DashboardExample";

const DetailDevice = (props) => {
    const location = useLocation();
    const propsData = location.state;
    console.log(propsData);    


    return(
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                    <h1 className="m-0">Detail Device</h1>
                </div>
                <div className="container">
                    <div className="team-single">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 xs-margin-30px-bottom ">
                                <div className="team-single-img">
                                    <img src="https://tankdoctor.com.au/wp-content/uploads/2021/10/Filtatank-Twin-filter-system-with-UV-clear-Housings-600x600.jpg" alt="" class="img-thumbnail"/>
                                    { propsData.totalColiforms === 0 && 
                        6.5 <= propsData.ph <= 8.5 &&
                        propsData.turbidity <=5 &&
                        10 <= propsData.temperature <= 25 && 
                        propsData.color <= 15 && 
                        propsData.totalDissolvedSolids <= 500 && 
                        propsData.electricalConductivity <= 200 && 
                        propsData.metal <= 0.3 &&
                              <button className="btn btn-success btn-sm" >
                                  Drinking Water
                              </button>
                        }
                        { 0 > propsData.totalColiforms < 100 && 
                        6 <= propsData.ph <= 9 &&
//                      propsData.turbidity ==0 &&
                        10 <= propsData.temperature <= 49 && 
                        propsData.color <= 15 && 
                        propsData.totalDissolvedSolids <= 500 && 
                        propsData.electricalConductivity <= 200 && 
//                      propsData.metal <= 0.3 &&
                              <button className="btn btn-info btn-sm" >
                                  Bath Waters
                              </button>
                        }
                        { 100 < (propsData.totalColiforms <1000) ||
                       ( 6 >= propsData.ph >= 8.5) ||
//                        propsData.turbidity <=5 ||
                        10 >= propsData.temperature >= 49 || 
                        propsData.color > 15 || 
                        propsData.totalDissolvedSolids >= 500 || 
                        propsData.electricalConductivity <= 200 || 
                        propsData.metal >= 0.3 ||
                              <button className="btn btn-danger btn-sm" >
                                  Bad
                              </button>
                        }                                
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-7">
                                <div className="team-single-text padding-50px-left sm-no-padding-left">
                                    <h4 className="font-size38 sm-font-size32 xs-font-size30">{propsData.deviceName}</h4>
                                    <p className="no-margin-bottom">{propsData.description}</p>
                                    <div className="contact-info-section margin-40px-tb">
                                        <ul className="list-style9 no-margin">
                                            <li>

                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className=""></i>
                                                        <strong className="margin-10px-left">Serial Number</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>:{propsData.deviceSerialNumber}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className=""></i>
                                                        <strong className="margin-10px-left ">Status</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>:{propsData.valveStatus === true ? "Open" : "Closed"}</p>
                                                    </div>
                                                </div>

                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className=""></i>
                                                        <strong className="margin-10px-left text-lightred">Water Tolerance</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>{propsData.waterTolerance}</p>
                                                    </div>
                                                </div>

                                            </li>
                                            <li>

                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className=""></i>
                                                        <strong className="margin-10px-left">Total Dissolved Solids:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>{propsData.totalDissolvedSolids}</p>
                                                    </div>
                                                </div>

                                            </li>
                                            <li>

                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className=""></i>
                                                        <strong className="margin-10px-left xs-margin-four-left ">Turbidity:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>{propsData.turbidity}</p>
                                                    </div>
                                                </div>

                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className=""></i>
                                                        <strong className="margin-10px-left xs-margin-four-left ">Temperature:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>{propsData.temperature}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className=""></i>
                                                        <strong className="margin-10px-left xs-margin-four-left ">Color:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>{propsData.color}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className=""></i>
                                                        <strong className="margin-10px-left xs-margin-four-left ">Electrical Conductivity:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>{propsData.electricalConductivity}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className=""></i>
                                                        <strong className="margin-10px-left xs-margin-four-left ">Ph:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>{propsData.ph}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className=""></i>
                                                        <strong className="margin-10px-left xs-margin-four-left ">Total Coliforms:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>{propsData.totalColiforms}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className=""></i>
                                                        <strong className="margin-10px-left xs-margin-four-left ">Metal:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>{propsData.metal}</p>
                                                    </div>
                                                </div>
                                            </li>                                                                                                                                  
                                        </ul>
                                    </div>

                                    <h5 className="font-size24 sm-font-size22 xs-font-size20">Water Monitoring</h5>

                                    <div className="sm-no-margin">
                                        <div className="progress-text">
                                            <div className="row">
                                                <div className="col-7">Water Usage/ Water Limit</div>
                                                <div className="col-5 text-right">{propsData.waterUsage} / {propsData.waterLimit}</div>
                                            </div>
                                        </div>
                                        <div className="progress progress-md">
                                          <div className="progress-bar progress-bar-danger" style={{width: propsData.waterUsage}} />
                                        </div>
                                        {/* <div className="progress-text">
                                            <div className="row">
                                                <div className="col-7">Water Limit</div>
                                                <div className="col-5 text-right">{propsData.waterLimit}%</div>
                                            </div>
                                        </div>
                                        <div className="progress progress-md">
                                          <div className="progress-bar progress-bar-danger" style={{width: propsData.waterLimit}} />
                                        </div> */}
                                        <div className="progress-text">
                                            <div className="row">
                                                <div className="col-7">Water Usage Timer </div>
                                                <div className="col-5 text-right">{propsData.waterUsageTimer}%</div>
                                            </div>
                                        </div>
                                        <div className="progress progress-md">
                                          <div className="progress-bar progress-bar-danger" style={{width: propsData.waterUsageTimer}} />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12">

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

export default DetailDevice;
