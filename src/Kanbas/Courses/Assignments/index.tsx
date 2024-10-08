import AssignmentsControls from "./AssignmentsControls"; 
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical, BsPencilSquare } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Assignments() {
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
            <li className="wd-lesson list-group-item p-3 ps-1">
            <Link className="text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Assignments/123">
            <BsGripVertical className="me-2 fs-3" /><span className="wd-fg-color-green"><BsPencilSquare className="me-2 fs-3" /></span>
            
              <b>A1</b>
            
                <p className="wd-padded-left fs-6">
                  <span className="wd-fg-color-red"><b>Multiple Modules</b></span> | <b>Not available until</b> May 6 at 12:00am | <LessonControlButtons /><br></br> 
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                </p>
            </Link>
          </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <Link className="text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Assignments/456">
        <BsGripVertical className="me-2 fs-3" /><span className="wd-fg-color-green"><BsPencilSquare className="me-2 fs-3" /></span>
            
              <b>A2</b>
            
                <p className="wd-padded-left fs-6">
                  <span className="wd-fg-color-red"><b>Multiple Modules</b></span> | <b>Not available until</b> May 13 at 12:00am | <LessonControlButtons /><br></br>
                    <b>Due</b> May 20 at 11:59pm | 100 pts
                </p>
          </Link>
          </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
        <Link className="text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Assignments/789">
        <BsGripVertical className="me-2 fs-3" /><span className="wd-fg-color-green"><BsPencilSquare className="me-2 fs-3" /></span>
            
              <b>A3</b>
            
                <p className="wd-padded-left fs-6">
                  <span className="wd-fg-color-red"><b>Multiple Modules</b></span> | <b>Not available until</b> May 20 at 12:00am | <LessonControlButtons /><br></br>
                    <b>Due</b> May 27 at 11:59pm | 100 pts
                </p>
          </Link>
          </li>
      </ul>
    </li>
  </div>  
  );}
  