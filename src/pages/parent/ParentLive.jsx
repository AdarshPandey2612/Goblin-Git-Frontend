function ParentLive() {
  const bus = {
    id: "BUS-05",
    driver: "Rajesh Kumar",
    location: "Sector 12",
    speed: "38 km/h",
    eta: "12 minutes",
    status: "On Route",
  };

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h1>Live Bus</h1>
          <p>Track your child's school bus in real time.</p>
        </div>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Bus</p>
          <h2>{bus.id}</h2>
          <span>{bus.status}</span>
        </div>

        <div className="stat-card">
          <p className="stat-title">Location</p>
          <h2>{bus.location}</h2>
          <span>Current location</span>
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

      <div className="live-map">

        <div className="map-road">
          <div className="map-stop stop-one">
            School
          </div>

          <div className="map-stop stop-two">
            Sector 12
          </div>

          <div className="map-stop stop-three">
            Main Gate
          </div>

          <div className="bus-marker">
            🚌
          </div>
        </div>

      </div>

      <div className="bus-section">

        <h2>Driver Information</h2>

        <div className="bus-card">
          <h3>Driver</h3>
          <p>{bus.driver}</p>
        </div>

        <div className="bus-card">
          <h3>Current Status</h3>
          <p>{bus.status}</p>
        </div>

      </div>

    </div>
  );
}

export default ParentLive;