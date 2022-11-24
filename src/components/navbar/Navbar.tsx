import "./navbar.css";

import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BellIcon } from "../../assets/icons/BellIcon";
import avatar from "../../assets/profile-pic.png";
import logo from "../../assets/site-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar py-2  fixed-top navbar-light ">
      <div className="container-fluid">
        <div className="nav-left">
          <a href="#" className="navbar-brand">
            <img src={logo} alt="logo" className="site-logo" />
          </a>
        </div>

        <div className="top-nav-search">
          <form className="form">
            <div className="input-group">
              <button
                type="submit"
                className="btn btn-outline-secondary  submit-btn"
                id="button-addon"
              >
                <BellIcon />
              </button>
              <input
                className="form-control shadow-none"
                type="text"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>

        <div className="nav-user-menu">
          <ul className="nav-list d-flex align-items-center my-0">
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
                <span className="user-avatar d-flex align-items-center">
                  <img src={avatar} alt="user avatar" width="30" />
                  <div className="user-info d-flex flex-column align-items-center">
                    <h6>Simon Sanchez</h6>
                    <p className="my0">Administrator</p>
                  </div>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
