import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{width: "300px"}}>
            <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/reactjs.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1234 React JS
                  </h5>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/linalg.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  MATH2331
                  </h5>
                <p className="wd-dashboard-course-title card-text">
                  Linear Algebra
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link> 
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/hci.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  IS4300
                  </h5>
                <p className="wd-dashboard-course-title card-text">
                  Human Computer Interaction
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/web_development.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS4550
                  </h5>
                <p className="wd-dashboard-course-title card-text">
                  Web Development
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/dataeng.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  DS4300
                  </h5>
                <p className="wd-dashboard-course-title card-text">
                  Data Engineering
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/pnn.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  DS4440
                  </h5>
                <p className="wd-dashboard-course-title card-text">
                  Practical Neural Networks
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/biostats.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  ENVR2500
                  </h5>
                <p className="wd-dashboard-course-title card-text">
                  Biostatistics
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/calc.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  MATH1342
                  </h5>
                <p className="wd-dashboard-course-title card-text">
                  Calculus 1
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/discrete.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1800
                  </h5>
                <p className="wd-dashboard-course-title card-text">
                  Discrete Structures
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
