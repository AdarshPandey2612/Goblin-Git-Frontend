import { Link } from "react-router-dom";

function ParentRoute() {
  const stops = [
    { name: "Sector 12", time: "07:15 AM", status: "Passed" },
    { name: "City Center", time: "07:25 AM", status: "Current" },
    { name: "School Road", time: "07:35 AM", status: "Upcoming" },
    { name: "Main Gate", time: "07:40 AM", status: "Upcoming" },
    { name: "School Campus", time: "07:45 AM", status: "Destination" },
  ];

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>My Route</h1>
          <p>View your child's assigned school bus route.</p>
        </div>

        <Link to="/parent" className="back-button">
          ← Dashboard
        </Link>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Route</p>
          <h2>ROUTE-A</h2>
          <span>Morning School Route</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Bus</p>
          <h2>BUS-05</h2>
          <span>Assigned bus</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Stops</p>
          <h2>5</h2>
          <span>Scheduled stops</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Destination</p>
          <h2>School</h2>
          <span>School Campus</span>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="map-placeholder">
          <div>
            <h2>Route Map</h2>
            <p>Sector 12 → School Campus</p>
            <p>Interactive map will be connected later.</p>
          </div>
        </div>

        <div className="bus-section">

          <h2>Route Information</h2>

          <div className="bus-card">
            <div>
              <h3>Route Name</h3>
              <p>Morning School Route</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Bus</h3>
              <p>BUS-05</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Pickup</h3>
              <p>Sector 12</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Destination</h3>
              <p>School Campus</p>
            </div>
          </div>

        </div>

      </div>

      <div
        className="bus-section"
        style={{ marginTop: "25px" }}
      >
        <h2>Route Stops</h2>

        {stops.map((stop, index) => (
          <div className="bus-card" key={stop.name}>

            <div>
              <h3>
                {index + 1}. {stop.name}
              </h3>
              <p>Scheduled: {stop.time}</p>
            </div>

            <span
              className={
                stop.status === "Current"
                  ? "status active"
                  : stop.status === "Passed"
                  ? "status active"
                  : "status stopped"
              }
            >
              {stop.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ParentRoute;