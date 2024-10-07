// import { useState } from "react";

function Table(){

    return(
        <div className="Table">
            <table id="data">
            <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Due Date</th>
                  <th>Submitted</th>
                  <th>Status</th>
                  <th>Resume</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* {logs.map((log, i) => (
                  <tr key={i}>
                    <td>{log.workout}</td>
                    <td>{log.date}</td>
                    <td>{log.stime}</td>
                    <td>{log.etime}</td>
                    <td>{log.time}</td>
                    <td><button>Save</button></td>
                    <td><button>Delete</button></td>
                  </tr>
                ))} */}
              </tbody>
            </table>
        </div>
    )

}

export default Table;