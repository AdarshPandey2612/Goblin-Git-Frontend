import { useParams, Link } from "react-router-dom";
import { routes } from "../../data/routes";

function RouteDetails() {
  const { id } = useParams();

  const route = routes.find((item) => item.id === id);

  if (!route) {
    return (
      <div className="dashboard">
        <h1>Route Not Found</h1>

        <Link to="/admin/routes" className="back-button">
          ← Back to Routes
        </Link>
      </div>
    );
  }

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>{route.name}</h1>
          <p>Route details and transport information.</p>
        </div>

        <Link to="/admin/routes" className="back-button">
          ← Back to Routes
        </Link>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Route ID</p>
          <h2>{route.id}</h2>
          <span>Route identifier</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Bus</p>
          <h2>{route.bus}</h2>
          <span>Assigned bus</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Stops</p>
          <h2>{route.stops}</h2>
          <span>Total stops</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Status</p>
          <h2>{route.status}</h2>
          <span>Current status</span>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="map-placeholder">
          <div>
            <h2>Route Map</h2>
            <p>{route.start} → {route.destination}</p>
            <p>Live route map will be connected later.</p>
          </div>
        </div>

        <div className="bus-section">

          <h2>Route Information</h2>

          <div className="bus-card">
            <div>
              <h3>Driver</h3>
              <p>{route.driver}</p>
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

    </div>
  );
}

export default RouteDetails;