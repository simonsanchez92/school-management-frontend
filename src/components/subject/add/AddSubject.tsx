import { useState, ChangeEvent } from "react";

type subject = {
  id: string;
  name: string;
  schoolYear: number;
};

const AddSubject = (): JSX.Element => {
  const [id, setId] = useState<string>("");
  const [subjectName, setSubjectName] = useState<string>("");
  const [schoolYear, setSchoolYear] = useState(1);

  const handleId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleSubjectName = (e: ChangeEvent<HTMLInputElement>) => {
    setSubjectName(e.target.value);
  };
  const handleSchoolYear = (e: ChangeEvent<HTMLInputElement>) => {
    setSchoolYear(+e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ id, subjectName, schoolYear });
  };
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
                <form className="w-100" onSubmit={(e) => handleSubmit(e)}>
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
                          value={id}
                          onChange={(e) => handleId(e)}
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
                          value={subjectName}
                          onChange={(e) => handleSubjectName(e)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 my-2">
                      <div className="form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="form-label">
                          School Year
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="School Year"
                          min="1"
                          max="5"
                          value={schoolYear}
                          onChange={(e) => handleSchoolYear(e)}
                        />
                      </div>
                    </div>
                    <div className="col-12 my-5">
                      <div className="student-submit d-flex justify-start">
                        <button className="btn btn-primary px-5">Submit</button>
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
