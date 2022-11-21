import "./navbar.css";

import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BellIcon } from "../../assets/icons/BellIcon";
import avatar from "../../assets/profile-pic.png";
import logo from "../../assets/site-logo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <a href="#" className="nav-logo">
          <img src={logo} alt="logo" className="site-logo" />
        </a>
      </div>

      <div className="top-nav-search">
        <form className="form">
          <input className="form-control" type="text" placeholder="Search..." />
          <button type="submit">
            <BellIcon />
          </button>
        </form>
      </div>

      <div className="nav-user-menu">
        <ul className="nav-list">
          <li className="">
            <a href="#" className="header-nav-list-item">
              <BellIcon />
            </a>
          </li>
          <li className="l">
            <a href="#" className="header-nav-list-item">
              <BellIcon />
            </a>
          </li>
          <li className="l">
            <a href="#" className="header-nav-list-item">
              <BellIcon />
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span className="user-avatar">
                <img src={avatar} alt="user avatar" width="30" />
                <div className="user-info">
                  <h6>Simon Sanchez</h6>
                  <p>Administrator</p>
                </div>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
