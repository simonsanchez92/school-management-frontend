import { FormEvent, ChangeEvent, useState, useEffect } from "react";

import axios from "axios";

enum Roles {
  Admin = 1,
  Teacher = 2,
  Student = 3,
}

const AddUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(1);

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleChangeRole = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value != "Select Role") {
      setRole(+e.target.value);
    }
    // console.log(e.target.value);
    // console.log(Roles[+role]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
      role_id: role,
    };
    console.log(newUser);
    try {
      const postUser = await axios.post(
        "http://localhost:4000/api/v1/users/register",
        newUser
      );
      console.log(postUser.data);
    } catch (err) {
      //   console.log(err?.response?.data);
    }
  };

  //   useEffect(() => {
  //     (async () => {
  //       const res = await axios.get("http://localhost:4000/api/v1/users");
  //       console.log(res);
  //     })();
  //   }, []);

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Create New User</h3>
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Users</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="#">Add User</a>
          </li>
        </ul>
      </div>
      <div className="page-content">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <form className="w-100" onSubmit={(e) => handleSubmit(e)}>
                  <div className="row">
                    <div className="col-12 ">
                      <h5 className="form-title student-info d-flex justify-content-between mb-4">
                        User Data
                        <span>
                          <a href="#">dots</a>
                        </span>
                      </h5>
                    </div>

                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label htmlFor="email-input" className="form-label">
                          Email
                        </label>
                        <input
                          value={email}
                          onChange={(e) => handleChangeEmail(e)}
                          id="email-input"
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label htmlFor="password-input" className="form-label">
                          Password
                        </label>
                        <input
                          value={password}
                          onChange={(e) => handleChangePassword(e)}
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label
                          className=" form-label"
                          htmlFor="input-group-select-gender"
                        >
                          User Role
                        </label>
                        <select
                          className="form-select"
                          id="input-group-select-gender"
                          value={role}
                          onChange={(e) => handleChangeRole(e)}
                        >
                          <option value="1">Admin</option>
                          <option value="2">Teacher</option>
                          <option value="3">Student</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 my-5">
                      <div className="student-submit d-flex justify-start">
                        <button className="btn btn-primary">Create User</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
