import "./navbar.css";

import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between p-2">
      <div className="nav-left">
        <h3>School</h3>
      </div>
      <div className="top-nav-search">
        <form className="form">
          <input className="form-control" type="text" placeholder="Search..." />
        </form>
      </div>
      <div className="nav-user-menu">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faAddressBook} />
            </a>
          </li>
          <li className="list-group-item">
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faAddressBook} />
            </a>
          </li>
          <li className="list-group-item">
            <a href="#">User menu</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
