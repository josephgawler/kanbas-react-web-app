import { BsCalendar3 } from "react-icons/bs";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <div className="mb-3 row col-sm-12 wd-padded-left-form wd-margin-all-around">
            <label htmlFor="assignmentname"
                className="col-sm-10 col-form-label">
            Assignment Name </label> <br></br>
            
            <input type="text" id="assignmentname"
                    className="form-control" />


            </div>
          <div className="mb-3 row col-sm-12 wd-padded-left-form wd-margin-all-around">
          
            <label htmlFor="description"
                className="col-sm-10 col-form-label">
            Description </label>
            <div className="col-sm-12">
            <textarea className="form-control"
                id="description" rows={3}> 
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: your full name and section links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
                </textarea>
            </div>

        
          </div>

        <div className="mb-3 row col-sm-10 float-end wd-margin-all-around">
            <label htmlFor="points"
                className="col-form-label col-sm-2">
            Points </label> 
            <div className="col-sm-10 float-end">
            <input type="text" id="points"
                    className="form-control col-sm-10 float-end" />

            </div>
        </div>

        <div className="mb-3 row col-sm-10 float-end wd-margin-all-around">
            <label htmlFor="assignmentgroup"
                className="col-form-label col-sm-2">
            Assignment Group </label> 
            <div className="col-sm-10 float-end">
              <select className="form-select">
                <option selected>ASSIGNMENTS</option>
                <option value="1">QUIZZES</option>
                <option value="2">EXAMS</option>
                <option value="3">PROJECTS</option>
              </select>
            </div>
        </div>

        <div className="mb-3 row col-sm-10 float-end wd-margin-all-around">
            <label htmlFor="displaygrade"
                className="col-form-label col-sm-2">
            Display Grade as </label> 
            <div className="col-sm-10 float-end">
              <select className="form-select">
                <option selected>Percentage</option>
              </select>
            </div>
        </div>

      
        <div className="mb-3 row col-sm-10 float-end wd-border-very-thin wd-border-black wd-border-solid 
              wd-padding-fat">
        <h3><b>Submission</b></h3>
        <div className="mb-3 row col-sm-10 float-end wd-margin-all-around">
            <label htmlFor="submissiontype"
                className="col-form-label col-sm-2">
            Submission Type </label> 
            <div className="col-sm-10 float-end">
              <select className="form-select">
                <option selected>Online</option>
              </select>
            </div>
        </div>

          <label htmlFor="r6"
                className="col-sm-10 col-form-label">
            Online Entry Options </label>
            <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" 
                        id="r6" />
                <label className="form-check-label" htmlFor="r6">
                    Text Entry </label> </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" 
                        id="r6" />
                <label className="form-check-label" htmlFor="r6">
                    Website URL </label> </div> 
                <div className="form-check">
                <input className="form-check-input" type="checkbox" 
                        id="r6" />
                <label className="form-check-label" htmlFor="r6">
                    Media Recordings </label> </div> 
                <div className="form-check">
                <input className="form-check-input" type="checkbox" 
                        id="r6" />
                <label className="form-check-label" htmlFor="r6">
                    Student Annotations </label> </div> 
                <div className="form-check">
                <input className="form-check-input" type="checkbox" 
                        id="r6" />
                <label className="form-check-label" htmlFor="r6">
                    File Uploads </label> </div> 
                    
                    </div>
          </div>


        <div className="mb-3 row col-sm-10 float-end wd-border-very-thin wd-border-black wd-border-solid 
              wd-padding-fat">
          <h3><b>Assign</b></h3>
          <div className="mb-3 row col-sm-10 float-end wd-margin-all-around">
              <label htmlFor="assign"
                  className="col-form-label col-sm-2">
              Assign to </label> 
              <div className="col-sm-10 float-end">
                <select className="form-select">
                  <option selected>Everyone</option>
                </select>
              </div>
          </div>

          <div className="mb-3 row col-sm-10 float-end wd-margin-all-around">
          <label htmlFor="r7"
                className="col-sm-2 col-form-label">
            Due </label>
            <div className="col-sm-10 float-end">
              <div className="input-group">
              <input type="text" className="form-control" id="r7"/>
              <span className="input-group-text"><BsCalendar3 /></span>
              </div>
            </div>
                    
          </div>

          <div className="mb-3 row col-sm-10 float-end wd-margin-all-around">
          <label htmlFor="r8"
                className="col-sm-2 col-form-label">
            Available From </label>
            <div className="col-sm-10 float-end">
              <div className="input-group">
              <input type="text" className="form-control" id="r8"/>
              <span className="input-group-text"><BsCalendar3 /></span>
              
              </div>
            </div>
                    
          </div>

          <div className="mb-3 row col-sm-10 float-end wd-margin-all-around">
          <label htmlFor="r9"
                className="col-sm-2 col-form-label">
            Until </label>
            <div className="col-sm-10 float-end">
              <div className="input-group">
              <input type="text" className="form-control" id="r9"/>
              <span className="input-group-text"><BsCalendar3 /></span>
              
              </div>
            </div>
                    
          </div>

        </div>
        
        <div className="mb-3 row col-sm-10 d-flex justify-content-end wd-margin-all-around float-end">
          

            <button id="wd-cancel" className="btn btn-lg btn-secondary me-1 col-sm-2">
            Cancel</button>
            <button id="wd-save" className="btn btn-lg btn-danger me-1 col-sm-2">
            Save</button>
          

        </div>

      </div>
);}
