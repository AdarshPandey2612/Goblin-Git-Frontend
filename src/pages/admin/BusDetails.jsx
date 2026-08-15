import { useParams, Link } from "react-router-dom";
import { buses } from "../../data/buses";

function BusDetails() {
  const { id } = useParams();

  const bus = buses.find((item) => item.id === id);

  if (!bus) {
    return (
      <div className="dashboard">
        <h1>Bus Not Found</h1>
        <Link to="/admin/buses" className="back-button">
          ← Back to Buses
        </Link>
      </div>
    );
  }

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>{bus.id}</h1>
          <p>Bus details and current transport information.</p>
        </div>

        <Link to="/admin/buses" className="back-button">
          ← Back to Buses
        </Link>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Status</p>
          <h2>{bus.status}</h2>
          <span>Current status</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Speed</p>
          <h2>{bus.speed}</h2>
          <span>Current speed</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Students</p>
          <h2>{bus.students}</h2>
          <span>Students onboard</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Location</p>
          <h2>{bus.location}</h2>
          <span>Current location</span>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="map-placeholder">
          <div>
            <h2>Live Bus Location</h2>
            <p>{bus.location}</p>
            <p>Live GPS map will be connected later.</p>
          </div>
        </div>

        <div className="bus-section">

          <h2>Bus Information</h2>

          <div className="bus-card">
            <div>
              <h3>Driver</h3>
              <p>{bus.driver}</p>
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

        </div>

      </div>

    </div>
  );
}

export default BusDetails;