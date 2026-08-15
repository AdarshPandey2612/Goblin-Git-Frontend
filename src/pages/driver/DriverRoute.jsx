import { Link } from "react-router-dom";

function DriverRoute() {
  const route = {
    id: "ROUTE-A",
    name: "Morning School Route",
    bus: "BUS-05",
    status: "Active",
    start: "Sector 12",
    destination: "School Campus",
    totalStops: 8,
    students: 32,
  };

  const stops = [
    { name: "Sector 12", time: "07:15 AM", status: "Current" },
    { name: "City Center", time: "07:25 AM", status: "Upcoming" },
    { name: "School Road", time: "07:35 AM", status: "Upcoming" },
    { name: "Main Gate", time: "07:40 AM", status: "Upcoming" },
    { name: "School Campus", time: "07:45 AM", status: "Destination" },
  ];

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>My Route</h1>
          <p>View your assigned route and today's scheduled stops.</p>
        </div>

        <Link to="/driver" className="back-button">
          ← Dashboard
        </Link>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Route</p>
          <h2>{route.id}</h2>
          <span>{route.name}</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Status</p>

          <div style={{ margin: "12px 0" }}>
            <span className="status active">
              {route.status}
            </span>
          </div>

          <span>Current route status</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Stops</p>
          <h2>{route.totalStops}</h2>
          <span>Total scheduled stops</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Students</p>
          <h2>{route.students}</h2>
          <span>Students assigned</span>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="map-placeholder">
          <div>
            <h2>Route Map</h2>
            <p>
              {route.start} → {route.destination}
            </p>
            <p>
              Live route visualization will appear here.
            </p>
          </div>
        </div>

        <div className="bus-section">

          <h2>Route Information</h2>

          <div className="bus-card">
            <div>
              <h3>Route Name</h3>
              <p>{route.name}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Assigned Bus</h3>
              <p>{route.bus}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Starting Point</h3>
              <p>{route.start}</p>
            </div>
          </div>

          <div className="bus-card">
            <div>
              <h3>Destination</h3>
              <p>{route.destination}</p>
            </div>
          </div>

        </div>

      </div>

      <div
        className="bus-section"
        style={{ marginTop: "25px" }}
      >

        <h2>Today's Stops</h2>

        {stops.map((stop, index) => (
          <div className="bus-card" key={stop.name}>

            <div>
              <h3>
                {index + 1}. {stop.name}
              </h3>

              <p>
                Scheduled: {stop.time}
              </p>
            </div>

            <span
              className={
                stop.status === "Current"
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

export default DriverRoute;