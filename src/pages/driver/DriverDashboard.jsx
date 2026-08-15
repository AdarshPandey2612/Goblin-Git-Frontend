import { Link } from "react-router-dom";

function DriverDashboard() {
  const trip = {
    bus: "BUS-05",
    route: "Morning School Route",
    students: 32,
    boarded: 24,
    status: "In Progress",
    location: "Sector 12",
    nextStop: "Main Market",
  };

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>Driver Dashboard</h1>
          <p>Manage today's trip and student boarding.</p>
        </div>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">My Bus</p>
          <h2>{trip.bus}</h2>
          <span>Assigned vehicle</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Students</p>
          <h2>{trip.boarded}/{trip.students}</h2>
          <span>Boarded students</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Trip Status</p>
          <h2>{trip.status}</h2>
          <span>Today's trip</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Next Stop</p>
          <h2>{trip.nextStop}</h2>
          <span>Upcoming stop</span>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="map-placeholder">
          <div>
            <h2>Current Location</h2>
            <p>{trip.location}</p>
            <p>Live GPS tracking will appear here.</p>
          </div>
        </div>

        <div className="bus-section">

          <h2>Today's Trip</h2>

          <div className="bus-card">
            <div>
              <h3>Assigned Route</h3>
              <p>{trip.route}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Student Boarding</h3>
              <p>
                {trip.boarded} of {trip.students} students boarded
              </p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Next Stop</h3>
              <p>{trip.nextStop}</p>
            </div>
          </div>

          <Link
            to="/driver/boarding"
            className="primary-button"
          >
            Manage Boarding
          </Link>

        </div>

      </div>

    </div>
  );
}

export default DriverDashboard;