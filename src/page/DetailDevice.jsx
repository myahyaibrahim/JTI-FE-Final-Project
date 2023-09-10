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
                            <div className="col-lg-4 col-md-5 xs-margin-30px-bottom">
                                <div className="team-single-img">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                                </div>
                                <div className="bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center">
                                    <h4 className="margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600">className Teacher</h4>
                                    <p className="sm-width-95 sm-margin-auto">We are proud of child student. We teaching great activities and best program for your kids.</p>
                                    <div className="margin-20px-top team-single-icons">
                                        <ul className="no-margin">
                                            <li><a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-google-plus-g"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
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
                                                        <i className="fas fa-graduation-cap text-orange"></i>
                                                        <strong className="margin-10px-left text-orange">Serial Number:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>{propsData.deviceSerialNumber}</p>
                                                    </div>
                                                </div>

                                            </li>
                                            <li>

                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className="far fa-gem text-yellow"></i>
                                                        <strong className="margin-10px-left text-yellow">Status:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>{propsData.status}</p>
                                                    </div>
                                                </div>

                                            </li>
                                            <li>

                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className="far fa-file text-lightred"></i>
                                                        <strong className="margin-10px-left text-lightred">Courses:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>Design Category</p>
                                                    </div>
                                                </div>

                                            </li>
                                            <li>

                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className="fas fa-map-marker-alt text-green"></i>
                                                        <strong className="margin-10px-left text-green">Address:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>Regina ST, London, SK.</p>
                                                    </div>
                                                </div>

                                            </li>
                                            <li>

                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className="fas fa-mobile-alt text-purple"></i>
                                                        <strong className="margin-10px-left xs-margin-four-left text-purple">Phone:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p>(+44) 123 456 789</p>
                                                    </div>
                                                </div>

                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-5 col-5">
                                                        <i className="fas fa-envelope text-pink"></i>
                                                        <strong className="margin-10px-left xs-margin-four-left text-pink">Email:</strong>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        <p><a href="javascript:void(0)">addyour@emailhere</a></p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <h5 className="font-size24 sm-font-size22 xs-font-size20">Professional Skills</h5>

                                    <div className="sm-no-margin">
                                        <div className="progress-text">
                                            <div className="row">
                                                <div className="col-7">Positive Behaviors</div>
                                                <div className="col-5 text-right">40%</div>
                                            </div>
                                        </div>
                                        <div className="custom-progress progress">
                                            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"  className="animated custom-bar progress-bar slideInLeft bg-sky"></div>
                                        </div>
                                        <div className="progress-text">
                                            <div className="row">
                                                <div className="col-7">Teamworking Abilities</div>
                                                <div className="col-5 text-right">50%</div>
                                            </div>
                                        </div>
                                        <div className="custom-progress progress">
                                            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"  className="animated custom-bar progress-bar slideInLeft bg-orange"></div>
                                        </div>
                                        <div className="progress-text">
                                            <div className="row">
                                                <div className="col-7">Time Management </div>
                                                <div className="col-5 text-right">60%</div>
                                            </div>
                                        </div>
                                        <div className="custom-progress progress">
                                            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"  className="animated custom-bar progress-bar slideInLeft bg-green"></div>
                                        </div>
                                        <div className="progress-text">
                                            <div className="row">
                                                <div className="col-7">Excellent Communication</div>
                                                <div className="col-5 text-right">80%</div>
                                            </div>
                                        </div>
                                        <div className="custom-progress progress">
                                            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"  className="animated custom-bar progress-bar slideInLeft bg-yellow"></div>
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
