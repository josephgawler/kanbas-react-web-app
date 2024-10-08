import AssignmentsControls from "./AssignmentsControls"; 
export default function Assignments() {
    return (
      <div id="wd-assignments">

        <AssignmentsControls /><br /><br /><br /><br />
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list" className="list-group rounded-0">
          <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
                <p>
                    Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <br></br>
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                </p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/456">
              A2 - CSS + BOOTSTRAP
            </a>
                <p>
                    Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <br></br>
                    <b>Due</b> May 20 at 11:59pm | 100 pts
                </p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/789">
              A3 - JAVASCRIPT + REACT
            </a>
                <p>
                    Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <br></br>
                    <b>Due</b> May 27 at 11:59pm | 100 pts
                </p>
          </li>
        </ul>
      </div>
  );}
  