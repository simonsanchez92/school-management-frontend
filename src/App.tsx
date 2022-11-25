import "./App.css";

// import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import Card from "./components/card/Card";
import AddStudent from "./components/student/add/AddStudent";

const App = () => {
  return (
    <div className="App">
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

            <AddStudent />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
