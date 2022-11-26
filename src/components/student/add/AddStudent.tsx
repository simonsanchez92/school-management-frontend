import React from "react";

const AddStudent = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Add new student</h3>
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Student</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="#">Add Student</a>
          </li>
        </ul>
      </div>
      <div className="page-content">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <form className="w-100">
                  <div className="row">
                    <div className="col-12 ">
                      <h5 className="form-title student-info d-flex justify-content-between mb-4">
                        Student Information
                        <span>
                          <a href="#">dots</a>
                        </span>
                      </h5>
                    </div>

                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="form-label">
                          Surname
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Surname"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label
                          className=" form-label"
                          htmlFor="input-group-select-gender"
                        >
                          Gender
                        </label>
                        <select
                          className="form-select"
                          id="input-group-select-gender"
                        >
                          <option selected>Select Gender</option>
                          <option value="1">Male</option>
                          <option value="2">Female</option>
                          <option value="3">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="form-label">
                          Date of birth
                        </label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="form-label">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="15-xxx-xxx"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label
                          className=" form-label"
                          htmlFor="input-group-select-gender"
                        >
                          Class
                        </label>
                        <select
                          className="form-select"
                          id="input-group-select-gender"
                        >
                          <option selected>Select Class</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label
                          className=" form-label"
                          htmlFor="input-group-select-class"
                        >
                          Division
                        </label>
                        <select
                          className="form-select"
                          id="input-group-select-division"
                        >
                          <option selected>Select Division</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-sm-4 my-4">
                      <div className="form-group d-flex flex-column align-items-start">
                        {/* <label htmlFor="" className="form-label">
                          Upload student photo
                        </label> */}
                        <div className="upload-photo-container">
                          <input
                            type="file"
                            name="student-photo"
                            id="student-photo-input"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12 my-5">
                      <div className="student-submit d-flex justify-start">
                        <button className="btn btn-primary">Register</button>
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

export default AddStudent;
