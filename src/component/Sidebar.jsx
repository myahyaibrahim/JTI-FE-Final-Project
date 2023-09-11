import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const username = localStorage.getItem("username");

  useEffect(() => {}, [username]);

  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Water Monitoring</span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                {username}
              </a>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </NavLink>
              </li>
              <li className="nav-header">DEVICES</li>
              <li className="nav-item">
                <NavLink to="/AddDevice" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>Add Device</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/MyDevices" className="nav-link">
                  <i className="nav-icon fa fa-list" />
                  <p>My Devices</p>
                </NavLink>
              </li>

              <li className="nav-header">REPORT</li>
              <li className="nav-item">
                <NavLink to="/MakeReport" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>Make a New Report</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/MyReports" className="nav-link">
                  <i className="nav-icon fa fa-list" />
                  <p>My Reports</p>
                </NavLink>
              </li>

              <li className="nav-header">SETTINGS</li>
              <li className="nav-item">
                <NavLink to="/EditProfile" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>Edit Profile</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
