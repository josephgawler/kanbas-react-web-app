import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
                 </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/linalg.jpg" width={200} />
            <div>
              <h5>
                 MATH2331
                 </h5>
              <p className="wd-dashboard-course-title">
                Linear Algebra
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/hci.jpg" width={200} />
            <div>
              <h5>
                 IS4300
                 </h5>
              <p className="wd-dashboard-course-title">
                Human Computer Interaction
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/web_development.jpg" width={200} />
            <div>
              <h5>
                 CS4550
                 </h5>
              <p className="wd-dashboard-course-title">
                Web Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/dataeng.jpg" width={200} />
            <div>
              <h5>
                 DS4300
                 </h5>
              <p className="wd-dashboard-course-title">
                Data Engineering
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/pnn.jpg" width={200} />
            <div>
              <h5>
                 DS4440
                 </h5>
              <p className="wd-dashboard-course-title">
                Practical Neural Networks
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/biostats.jpg" width={200} />
            <div>
              <h5>
                 ENVR2500
                 </h5>
              <p className="wd-dashboard-course-title">
                Biostatistics
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/calc.jpg" width={200} />
            <div>
              <h5>
                 MATH1342
                 </h5>
              <p className="wd-dashboard-course-title">
                Calculus 1
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/discrete.jpg" width={200} />
            <div>
              <h5>
                 CS1800
                 </h5>
              <p className="wd-dashboard-course-title">
                Discrete Structures
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
