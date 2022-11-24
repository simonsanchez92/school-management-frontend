import "./App.css";

// import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import Card from "./components/card/Card";
const App = () => {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <div className="row">
        <Sidebar />
        <main className="page-wrapper col-10">
          <div className="page-inner">
            <div className="page-header">
              <h3 className="page-title">Welcome Admin!</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="#">Admin</a>
                </li>
              </ul>
            </div>
            <div className="page-content">
              <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
