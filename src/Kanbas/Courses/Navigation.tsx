import { Link, useParams, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  const location = useLocation();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        // Create the link path dynamically
        const linkPath = `/Kanbas/Courses/${cid}/${link}`;
        
        // Check if the current pathname matches this link to set the 'active' class
        const isActive = location.pathname.includes(link);

        return (
          <Link
            key={link}
            to={linkPath}
            className={`list-group-item border border-0 ${isActive ? 'active' : 'text-danger'}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
);}
