import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import DashboardExample from "./page/DashboardExample";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <div className="nav-section">
          <Header />
          <Sidebar />
        </div>

        <Routes>
          <Route path="/" element={<DashboardExample />} />
        </Routes>

        <div className="nav-section">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
