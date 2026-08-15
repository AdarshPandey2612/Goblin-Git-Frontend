import { buses } from "../../data/buses";
import { routes } from "../../data/routes";
import { alerts } from "../../data/alerts";

function AdminDashboard() {
  const totalBuses = buses.length;

  const activeBuses = buses.filter(
    (bus) => bus.status === "Active"
  ).length;

  const drivers = new Set(
    buses.map((bus) => bus.driver)
  ).size;

  const activeAlerts = alerts.filter(
    (alert) => alert.status === "Active"
  ).length;

  const recentAlerts = alerts.slice(0, 3);

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Monitor school transport operations.</p>
        </div>
      </div>

      {/* Statistics */}

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Total Buses</p>
          <h2>{totalBuses}</h2>
          <span>Registered buses</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Active Buses</p>
          <h2>{activeBuses}</h2>
          <span>Currently operating</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Drivers</p>
          <h2>{drivers}</h2>
          <span>Assigned drivers</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Active Alerts</p>
          <h2>{activeAlerts}</h2>
          <span>Require attention</span>
        </div>

      </div>

      {/* Main dashboard */}

      <div className="dashboard-grid">

        {/* Live Map */}

        <div className="map-placeholder">

          <div>
            <h2>Live Transport Map</h2>

            <p>
              Live GPS tracking will appear here.
            </p>

            <p>
              {activeBuses} buses currently active.
            </p>
          </div>

        </div>

        {/* Bus Status */}

        <div className="bus-section">

          <h2>Bus Status</h2>

          {buses.map((bus) => (

            <div className="bus-card" key={bus.id}>

              <div>
                <h3>{bus.id}</h3>

                <p>
                  Driver: {bus.driver}
                </p>

                <p>
                  Location: {bus.location}
                </p>
              </div>

              <span
                className={`status ${bus.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {bus.status}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Recent Alerts */}

      <div className="bus-section">

        <div className="page-heading">
          <div>
            <h2>Recent Alerts</h2>
            <p>Latest transport safety events.</p>
          </div>
        </div>

        {recentAlerts.map((alert) => (

          <div
            className="bus-card"
            key={alert.id}
          >

            <div>

              <h3>
                {alert.type}
              </h3>

              <p>
                {alert.bus} — {alert.location}
              </p>

              <p>
                Driver: {alert.driver}
              </p>

            </div>

            <div>

              <span
                className={`badge ${alert.severity.toLowerCase()}`}
              >
                {alert.severity}
              </span>

              <p>
                {alert.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminDashboard;