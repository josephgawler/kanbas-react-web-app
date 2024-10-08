import { FaAlignJustify } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <FaMagnifyingGlass className="float-start"/><input className="wd-search float-start" placeholder="Search..." />
        
      <button id="wd-add-assignments-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
    
      <button id="wd-group" className="btn btn-lg btn-secondary float-end">
      <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>
      
    </div>
);}
