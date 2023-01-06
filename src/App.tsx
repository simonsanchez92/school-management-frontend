import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import Card from "./components/card/Card";
import AddStudent from "./components/student/add/AddStudent";
import AddSubject from "./components/subject/add/AddSubject";
import AddUser from "./components/users/AddUser";

const App = () => {
  return (
    <div className="App">
      <div>
        <header className="header">
          <Navbar />
        </header>

        <div className="main-wrapper">
          <Sidebar />
          <main className="page-wrapper">
            <div className="page-inner">
              {/* <div className="row">
                <div className="col-xl-3 col-sm-6 col-12 d-flex">
                  <Card />
                </div>
                <div className="col-xl-3 col-sm-6 col-12 d-flex">
                  <Card />
                </div>
                <div className="col-xl-3 col-sm-6 col-12 d-flex">
                  <Card />
                </div>
                <div className="col-xl-3 col-sm-6 col-12 d-flex">
                  <Card />
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-sm-6 col-12 d-flex">
                  <Card />
                </div>
                <div className="col-xl-3 col-sm-6 col-12 d-flex">
                  <Card />
                </div>
                <div className="col-xl-3 col-sm-6 col-12 d-flex">
                  <Card />
                </div>
                <div className="col-xl-3 col-sm-6 col-12 d-flex">
                  <Card />
                </div>
              </div> */}

              <BrowserRouter>
                <Routes>
                  <Route path="/la" element={<h2>lala</h2>} />
                  <Route path={"/subjects/add"} element={<AddSubject />} />
                  <Route path={"/users/add"} element={<AddUser />} />
                  <Route path={"/students/add"} element={<AddStudent />} />
                </Routes>
              </BrowserRouter>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
