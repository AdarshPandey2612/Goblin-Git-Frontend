import { Link } from "react-router-dom";

function ParentAlerts() {
  const alerts = [
    {
      id: "ALT-101",
      type: "Bus Delay",
      message: "BUS-05 is running approximately 5 minutes late.",
      time: "10 min ago",
      severity: "Medium",
    },
    {
      id: "ALT-102",
      type: "Route Update",
      message: "Bus route is operating normally.",
      time: "25 min ago",
      severity: "Low",
    },
    {
      id: "ALT-103",
      type: "Safety Notice",
      message: "No active safety emergency has been reported.",
      time: "Today",
      severity: "Low",
    },
  ];

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>Alerts</h1>
          <p>Transport alerts and notifications related to your child.</p>
        </div>

        <Link to="/parent" className="back-button">
          ← Dashboard
        </Link>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Notifications</p>
          <h2>{alerts.length}</h2>
          <span>Recent alerts</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Bus</p>
          <h2>BUS-05</h2>
          <span>Assigned bus</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Route</p>
          <h2>ROUTE-A</h2>
          <span>Morning School Route</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Emergency</p>
          <h2>0</h2>
          <span>No active emergency</span>
        </div>

      </div>

      <div
        className="alerts-section"
        style={{ marginTop: "25px" }}
      >

        <h2>Recent Notifications</h2>

        {alerts.map((alert) => (
          <div
            className={`alert-card ${
              alert.severity === "Medium"
                ? "warning"
                : "success"
            }`}
            key={alert.id}
          >

            <div>
              <h3>{alert.type}</h3>
              <p>{alert.message}</p>
            </div>

            <span>{alert.time}</span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ParentAlerts;