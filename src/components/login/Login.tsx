import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSymbol } from "@fortawesome/fontawesome-svg-core";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  return (
    <div className="container-fluid border border-warning d-flex flex-column justify-content-center align-items-center">
      <form className="rounded">
        <h2>Log in</h2>
        <div className="login-form-inner">
          <div className="mb-3 d-flex flex-column align-items-start">
            <label htmlFor="login-email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-email form-control mb-3"
              id="login-email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3 d-flex flex-column align-items-start">
            <label htmlFor="login-password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="login-password"
              placeholder="your password..."
            />
          </div>

          {/* <div className="d-flex">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="remember-me"
              />
              <label className="form-check-label" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <a href="#">Forgot password?</a>
          </div> */}
          <FontAwesomeIcon icon={faAddressBook} />
          <input
            type="submit"
            className="form-password btn btn-primary w-100 my-3"
            id="login-password"
            value="Log in"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
