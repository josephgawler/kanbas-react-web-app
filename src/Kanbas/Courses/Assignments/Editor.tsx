export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <div className="mb-3 row col-sm-10 wd-padded-left-form">
            <label htmlFor="assignmentname"
                className="col-sm-10 col-form-label">
            Assignment Name </label> <br></br>
            
            <input type="text" id="assignmentname"
                    className="form-control" />


            </div>
          <div className="mb-3 row col-sm-10 wd-padded-left-form">
          
            <label htmlFor="description"
                className="col-sm-10 col-form-label">
            Description </label>
            <div className="col-sm-10">
            <textarea className="form-control"
                id="description" rows={3}></textarea>
            </div>
        
          </div>
          
        <h3>
        <label htmlFor="wd-name">Assignment Name</label><br></br>
        </h3>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: your full name and section links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
            <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br></br>
        <tr>
            <td align="right" valign="top">

            <label htmlFor="wd-group">Assignment Group </label>
            </td>
            <select id="wd-group" ><br></br>
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
            </select>
            <br></br>
        </tr>
        <br></br>
        <tr>
            <td align="right" valign="top">

            <label htmlFor="wd-display-grade-as">Display Grade as </label>
            </td>
            <select id="wd-display-grade-as"><br></br>
                <option selected value="Percentage">Percentage</option>
            </select>

        </tr>
        <br></br>
        <tr>
            <td align="right" valign="top">

            <label htmlFor="wd-submission-type">Submission Type </label>
            </td>
            <select id="wd-display-grade-as"><br></br>
                <option selected value="Online">Online</option>
            </select>

        </tr>
        
       
        
        <tr>
        <td align="left" valign="top">
        <p>Online Entry Options</p>
        </td>
        </tr>
        <tr>
            <td align="left" valign="top">
        <input type="checkbox" name="check-entry" id="wd-text-entry"/>
        <label htmlFor="wd-text-entry">Text Entry</label><br/>

        <input type="checkbox" name="check-entry" id="wd-website-url"/>
        <label htmlFor="wd-website-url">Website URL</label><br/>
      
        <input type="checkbox" name="check-entry" id="wd-media-recordings"/>
        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
   
        <input type="checkbox" name="check-entry" id="wd-student-annotation"/>
        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
        
        <input type="checkbox" name="check-entry" id="wd-file-upload"/>
        <label htmlFor="wd-file-upload">File Uploads</label><br/>
        </td>
        </tr>

        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
            <br></br>
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>

        <tr>
            <td align="left" valign="top">
            <label htmlFor="wd-due-date"> Due </label>
            <br></br>
            <input type="date"
                id="wd-due-date"
                value="2024-05-13"/><br/>
            </td>
        </tr>

        <tr>
            <td align="left" valign="top">
            <label htmlFor="wd-available-from"> Available from </label>
            <br></br>
            <input type="date"
                id="wd-available-from"
                value="2024-05-06"/><br/>

            </td>

            <td align="left" valign="top">
            <label htmlFor="wd-available-until"> Until </label>
            <br></br>
            <input type="date"
                id="wd-available-until"
                value="2024-05-20"/><br/>

            </td>
        </tr>

        



        {/* Complete on your own */}
      </table>
    </div>
);}
