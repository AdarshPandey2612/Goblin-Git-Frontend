import { Link } from "react-router-dom";

function ParentLive() {
  const bus = {
    number: "BUS-05",
    driver: "Rajesh Kumar",
    location: "Sector 12",
    speed: "38 km/h",
    status: "On Route",
    eta: "12 min",
    lastUpdated: "1 minute ago",
  };

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>Live Bus</h1>
          <p>Track your child's school bus in real time.</p>
        </div>

        <Link to="/parent" className="back-button">
          ← Dashboard
        </Link>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Bus</p>
          <h2>{bus.number}</h2>
          <span>Assigned bus</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Status</p>
          <div style={{ margin: "12px 0" }}>
            <span className="status active">{bus.status}</span>
          </div>
          <span>Current status</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Speed</p>
          <h2>{bus.speed}</h2>
          <span>Current speed</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">ETA</p>
          <h2>{bus.eta}</h2>
          <span>Estimated arrival</span>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="map-placeholder">
          <div>
            <h2>Live GPS Location</h2>
            <p>{bus.location}</p>
            <p>Live GPS map will be connected with backend later.</p>
          </div>
        </div>

        <div className="bus-section">

          <h2>Bus Information</h2>

          <div className="bus-card">
            <div>
              <h3>Bus Number</h3>
              <p>{bus.number}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Driver</h3>
              <p>{bus.driver}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Current Location</h3>
              <p>{bus.location}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Last Updated</h3>
              <p>{bus.lastUpdated}</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ParentLive;