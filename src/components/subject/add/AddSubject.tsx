const AddSubject = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Add Subject</h3>
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Student</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="#">Add Subject</a>
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
                      <h5 className="form-title subject-info d-flex justify-content-between mb-4">
                        Subject Information
                      </h5>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="form-label">
                          Subject ID
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject ID"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="form-label">
                          Subject Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject Name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="form-label">
                          Class
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="class"
                        />
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

export default AddSubject;
