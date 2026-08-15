import { Link } from "react-router-dom";

function ParentDashboard() {
  const child = {
    name: "Aarav Sharma",
    className: "Class 6-A",
    bus: "BUS-05",
    route: "Morning School Route",
    status: "On the way",
    location: "Sector 12",
    nextStop: "Main Market",
    eta: "12 minutes",
  };

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>Parent Dashboard</h1>
          <p>Track your child's school transport.</p>
        </div>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Child</p>
          <h2>{child.name}</h2>
          <span>{child.className}</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Bus</p>
          <h2>{child.bus}</h2>
          <span>Assigned school bus</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Status</p>
          <h2>{child.status}</h2>
          <span>Current journey</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">ETA</p>
          <h2>{child.eta}</h2>
          <span>Estimated arrival</span>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="map-placeholder">
          <div>
            <h2>Live Bus Location</h2>
            <p>{child.location}</p>
            <p>Live GPS tracking will appear here.</p>
          </div>
        </div>

        <div className="bus-section">

          <h2>My Child</h2>

          <div className="bus-card">
            <div>
              <h3>Name</h3>
              <p>{child.name}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Bus</h3>
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
              <h3>Next Stop</h3>
              <p>{child.nextStop}</p>
            </div>
          </div>

          <Link
            to="/parent/live"
            className="primary-button"
          >
            Track Live Bus
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ParentDashboard;