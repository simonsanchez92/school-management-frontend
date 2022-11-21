import "./App.css";

// import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
        {/* <Login /> */}
      </header>
    </div>
  );
};

export default App;
