import { Link } from "react-router-dom";

function ParentDashboard() {
  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>Parent Dashboard</h1>
          <p>Monitor your child's school transportation.</p>
        </div>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Child</p>
          <h2>Aarav Sharma</h2>
          <span>Class 8-A</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Bus</p>
          <h2>BUS-05</h2>
          <span>Rajesh Kumar</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Bus Status</p>
          <h2>On Route</h2>
          <span>Currently operating</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">ETA</p>
          <h2>12 min</h2>
          <span>Estimated arrival</span>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="bus-section">

          <h2>Quick Access</h2>

          <div className="bus-card">
            <h3>Live Bus</h3>
            <p>Track your child's bus.</p>

            <Link to="/parent/live" className="view-button">
              Track Bus
            </Link>
          </div>

          <div className="bus-card">
            <h3>My Child</h3>
            <p>View student information.</p>

            <Link to="/parent/child" className="view-button">
              View Child
            </Link>
          </div>

          <div className="bus-card">
            <h3>Alerts</h3>
            <p>Check recent transport alerts.</p>

            <Link to="/parent/alerts" className="view-button">
              View Alerts
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ParentDashboard;