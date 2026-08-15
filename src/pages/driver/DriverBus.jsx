import { Link } from "react-router-dom";

function DriverBus() {
  const bus = {
    id: "BUS-05",
    model: "Tata Starbus",
    registration: "UP32 AB 1234",
    route: "Morning School Route",
    status: "Active",
    location: "Sector 12",
    speed: "38 km/h",
    students: 32,
    capacity: 40,
    lastUpdated: "2 minutes ago",
  };

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="page-heading">
        <div>
          <h1>My Bus</h1>
          <p>View your assigned bus and current vehicle information.</p>
        </div>

        <Link to="/driver" className="back-button">
          ← Dashboard
        </Link>
      </div>

      {/* STATS */}
      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Bus Number</p>
          <h2>{bus.id}</h2>
          <span>Assigned vehicle</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Status</p>

          <div style={{ margin: "12px 0" }}>
            <span className="status active">
              {bus.status}
            </span>
          </div>

          <span>Current vehicle status</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Speed</p>
          <h2>{bus.speed}</h2>
          <span>Current speed</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Students</p>
          <h2>{bus.students}/{bus.capacity}</h2>
          <span>Students onboard</span>
        </div>

      </div>

      {/* MAIN */}
      <div className="dashboard-grid">

        {/* LIVE LOCATION */}
        <div className="map-placeholder">

          <div>
            <h2>Live Bus Location</h2>
            <p>{bus.location}</p>
            <p>GPS tracking will appear here.</p>
          </div>

        </div>

        {/* BUS INFORMATION */}
        <div className="bus-section">

          <h2>Vehicle Information</h2>

          <div className="bus-card">
            <div>
              <h3>Bus Number</h3>
              <p>{bus.id}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Model</h3>
              <p>{bus.model}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Registration Number</h3>
              <p>{bus.registration}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Assigned Route</h3>
              <p>{bus.route}</p>
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

      {/* QUICK ACTIONS */}
      <div
        className="bus-section"
        style={{ marginTop: "25px" }}
      >
        <h2>Quick Actions</h2>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>

          <Link
            to="/driver/trip"
            className="primary-button"
          >
            Today's Trip
          </Link>

          <Link
            to="/driver/boarding"
            className="view-button"
          >
            Student Boarding
          </Link>

          <Link
            to="/driver/emergency"
            className="view-button"
          >
            Emergency
          </Link>

        </div>
      </div>

    </div>
  );
}

export default DriverBus;