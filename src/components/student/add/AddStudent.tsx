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

                    <div className="col-12 col-sm-4">
                      <div className="form-group">
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
                    <div className="col-12 col-sm-4">
                      <div className="form-group">
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
                    <div className="col-12 col-sm-4">
                      <div className="form-group">
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
                    <div className="col-12 col-sm-4">
                      <div className="form-group">
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
                    <div className="col-12 col-sm-4">
                      <div className="form-group">
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
                    <div className="col-12 col-sm-4">
                      <div className="form-group">
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

                    <div className="col-12">
                      <div className="student-submit">
                        <button className="btn btn-primary">Submit</button>
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
