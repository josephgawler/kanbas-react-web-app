import AssignmentsControls from "./AssignmentsControls"; 
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical, BsPencilSquare } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import * as db from "../../Database";
export default function Assignments() {
    const courses = db.courses;
    const assignments = db.assignments;
    return (
      <div id="wd-assignments">
        <AssignmentsControls /><br /><br /><br /><br />
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
              <div className="float-end fs-5">
                40% of Total 
                <BsPlus />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>

            <ul className="wd-lessons list-group rounded-0">
              {assignments.map((assignment) => (
                <li className="wd-lesson list-group-item p-3 ps-1" key={assignment._id}>
                  <Link className="text-decoration-none text-dark"
                    to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                    <BsGripVertical className="me-2 fs-3" />
                    <span className="wd-fg-color-green">
                      <BsPencilSquare className="me-2 fs-3" />
                    </span>
                    <b>{assignment.title}</b>
                    <p className="wd-padded-left fs-6">
                      <span className="wd-fg-color-red"><b>Course:</b> {assignment.course}</span>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
        </li>
      </div>  
    );
}
  