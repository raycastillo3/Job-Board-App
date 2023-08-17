import React, { Fragment, useState}  from 'react';

const EditJob = ({ job }) => {
    const [c_name, setCompanyName] = useState(job.c_name);
    const [j_title, setJobTitle] = useState(job.j_title);
    // const [j_source, setJobSource] = useState(job.j_source);

    const updateCompanyName = async (e) => {
        e.preventDefault();
        try {
            const body = { c_name }
            const response = await fetch(`http://localhost:5000/jobs/${job.j_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/login"
        } catch (err) {
            console.error(err.message)
        }
    }
    const updateJobTitle = async (e) => {
        e.preventDefault();
        try {
            const body = { j_title }
            const response = await fetch(`http://localhost:5000/jobs/${job.j_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/login"
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
        <button type="button" className="btn btn-outline-dark" data-toggle="modal" data-target={`#${job.j_id}`}>
          Edit
            </button>
            <div className="modal" id={`${job.j_id}`}>
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">Edit Job</h4>
                    <button type="button" className="close" data-dismiss="modal" onClick={() =>
                        setCompanyName(job.c_name) ||
                        setJobTitle(job.j_title)}
                        >&times;</button>
              </div>
                    <div className="modal-body d-flex flex-column">
                        <div>
                            <label>Company</label>
                            <input type='text' className='form-control' value={c_name} onChange={e => setCompanyName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Job Title</label>
                            <input type='text' className='form-control' value={j_title} onChange={e => setJobTitle(e.target.value)}/>
                        </div>
                    {    /*   <div>
                            <label>Source</label>
                            <input type='text' className='form-control' value={j_source} onChange={e => setJobSource(e.value.target)}/>
                        </div> */}

              </div>
              <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary" onClick={e =>
                                updateCompanyName(e) &&
                                updateJobTitle(e)}
                            >Edit</button>
                            <button type="button" className="btn btn-outline-primary" data-dismiss="modal"
                                onClick={() =>
                                    setCompanyName(job.c_name) || setJobTitle(job.j_title)}>Close</button>
              </div>
            </div>
          </div>
        </div>
        </Fragment>
    )
}

export default EditJob;
