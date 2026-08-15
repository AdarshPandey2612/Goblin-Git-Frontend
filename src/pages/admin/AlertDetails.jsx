import { useParams, Link } from "react-router-dom";
import { alerts } from "../../data/alerts";

function AlertDetails() {
  const { id } = useParams();

  const alert = alerts.find((item) => item.id === id);

  if (!alert) {
    return (
      <div className="dashboard">
        <h1>Alert Not Found</h1>

        <Link to="/admin/alerts" className="back-button">
          ← Back to Alerts
        </Link>
      </div>
    );
  }

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>{alert.type}</h1>
          <p>Safety alert details.</p>
        </div>

        <Link to="/admin/alerts" className="back-button">
          ← Back to Alerts
        </Link>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Alert ID</p>
          <h2>{alert.id}</h2>
          <span>Alert identifier</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Severity</p>
          <h2>{alert.severity}</h2>
          <span>Alert severity</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Status</p>
          <h2>{alert.status}</h2>
          <span>Current status</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Time</p>
          <h2>{alert.time}</h2>
          <span>Alert time</span>
        </div>

      </div>

      <div className="bus-section">

        <h2>Alert Information</h2>

        <div className="bus-card">
          <div>
            <h3>Bus</h3>
            <p>{alert.bus}</p>
          </div>
        </div>

        <div className="bus-card">
          <div>
            <h3>Driver</h3>
            <p>{alert.driver}</p>
          </div>
        </div>

        <div className="bus-card">
          <div>
            <h3>Location</h3>
            <p>{alert.location}</p>
          </div>
        </div>

        <div className="bus-card">
          <div>
            <h3>Alert Type</h3>
            <p>{alert.type}</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AlertDetails;