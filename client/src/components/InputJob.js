import React, {Fragment, useState} from "react";


const InputJob = () => {
    const [c_name, setCompanyName] = useState("");
    const [j_title, setJobTitle] = useState("");
    const [j_link, setJobLink] = useState("");
    const [j_source, setJobSource] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { c_name, j_title, j_link, j_source };
            if (!c_name || !j_title || !j_link || !j_source) {
                return;
            }
            const response = await fetch("http://localhost:5000/jobs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/login";

        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <form onSubmit={onSubmitForm}>
                <div>
                    <label htmlFor="CompanyName">Company Name</label>
                    <input type="text" className="form-control" value={c_name} onChange={e => setCompanyName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="JobTitle">Job Title</label>
                    <input type="text" className="form-control" value={j_title} onChange={e => setJobTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="JobLink">Job Link</label>
                    <input type="text" className="form-control" value={j_link} onChange={e => setJobLink(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="JobSource">Source</label>
                    <input type="text" className="form-control" value={j_source} onChange={e => setJobSource(e.target.value)} />
                </div>
                <button className="btn btn-primary mt-2">Add</button>
            </form>
        </Fragment>

    )
}

export default InputJob;
