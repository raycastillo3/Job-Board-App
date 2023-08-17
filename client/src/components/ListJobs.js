import React, {Fragment, useEffect, useState} from "react";
import EditJob from "./EditJob";


const ListJobs = () => {
    const [jobs, setJobs] = useState([]);

    const getJobs = async () => {
        try {
            const response = await fetch("http://localhost:5000/jobs");
            const jsonData = await response.json()

           setJobs(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getJobs();
    }, []);

    const deleteJob = async (id) => {
        try {
            const deleteJob = await fetch(`http://localhost:5000/jobs/${id}`, {
                method: "DELETE"
            });
            setJobs(jobs.filter(job => job.j_id !== id));
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            {/* <th> Link </th> */}
            {/* <th>Source </th> */}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
                <tbody>
                    {jobs.map((job) => (
                        <tr key={job.j_id}>
                            <td>{job.c_name}</td>
                            <td>{job.j_title}</td>
                           {/*  <td>{job.j_link}</td> */}
                           {/*  <td>{job.j_source}</td> */}
                            <td> <EditJob job={job} /> </td>
                            <td><button className="btn btn-outline-dark" onClick={() => deleteJob(job.j_id)}>Delete</button></td>
                        </tr>
                    ))}
        </tbody>
      </table>
        </Fragment>
    )
}

export default ListJobs;
