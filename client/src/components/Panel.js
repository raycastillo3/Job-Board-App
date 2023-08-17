import React from "react";

const Panel = ({name}) => {
    return (
        <div className="container">
            <h2 className="mt-5"> WELCOME, {name.toUpperCase()}!</h2>
            <div className="d-flex justify-content-around mb-5 mt-5">
                <div >
                    <button type="button" className="btn btn-primary">Job Board</button>
                </div>
                <div >
                    <button type="button" className="btn btn-primary">Interviews</button>
                </div>
                <div >
                    <button type="button" className="btn btn-primary">Calendar</button>
                </div>
                <div >
                    <button type="button" className="btn btn-primary">Resources</button>
                </div>
            </div>
        </div>
    )
}

export default Panel;
