import React, { Fragment } from "react";
import InputJob from "./InputJob";


const AddNewJob = () => {
    return (
      <Fragment>
        <div className="d-flex justify-content-end my-4">
          <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#myModal">
            Add a new Job
          </button>
        </div>
              <div class="modal" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">

                    <div class="modal-header">
                      <h4 class="modal-title">Submit a new job opportunity</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                    {<InputJob/>}
                    </div>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                  </div>
                </div>
              </div>
        </Fragment>
    )
}

export default AddNewJob;
