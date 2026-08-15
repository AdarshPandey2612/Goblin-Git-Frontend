import { Link } from "react-router-dom";

function ParentChild() {
  const child = {
    name: "Aarav Sharma",
    className: "Class 8",
    section: "A",
    rollNumber: "24",
    bus: "BUS-05",
    route: "Morning School Route",
    pickup: "Sector 12",
    boardingStatus: "Boarded",
  };

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>My Child</h1>
          <p>View your child's transport and boarding information.</p>
        </div>

        <Link to="/parent" className="back-button">
          ← Dashboard
        </Link>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Student</p>
          <h2>{child.name}</h2>
          <span>{child.className} - {child.section}</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Bus</p>
          <h2>{child.bus}</h2>
          <span>Assigned school bus</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Boarding</p>

          <div style={{ margin: "12px 0" }}>
            <span className="status active">
              {child.boardingStatus}
            </span>
          </div>

          <span>Today's boarding status</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Pickup Stop</p>
          <h2>{child.pickup}</h2>
          <span>Assigned pickup location</span>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="map-placeholder">
          <div>
            <h2>Child Transport</h2>
            <p>{child.bus}</p>
            <p>
              Live bus tracking is available from the Live Bus section.
            </p>
          </div>
        </div>

        <div className="bus-section">

          <h2>Student Information</h2>

          <div className="bus-card">
            <div>
              <h3>Name</h3>
              <p>{child.name}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Class</h3>
              <p>{child.className} - Section {child.section}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Roll Number</h3>
              <p>{child.rollNumber}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Assigned Bus</h3>
              <p>{child.bus}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Route</h3>
              <p>{child.route}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Pickup Stop</h3>
              <p>{child.pickup}</p>
            </div>
          </div>

        </div>

      </div>

      <div
        className="bus-section"
        style={{ marginTop: "25px" }}
      >
        <h2>Quick Actions</h2>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/parent/live"
            className="primary-button"
          >
            Track Live Bus
          </Link>

          <Link
            to="/parent/route"
            className="view-button"
          >
            View Route
          </Link>

          <Link
            to="/parent/alerts"
            className="view-button"
          >
            View Alerts
          </Link>
        </div>
      </div>

    </div>
  );
}

export default ParentChild;