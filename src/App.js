import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { StatusContext } from "./StatusContext";

import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import DashboardExample from "./page/DashboardExample";
import Login from "./page/Login";
import AddDevice from "./page/AddDevice";
import MyDevices from "./page/MyDevices";
import Register from "./page/Register";
import DetailDevice from "./page/DetailDevice";
import EditDevice from "./page/EditDevice";
import AddReport from "./page/AddReport";
import MyReports from "./page/MyReports";
import ReportDetail from "./page/ReportDetail";
import Setting from "./page/Setting";
import Desktop from "./page/Desktop";
import { Context } from "./store/Context";

function App() {
  const [statusValue, setStatusValue] = useState({
    navDisplay: "block",
  });
  const valueContext = { statusValue, setStatusValue };

  return (
    <StatusContext.Provider value={valueContext}>
      <div className="wrapper">
        <BrowserRouter>
          <div
            className="nav-section"
            style={{ display: statusValue.navDisplay }}
          >
            <Header />
            <Sidebar />
          </div>

          <Routes>
            <Route path="/" element={<DashboardExample />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/AddDevice" element={<AddDevice />} />
            <Route path="/MyDevices" element={<MyDevices />} />
            <Route path="/DetailDevice" element={<DetailDevice />} />
            <Route path="/EditDevice/:uuid" element={<EditDevice />} />
            <Route path="/MakeReport" element={<AddReport />} />
            <Route path="/MyReports" element={<MyReports />} />
            <Route path="/ReportDetail/:uuid" element={<ReportDetail />} />
            <Route path="/EditProfile" element={<Setting />} />
            <Route path="/Context" element={<Context />} />
            <Route path="/HomePage" element={<Desktop />} />
          </Routes>

          <div
            className="nav-section"
            style={{ display: statusValue.navDisplay }}
          >
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </StatusContext.Provider>
  );
}

export default App;
